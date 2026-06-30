import { db } from "@/lib/db"
import { PromotionsClient } from "@/app/(customer)/promotions/promotions-client"

export const dynamic = "force-dynamic"

export default async function DashboardPromotionsPage() {
    const promotions = await db.promotion.findMany({
        orderBy: { createdAt: "desc" },
    })

    return <PromotionsClient initialPromotions={promotions} backHref="/dashboard" />
}
