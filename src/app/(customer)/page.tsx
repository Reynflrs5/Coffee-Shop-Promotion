import { HeroSection } from "@/components/home/hero-section"
import { PromotionsGrid } from "@/components/home/promotions-grid"

export default function HomePage() {
    return (
        <main className="flex-1 w-full flex flex-col">
            <HeroSection />
            <PromotionsGrid />
        </main>
    )
}