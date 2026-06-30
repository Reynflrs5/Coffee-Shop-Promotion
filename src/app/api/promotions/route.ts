import { NextResponse } from "next/server"
import { db } from "@/lib/db"

// GET /api/promotions
export async function GET() {
    try {
        const promotions = await db.promotion.findMany({
            orderBy: { createdAt: "desc" },
        })
        return NextResponse.json(promotions)
    } catch (error) {
        console.error("Failed to fetch promotions:", error)
        return NextResponse.json({ error: "Failed to fetch promotions" }, { status: 500 })
    }
}

// POST /api/promotions (Para kung gusto mong gumawa ng admin panel sa susunod)
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const newPromo = await db.promotion.create({
            data: {
                title: body.title,
                description: body.description,
                badge: body.badge,
                tag: body.tag,
                validUntil: body.validUntil,
                featured: body.featured || false,
                imageUrl: body.imageUrl,
            }
        })
        return NextResponse.json(newPromo, { status: 201 })
    } catch (error) {
        console.error("Failed to create promotion:", error)
        return NextResponse.json({ error: "Failed to create promotion" }, { status: 500 })
    }
}
