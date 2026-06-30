import { DashboardHeader } from "@/components/layout/dashboard-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { getSession } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()
    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen flex-col">
            <DashboardHeader user={session} />
            <main className="flex-1">
                {children}
            </main>
            <SiteFooter />
        </div>
    )
}
