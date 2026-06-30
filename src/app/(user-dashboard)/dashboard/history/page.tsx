import { db } from "@/lib/db"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { HistoryClient } from "./history-client"

export const dynamic = "force-dynamic"

export default async function DashboardHistoryPage() {
    const session = await getSession()
    if (!session) {
        redirect("/login")
    }

    const orders = await db.order.findMany({
        where: { userId: session.userId },
        orderBy: { createdAt: "desc" }
    })

    return <HistoryClient initialHistory={orders} />
}
