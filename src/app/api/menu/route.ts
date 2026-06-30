import { NextResponse } from "next/server"
import { db } from "@/lib/db"

// GET /api/menu
export async function GET() {
    try {
        const menuItems = await db.menuItem.findMany({
            where: { available: true },
            orderBy: { category: "asc" },
        })
        return NextResponse.json(menuItems)
    } catch (error) {
        console.error("Failed to fetch menu:", error)
        return NextResponse.json({ error: "Failed to fetch menu" }, { status: 500 })
    }
}

// POST /api/menu
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const newItem = await db.menuItem.create({
            data: {
                name: body.name,
                description: body.description,
                price: body.price,
                category: body.category,
                imageUrl: body.imageUrl,
                available: body.available ?? true,
            }
        })
        return NextResponse.json(newItem, { status: 201 })
    } catch (error) {
        console.error("Failed to add menu item:", error)
        return NextResponse.json({ error: "Failed to add menu item" }, { status: 500 })
    }
}
