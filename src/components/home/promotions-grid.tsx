"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Tag, Clock, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import promo1 from "@/assets/images/promo1.png"
import promo2 from "@/assets/images/promo2.png"
import promo3 from "@/assets/images/promo3.png"

const PROMOTIONS = [
    {
        id: 1,
        title: "Morning Rush Combo",
        description: "Get any medium coffee + freshly baked croissant for only ₱199. Perfect way to start your day!",
        badge: "Most Popular",
        validUntil: "Valid everyday until 10:00 AM",
        color: "bg-orange-500/10 border-orange-500/20 text-orange-500",
        icon: <Sparkles className="w-6 h-6 text-orange-500" />,
        image: promo1,
    },
    {
        id: 2,
        title: "Weekend Buy 1 Get 1",
        description: "Bring a friend and enjoy our signature Caramel Macchiato. Buy one, get the second at 50% off.",
        badge: "Weekend Special",
        validUntil: "Valid Sat & Sun all day",
        color: "bg-primary/10 border-primary/20 text-primary",
        icon: <Tag className="w-6 h-6 text-primary" />,
        image: promo2,
    },
    {
        id: 3,
        title: "Happy Hour Chill",
        description: "Beat the afternoon slump. All Iced Coffees and Frappes are 20% off during happy hour.",
        badge: "Limited Time",
        validUntil: "Valid 2:00 PM - 5:00 PM",
        color: "bg-blue-500/10 border-blue-500/20 text-blue-500",
        icon: <Clock className="w-6 h-6 text-blue-500" />,
        image: promo3,
    }
]

export function PromotionsGrid() {
    return (
        <section className="w-full py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Current <span className="text-primary italic">Promotions</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl text-lg">
                            Take advantage of our exclusive seasonal deals and daily steals. Treat yourself to premium coffee for less.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PROMOTIONS.map((promo, index) => (
                        <motion.div
                            key={promo.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative flex flex-col rounded-3xl bg-card border border-border shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="relative w-full h-52 overflow-hidden">
                                <Image
                                    src={promo.image}
                                    alt={promo.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Badge over image */}
                                <div className="absolute top-4 left-4">
                                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm bg-background/80 border ${promo.color}`}>
                                        {promo.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-col flex-1 justify-between p-6">
                                <div>
                                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 border ${promo.color}`}>
                                        {promo.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-2 font-display">
                                        {promo.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                        {promo.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border/50">
                                    <p className="text-sm text-muted-foreground font-medium mb-3 flex items-center gap-2">
                                        <Clock className="w-4 h-4 shrink-0" />
                                        {promo.validUntil}
                                    </p>
                                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" variant="outline">
                                        Claim Deal
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 flex justify-center"
                >
                    <Link href="/promotions">
                        <Button size="lg" variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                            View All Promotions
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </Link>
                </motion.div>
                
            </div>
        </section>
    )
}
