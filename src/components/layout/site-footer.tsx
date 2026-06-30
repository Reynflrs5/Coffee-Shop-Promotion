import { db } from "@/lib/db"
import { SiteFooterClient } from "./site-footer-client"

export async function SiteFooter() {
    // Fetch the primary branch for footer info, fallback to hardcoded if not found
    let mainBranch = null
    try {
        mainBranch = await db.branch.findFirst({ orderBy: { id: "asc" } })
    } catch (e) {
        console.error("Failed to fetch branch for footer:", e)
    }

    const address = mainBranch?.address || "MacArthur Highway, Balibago, Angeles City, Pampanga"
    const phone = mainBranch?.phone || "+63 917 123 4567"

    return <SiteFooterClient address={address} phone={phone} />
}