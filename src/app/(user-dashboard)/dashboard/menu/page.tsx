import { db } from "@/lib/db"
import { MenuClient } from "@/app/(customer)/menu/menu-client"

export const dynamic = "force-dynamic"

export default async function DashboardMenuPage() {
    const menuItems = await db.menuItem.findMany({
        where: { available: true },
        orderBy: { category: "asc" },
    })

    return <MenuClient initialItems={menuItems} backHref="/dashboard" />
}