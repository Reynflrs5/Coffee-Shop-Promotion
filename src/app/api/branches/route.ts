import { NextResponse } from "next/server"
import { db } from "@/lib/db"

// GET /api/branches
export async function GET() {
    try {
        const branches = await db.branch.findMany({
            orderBy: { id: "asc" },
        })
        return NextResponse.json(branches)
    } catch (error) {
        console.error("Failed to fetch branches:", error)
        return NextResponse.json({ error: "Failed to fetch branches" }, { status: 500 })
    }
}
