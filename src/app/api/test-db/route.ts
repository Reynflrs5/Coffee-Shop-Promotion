import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
    try {
        // Susubukan nating kunin ang lahat ng branches mula sa database
        const branches = await db.branch.findMany()
        const promotions = await db.promotion.findMany()

        return NextResponse.json({
            status: "SUCCESS",
            message: "Database is perfectly connected!",
            data: {
                totalBranches: branches.length,
                totalPromotions: promotions.length,
                branches: branches,
                promotions: promotions
            }
        })
    } catch (error) {
        console.error("Database connection error:", error)
        return NextResponse.json(
            { status: "ERROR", message: "Failed to connect to the database", error: String(error) },
            { status: 500 }
        )
    }
}
