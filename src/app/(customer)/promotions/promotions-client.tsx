"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Tag, Clock, Sparkles, Ticket, ArrowRight, Star, ArrowLeft } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/images/hero-bg.png"
import { Promotion } from "@prisma/client"

export function PromotionsClient({ initialPromotions, backHref }: { initialPromotions: Promotion[], backHref?: string }) {
    const [activeCategory, setActiveCategory] = useState<string>("all")

    // Derive unique categories/tags dynamically from db
    const dbCategories = Array.from(new Set(initialPromotions.map((p) => p.tag)))
    const categories = [
        { label: "All Promos", value: "all" },
        ...dbCategories.map(cat => ({ label: cat, value: cat }))
    ]

    const filteredPromos = initialPromotions.filter(
        (promo) => activeCategory === "all" || promo.tag === activeCategory
    )

    // Separate featured promo (e.g. highest featured or latest)
    const featuredPromo = initialPromotions.find(p => p.featured) || initialPromotions[0]

    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24">
            {/* 1. Cinematic Header */}
            <div className="relative w-full overflow-hidden bg-foreground dark:bg-muted/20 py-20 md:py-28">
                <div className="absolute inset-0 opacity-20 dark:opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6 border border-primary/30 backdrop-blur-md uppercase tracking-wider">
                        <Tag className="w-4 h-4" />
                        Exclusive Deals
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6">
                        Claim Your <span className="text-primary italic">Promos.</span>
                    </h1>
                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                        We believe great coffee tastes even better when it comes with a great deal. Explore our active promotions below.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
                
                {/* Back Button */}
                {backHref && (
                    <div className="mb-6">
                        <Link
                            href={backHref}
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Dashboard
                        </Link>
                    </div>
                )}
                
                {/* 2. Featured Promo of the Month */}
                {featuredPromo && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-16 rounded-[2.5rem] overflow-hidden bg-card border border-border/50 shadow-2xl relative"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Image Side */}
                            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
                                <Image 
                                    src={featuredPromo.imageUrl || heroBg}
                                    alt="Promo of the Month"
                                    fill
                                    className="object-cover"
                                    unoptimized={!!featuredPromo.imageUrl}
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/40 md:to-transparent" />
                                <div className="absolute top-6 left-6 bg-red-500 text-white font-black text-xl px-4 py-2 rounded-xl shadow-lg transform -rotate-3 border-2 border-white/20 backdrop-blur-md">
                                    {featuredPromo.badge}
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-card/90 backdrop-blur-xl">
                                <div className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-4">
                                    <Sparkles className="w-4 h-4" />
                                    Deal of the Month
                                </div>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                                    {featuredPromo.title.split(' ')[0]} <span className="text-primary italic">{featuredPromo.title.split(' ').slice(1).join(' ')}</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    {featuredPromo.description}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center gap-4">
                                    <Button size="lg" className="w-full sm:w-auto rounded-full px-8 h-12 shadow-lg shadow-primary/20 text-base">
                                        Claim This Promo
                                    </Button>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground bg-muted/50 px-4 py-3 rounded-full border border-border">
                                        <Clock className="w-4 h-4 text-orange-500" />
                                        {featuredPromo.validUntil}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 3. Glassmorphism Filter Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-border/50 p-1.5 rounded-full shadow-lg shadow-black/5 inline-flex overflow-x-auto hide-scrollbar max-w-full">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.value
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                                        isActive
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePromoTab"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* 4. Active Promotions Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredPromos.filter(p => p.id !== featuredPromo?.id).map((promo, index) => (
                            <motion.div
                                key={promo.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group bg-card dark:bg-card/40 border border-border/40 rounded-[2rem] overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={promo.imageUrl || "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80"}
                                        alt={promo.title}
                                        fill
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                        unoptimized={!!promo.imageUrl}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                                    
                                    {/* Urgency Pill */}
                                    <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-border">
                                        <Clock className="w-3.5 h-3.5 text-orange-500 animate-pulse" />
                                        <span className="text-xs font-bold text-foreground">{promo.validUntil}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                                            {promo.tag}
                                        </span>
                                        <h3 className="font-display text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                            {promo.title}
                                        </h3>
                                    </div>
                                    
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                                        {promo.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                        <div className="bg-muted px-4 py-2 rounded-xl border border-dashed border-border flex items-center gap-2">
                                            <Ticket className="w-4 h-4 text-muted-foreground" />
                                            <span className="font-mono text-sm font-bold text-foreground tracking-widest">
                                                DG-{promo.id}00
                                            </span>
                                        </div>
                                        <Button size="icon" className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredPromos.filter(p => p.id !== featuredPromo?.id).length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-20 text-center"
                    >
                        <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
                            <Tag className="w-8 h-8 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2">No promos found</h3>
                        <p className="text-muted-foreground text-lg max-w-sm">
                            We don't have any active promotions for this category right now. Check back soon!
                        </p>
                    </motion.div>
                )}

                {/* 5. Call to Action (Loyalty) */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 md:p-12 rounded-[3rem] bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="relative z-10 flex-1">
                        <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase mb-3">
                            <Star className="w-4 h-4" />
                            Unlock More
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Want access to hidden deals?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            Join the Daily Grind Loyalty Program. Earn points on every purchase and unlock exclusive, members-only promotions.
                        </p>
                    </div>
                    
                    <div className="relative z-10 shrink-0 w-full md:w-auto">
                        <Link href="/loyalty">
                            <Button size="lg" className="w-full rounded-full h-14 px-8 text-base shadow-lg shadow-primary/20">
                                View Loyalty Program
                            </Button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </MainWrapper>
    )
}
