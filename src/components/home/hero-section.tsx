"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/images/daily-grind-bg.png"

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax effect via standard absolute positioning */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Daily Grind Artisanal Coffee"
                    fill
                    priority
                    className="object-cover object-center scale-105"
                    quality={100}
                />
                {/* Gradient overlay for text readability - dark mode feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16">

                {/* Small Top Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium"
                >
                    <Coffee className="w-4 h-4 text-primary" />
                    <span>Experience the perfect roast</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="max-w-4xl font-display text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg"
                >
                    Your Daily Dose of <br className="hidden sm:block" />
                    <span className="text-primary italic">Extraordinary</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 drop-shadow"
                >
                    Crafting artisanal coffee experiences with ethically sourced beans. Start your morning right or take a midday break with our signature blends and fresh pastries.
                </motion.p>

                {/* Call to Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Link href="/menu" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto text-base font-semibold h-14 px-8 rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all">
                            View Our Menu
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>

                    <Link href="/promotions" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold h-14 px-8 rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/10 hover:text-white transition-all">
                            Latest Promotions
                        </Button>
                    </Link>
                </motion.div>

                {/* Stats / Features at the bottom of hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/10 text-white/80"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white mb-1">50+</span>
                        <span className="text-sm uppercase tracking-wider">Premium Blends</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white mb-1">12k+</span>
                        <span className="text-sm uppercase tracking-wider">Happy Customers</span>
                    </div>
                    <div className="flex flex-col items-center col-span-2 md:col-span-1">
                        <span className="text-3xl font-bold text-white mb-1">4.9/5</span>
                        <span className="text-sm uppercase tracking-wider">Average Rating</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
