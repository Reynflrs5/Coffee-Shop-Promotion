import { getSession } from "@/lib/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { DashboardClient } from "./dashboard-client"

export default async function DashboardPage() {
    const session = await getSession()
    
    if (!session) {
        redirect("/login")
    }

    // Fetch fresh user data including loyalty points from the DB
    const user = await db.user.findUnique({
        where: { id: session.userId },
        include: { 
            loyaltyPoints: true,
            orders: {
                orderBy: { createdAt: "desc" },
                take: 3
            }
        },
    })

    if (!user) {
        redirect("/login")
    }

    const points = user.loyaltyPoints?.points || 0

    return (
        <DashboardClient 
            user={{ id: user.id, name: user.name }} 
            points={points} 
            recentOrders={user.orders}
        />
    )
}
