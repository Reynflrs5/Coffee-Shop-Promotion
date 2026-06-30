import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { getSession } from "@/lib/auth"
import { db } from "@/lib/db"

export default async function CustomerLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await getSession()
    
    let verifiedUser = null
    if (session) {
        verifiedUser = await db.user.findUnique({
            where: { id: session.userId },
            select: { name: true }
        })
    }

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader user={verifiedUser} />
            <main className="flex-1">
                {children}
            </main>
            <SiteFooter />
        </div>
    )
}