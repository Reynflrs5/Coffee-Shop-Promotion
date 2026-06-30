import { db } from "@/lib/db"
import { MenuClient } from "./menu-client"

export const dynamic = "force-dynamic" // Ensure fresh data when items are added

export default async function MenuPage() {
    // Fetch menu items from the database
    const menuItems = await db.menuItem.findMany({
        where: { available: true },
        orderBy: { category: "asc" },
    })

    return <MenuClient initialItems={menuItems} />
}