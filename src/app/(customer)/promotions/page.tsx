import { db } from "@/lib/db"
import { PromotionsClient } from "./promotions-client"

export const dynamic = "force-dynamic"

export default async function PromotionsPage() {
    // Fetch all promotions from the database
    const promotions = await db.promotion.findMany({
        orderBy: { createdAt: "desc" },
    })

    return <PromotionsClient initialPromotions={promotions} />
}
