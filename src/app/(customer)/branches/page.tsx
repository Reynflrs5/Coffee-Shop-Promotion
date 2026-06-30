import { db } from "@/lib/db"
import { BranchesClient } from "./branches-client"

export const dynamic = "force-dynamic"

export default async function BranchesPage() {
    // Fetch all branches from the database
    const branches = await db.branch.findMany({
        orderBy: { id: "asc" },
    })

    return <BranchesClient initialBranches={branches} />
}
