"use client"

import { Promotion } from "@prisma/client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tag, Clock, ArrowRight, Sparkles, Snowflake } from "lucide-react"
import Link from "next/link"

/* ─── Animation variants ─── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const cardVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const headerVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
}

/* ─── Pulse dot — used on "dark" badges to signal urgency ─── */
function PulseDot() {
    return (
        <motion.span
            animate={{ opacity: [1, 0.35, 1], scale: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFF8EE] flex-shrink-0"
        />
    )
}

/* ─── Single promo card ─── */
function PromoCard({ promo }: { promo: Promotion }) {
    const isFeatured = promo.featured
    const badgeVariant = isFeatured ? "amber" : "dark"
    
    // Map icons based on tag or title
    let Icon = Sparkles
    if (promo.tag.includes("Sun") || promo.badge.includes("Weekend")) Icon = Tag
    if (promo.title.toLowerCase().includes("chill") || promo.title.toLowerCase().includes("iced")) Icon = Snowflake

    // Default fallback image if none provided
    const imageUrl = promo.imageUrl || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className={[
                "group relative flex flex-col rounded-[20px] overflow-hidden",
                "bg-card border transition-shadow duration-300",
                isFeatured
                    ? "border-[rgba(200,121,65,0.28)] shadow-[0_4px_24px_rgba(200,121,65,0.10)] hover:shadow-[0_24px_56px_rgba(200,121,65,0.18)]"
                    : "border-border hover:shadow-xl",
            ].join(" ")}
        >
            {/* Image */}
            <div
                className={[
                    "relative w-full overflow-hidden bg-[#2A1408]",
                    isFeatured ? "h-[200px] sm:h-[260px]" : "h-[170px] sm:h-[190px]",
                ].join(" ")}
            >
                <Image
                    src={imageUrl}
                    alt={promo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    quality={90}
                    unoptimized={!!promo.imageUrl}
                />

                {/* Gradient overlay — amber tint for featured, dark for others */}
                <div
                    className={[
                        "absolute inset-0",
                        isFeatured
                            ? "bg-gradient-to-b from-[rgba(200,121,65,0.08)] to-[rgba(12,6,2,0.55)]"
                            : "bg-gradient-to-b from-transparent to-[rgba(12,6,2,0.50)]",
                    ].join(" ")}
                />

                {/* Badge */}
                {badgeVariant === "amber" ? (
                    <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em] bg-[rgba(200,121,65,0.90)] text-[#1A0900] backdrop-blur-md">
                        {promo.badge}
                    </span>
                ) : (
                    <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10.5px] font-bold uppercase tracking-[0.1em] bg-[rgba(18,10,4,0.72)] text-[#F5EDD8] border border-[rgba(245,237,216,0.15)] backdrop-blur-md">
                        <PulseDot />
                        {promo.badge}
                    </span>
                )}
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-4 sm:p-[22px] gap-0">
                {/* Icon row */}
                <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-[11px] flex items-center justify-center bg-[rgba(200,121,65,0.12)] border border-[rgba(200,121,65,0.22)]">
                        <Icon className="w-[17px] h-[17px] text-[#C87941]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#C87941]">
                        {promo.tag}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className={[
                        "font-serif font-bold text-foreground leading-[1.2] tracking-[-0.01em] mb-2",
                        isFeatured ? "text-[22px]" : "text-[19px]",
                    ].join(" ")}
                >
                    {promo.title}
                </h3>

                {/* Description */}
                <p className="text-[13.5px] leading-[1.65] text-muted-foreground mb-[18px] flex-1">
                    {promo.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-border/60 mb-4" />

                {/* Validity */}
                <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground mb-3.5">
                    <Clock className="w-3.5 h-3.5 text-[#C87941] flex-shrink-0" />
                    {promo.validUntil}
                </div>

                {/* CTA */}
                {isFeatured ? (
                    <button className="w-full flex items-center justify-center gap-1.5 h-11 rounded-full text-[13px] font-bold tracking-[0.04em] bg-[#C87941] text-[#1A0900] border-0 shadow-[0_0_28px_rgba(200,121,65,0.30)] hover:bg-[#D98B52] hover:shadow-[0_0_40px_rgba(200,121,65,0.45)] transition-all duration-200 group/btn">
                        Claim deal
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                ) : (
                    <button className="w-full flex items-center justify-center gap-1.5 h-11 rounded-full text-[13px] font-bold tracking-[0.04em] bg-transparent text-[#C87941] border border-[rgba(200,121,65,0.28)] hover:bg-[rgba(200,121,65,0.10)] transition-all duration-200 group/btn">
                        Claim deal
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                )}
            </div>
        </motion.div>
    )
}

/* ─── Section ─── */
export function PromotionsGrid({ initialPromotions }: { initialPromotions: Promotion[] }) {
    // Sort so featured is in the middle if there are 3
    const sortedPromotions = [...initialPromotions].sort((a, b) => {
        if (a.featured) return -1;
        if (b.featured) return 1;
        return 0;
    });

    // Reorder array: [normal, featured, normal] for the 3-column layout
    const displayPromotions = sortedPromotions.length === 3
        ? [sortedPromotions[1], sortedPromotions[0], sortedPromotions[2]]
        : sortedPromotions;

    return (
        <section className="w-full py-12 sm:py-16 md:py-[72px] bg-background">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-col items-center text-center mb-14"
                >
                    {/* Eyebrow */}
                    <div className="flex items-center gap-2.5 mb-4">
                        <span className="w-7 h-px bg-[#C87941]" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C87941]">
                            Deals &amp; Offers
                        </span>
                        <span className="w-7 h-px bg-[#C87941]" />
                    </div>

                    <h2 className="font-serif text-[clamp(34px,4.5vw,52px)] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-3.5">
                        Current{" "}
                        <span className="italic text-[#C87941]">Promotions</span>
                    </h2>

                    <p className="text-[15px] text-muted-foreground max-w-[480px] leading-[1.7]">
                        Exclusive seasonal deals and daily steals — premium coffee, more value in every cup.
                    </p>
                </motion.div>

                {/* Grid — 1 col mobile, 2 col tablet, 3 col desktop */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 items-start"
                >
                    {displayPromotions.map((promo) => (
                        <PromoCard key={promo.id} promo={promo} />
                    ))}
                </motion.div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-12 flex justify-center"
                >
                    <Link
                        href="/promotions"
                        className="group inline-flex items-center gap-2 text-[13.5px] font-bold uppercase tracking-[0.06em] text-[#C87941] border-b border-[rgba(200,121,65,0.30)] pb-0.5 hover:border-[#C87941] transition-all duration-200 hover:gap-3"
                    >
                        View all promotions
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}