import { DashboardHeader } from "@/components/layout/dashboard-header"
import { SiteFooter } from "@/components/layout/site-footer"

export default function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <DashboardHeader />
            <main className="flex-1">
                {children}
            </main>
            <SiteFooter />
        </div>
    )
}
