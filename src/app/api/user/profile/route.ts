import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import { getSession, setSessionCookie } from "@/lib/auth"

export async function PUT(request: Request) {
    try {
        const session = await getSession()

        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await request.json()
        const { name } = body

        if (!name || typeof name !== "string") {
            return NextResponse.json({ error: "Name is required" }, { status: 400 })
        }

        // Update user in DB
        const updatedUser = await db.user.update({
            where: { id: session.userId },
            data: { name: name.trim() }
        })

        // Update the JWT session cookie with the new name
        await setSessionCookie({
            userId: updatedUser.id,
            email: updatedUser.email,
            name: updatedUser.name
        })

        return NextResponse.json({ 
            message: "Profile updated successfully",
            user: { name: updatedUser.name }
        }, { status: 200 })

    } catch (error) {
        console.error("Profile update error:", error)
        return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
    }
}
