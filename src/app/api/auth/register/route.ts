import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { setSessionCookie } from "@/lib/auth"

export async function POST(req: NextRequest) {
    try {
        const { email, password, firstName, lastName } = await req.json()

        // ── Validate input ──────────────────────────────────────────────────────
        if (!email || !password || !firstName || !lastName) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            )
        }

        if (password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters." },
                { status: 400 }
            )
        }

        // ── Check if email already exists ───────────────────────────────────────
        const existing = await db.user.findUnique({ where: { email } })
        if (existing) {
            return NextResponse.json(
                { error: "An account with this email already exists." },
                { status: 409 }
            )
        }

        // ── Hash password & create user ─────────────────────────────────────────
        const passwordHash = await bcrypt.hash(password, 12)
        const fullName = `${firstName} ${lastName}`.trim()

        const user = await db.user.create({
            data: {
                email,
                name: fullName,
                passwordHash,
                loyaltyPoints: {
                    create: { points: 0 },   // auto-create loyalty record
                },
            },
        })

        // ── Create session and set cookie ───────────────────────────────────────
        await setSessionCookie({
            userId: user.id,
            email: user.email,
            name: user.name,
        })

        return NextResponse.json(
            { message: "Account created successfully!", userId: user.id },
            { status: 201 }
        )
    } catch (error) {
        console.error("[REGISTER ERROR]", error)
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        )
    }
}
