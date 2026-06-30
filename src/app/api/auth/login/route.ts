import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { setSessionCookie } from "@/lib/auth"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json()

        // ── Validate input ──────────────────────────────────────────────────────
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required." },
                { status: 400 }
            )
        }

        // ── Look up user ────────────────────────────────────────────────────────
        const user = await db.user.findUnique({ where: { email } })

        if (!user) {
            // Deliberate vague message to prevent user enumeration
            return NextResponse.json(
                { error: "Invalid email or password." },
                { status: 401 }
            )
        }

        // ── Verify password ─────────────────────────────────────────────────────
        const isValid = await bcrypt.compare(password, user.passwordHash)

        if (!isValid) {
            return NextResponse.json(
                { error: "Invalid email or password." },
                { status: 401 }
            )
        }

        // ── Create session and set cookie ───────────────────────────────────────
        await setSessionCookie({
            userId: user.id,
            email: user.email,
            name: user.name,
        })

        return NextResponse.json(
            { message: "Logged in successfully!", userId: user.id },
            { status: 200 }
        )
    } catch (error) {
        console.error("[LOGIN ERROR]", error)
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        )
    }
}
