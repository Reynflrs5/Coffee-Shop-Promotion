"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Award, Star, Coffee, Gift, Sparkles, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

type RewardCategory = "all" | "drinks" | "food" | "merch" | "discounts"

const rewards = [
    {
        id: 1,
        name: "Free Drip Coffee",
        description: "Enjoy any size of our classic house-brewed drip coffee on us.",
        points: 150,
        category: "drinks",
        icon: "☕",
        tag: "Popular",
    },
    {
        id: 2,
        name: "Free Pastry of Choice",
        description: "Pick any pastry from our daily baked selection.",
        points: 200,
        category: "food",
        icon: "🥐",
        tag: "Best Value",
    },
    {
        id: 3,
        name: "20% Off Your Order",
        description: "Get 20% off your entire order on your next visit.",
        points: 300,
        category: "discounts",
        icon: "🏷️",
        tag: null,
    },
    {
        id: 4,
        name: "Free Signature Latte",
        description: "Any of our handcrafted signature lattes — your choice, on us.",
        points: 400,
        category: "drinks",
        icon: "🧋",
        tag: "Premium",
    },
    {
        id: 5,
        name: "Daily Grind Tumbler",
        description: "An exclusive, premium branded stainless steel tumbler (500ml).",
        points: 1000,
        category: "merch",
        icon: "🥤",
        tag: "Exclusive",
    },
    {
        id: 6,
        name: "Free Cold Brew",
        description: "A 12-hour steeped signature cold brew, chilled to perfection.",
        points: 350,
        category: "drinks",
        icon: "🧊",
        tag: null,
    },
    {
        id: 7,
        name: "Buy 1 Get 1 Espresso",
        description: "Get a free espresso with any espresso purchase.",
        points: 500,
        category: "discounts",
        icon: "2️⃣",
        tag: null,
    },
    {
        id: 8,
        name: "Daily Grind Tote Bag",
        description: "A reusable, organic canvas tote bag with our signature branding.",
        points: 800,
        category: "merch",
        icon: "🛍️",
        tag: "New",
    },
]

const categories: { label: string; value: RewardCategory }[] = [
    { label: "All Rewards", value: "all" },
    { label: "Drinks", value: "drinks" },
    { label: "Food", value: "food" },
    { label: "Discounts", value: "discounts" },
    { label: "Merch", value: "merch" },
]

function getTagStyle(tag: string) {
    switch (tag) {
        case "Popular": return "bg-blue-500/10 text-blue-500 border-blue-500/20"
        case "Best Value": return "bg-green-500/10 text-green-500 border-green-500/20"
        case "Premium": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
        case "Exclusive": return "bg-orange-500/10 text-orange-500 border-orange-500/20"
        case "New": return "bg-primary/10 text-primary border-primary/20"
        default: return ""
    }
}

export function LoyaltyClient({ initialPoints }: { initialPoints: number }) {
    const [activeCategory, setActiveCategory] = useState<RewardCategory>("all")
    const [redeemedId, setRedeemedId] = useState<number | null>(null)

    const filtered = rewards.filter(r => activeCategory === "all" || r.category === activeCategory)

    const handleRedeem = (id: number) => {
        setRedeemedId(id)
        setTimeout(() => setRedeemedId(null), 3000)
    }

    return (
        <div className="min-h-screen bg-background pb-24">

            {/* Hero Header */}
            <div className="relative pt-16 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                    {/* Back Button */}
                    <div className="mb-10">
                        <Link
                            href="/dashboard"
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors shadow-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Dashboard
                        </Link>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-primary/20 mb-6">
                                <Sparkles className="w-4 h-4" /> Rewards Catalog
                            </div>
                            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
                                Spend Your <span className="text-primary italic">Points</span>
                            </h1>
                            <p className="text-muted-foreground text-xl max-w-xl">
                                You've earned it. Browse our catalog and redeem your loyalty points for exclusive drinks, food, merch, and more.
                            </p>
                        </motion.div>

                        {/* Points Balance Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 }}
                            className="bg-card border border-border rounded-3xl p-8 min-w-[280px] shadow-xl relative overflow-hidden shrink-0"
                        >
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Your Balance</span>
                                </div>
                                <div className="font-display text-6xl font-bold text-foreground mb-1">
                                    {initialPoints.toLocaleString()}
                                </div>
                                <div className="text-muted-foreground text-sm flex items-center gap-2">
                                    <Star className="w-4 h-4 text-primary" />
                                    Gold Tier Member
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-border/50 p-1.5 rounded-full shadow-lg inline-flex overflow-x-auto max-w-full gap-1">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat.value
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                                        isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeLoyaltyTab"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{cat.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </motion.div>

                {/* Rewards Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((reward, index) => {
                            const canRedeem = initialPoints >= reward.points
                            const isRedeemed = redeemedId === reward.id

                            return (
                                <motion.div
                                    key={reward.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className={`group relative bg-card border rounded-3xl p-6 flex flex-col transition-all duration-500 ${
                                        canRedeem
                                            ? "border-border/40 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                                            : "border-border/30 opacity-60"
                                    }`}
                                >
                                    {/* Tag Badge */}
                                    {reward.tag && (
                                        <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${getTagStyle(reward.tag)}`}>
                                            {reward.tag}
                                        </span>
                                    )}

                                    {/* Emoji Icon */}
                                    <div className="text-5xl mb-5">{reward.icon}</div>

                                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {reward.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {reward.description}
                                    </p>

                                    <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-1.5">
                                            <Star className="w-4 h-4 text-primary" />
                                            <span className="font-bold text-lg text-foreground">{reward.points}</span>
                                            <span className="text-sm text-muted-foreground">pts</span>
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {isRedeemed ? (
                                                <motion.div
                                                    key="redeemed"
                                                    initial={{ scale: 0.8, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.8, opacity: 0 }}
                                                    className="flex items-center gap-1.5 text-green-500 font-bold text-sm"
                                                >
                                                    <CheckCircle className="w-5 h-5" />
                                                    Redeemed!
                                                </motion.div>
                                            ) : canRedeem ? (
                                                <motion.div key="redeem-btn" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                                    <Button
                                                        size="sm"
                                                        className="rounded-full font-bold shadow-md shadow-primary/20"
                                                        onClick={() => handleRedeem(reward.id)}
                                                    >
                                                        <Gift className="w-4 h-4 mr-1.5" /> Redeem
                                                    </Button>
                                                </motion.div>
                                            ) : (
                                                <motion.div key="locked" className="flex items-center gap-1.5 text-muted-foreground text-sm font-medium">
                                                    <Lock className="w-4 h-4" />
                                                    Need {reward.points - initialPoints} more
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}
