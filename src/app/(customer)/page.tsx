import { HeroSection } from "@/components/home/hero-section"
import { PromotionsGrid } from "@/components/home/promotions-grid"
import { db } from "@/lib/db"

export default async function HomePage() {
    // Fetch all promotions from the database
    const promotions = await db.promotion.findMany({
        orderBy: { id: "asc" },
        take: 3, // We only need 3 for the home grid
    })

    return (
        <main className="flex-1 w-full flex flex-col">
            <HeroSection />
            <PromotionsGrid initialPromotions={promotions} />
        </main>
    )
}