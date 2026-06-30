import { db } from "@/lib/db"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { LoyaltyClient } from "./loyalty-client"

export const dynamic = "force-dynamic"

export default async function DashboardLoyaltyPage() {
    const session = await getSession()
    if (!session) {
        redirect("/login")
    }

    const loyalty = await db.loyaltyPoints.findUnique({
        where: { userId: session.userId }
    })

    return <LoyaltyClient initialPoints={loyalty?.points || 0} />
}
