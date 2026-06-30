import { db } from "@/lib/db"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"
import { ProfileClient } from "./profile-client"

export const dynamic = "force-dynamic"

export default async function DashboardProfilePage() {
    const session = await getSession()
    if (!session) {
        redirect("/login")
    }

    const user = await db.user.findUnique({
        where: { id: session.userId },
        include: { loyaltyPoints: true }
    })

    if (!user) {
        redirect("/login")
    }

    const points = user.loyaltyPoints?.points || 0

    return <ProfileClient user={user} points={points} />
}
