"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Coffee, Star, MapPin, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/images/daily-grind-bg.png"

const floatingBadges = [
    { icon: Star, label: "4.9 Rating", sub: "1.2k+ reviews", delay: 0.9, position: "top-[20%] right-[8%] hidden md:flex" },
    { icon: MapPin, label: "3 Branches", sub: "All in Pampanga", delay: 1.1, position: "bottom-[30%] right-[6%] hidden lg:flex" },
    { icon: Coffee, label: "50+ Blends", sub: "Ethically sourced", delay: 1.3, position: "bottom-[25%] left-[5%] hidden lg:flex" },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } }
}

export function HeroSection() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })

    // Parallax effects
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <section ref={ref} className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">

            {/* Parallax Background */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 scale-110">
                <Image
                    src={heroBg}
                    alt="Daily Grind Artisanal Coffee"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Multi-layer Overlays for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-black/40" />
                <div className="absolute inset-0 bg-black/20" />
            </motion.div>

            {/* Floating Info Badges */}
            {floatingBadges.map((badge, i) => {
                const Icon = badge.icon
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: badge.delay, duration: 0.6, ease: "easeOut" }}
                        className={`absolute z-20 ${badge.position}`}
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                            className="flex items-center gap-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-2xl shadow-2xl"
                        >
                            <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold leading-tight">{badge.label}</p>
                                <p className="text-white/60 text-xs">{badge.sub}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )
            })}

            {/* Main Content with parallax */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-16"
            >
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    {/* Top Badge */}
                    <motion.div variants={itemVariants}>
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">
                            <Coffee className="w-4 h-4 text-primary" />
                            <span>Experience the perfect roast</span>
                        </div>
                    </motion.div>

                    {/* Main Headline — split word animation */}
                    <motion.h1
                        variants={itemVariants}
                        className="max-w-5xl font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-6 leading-[0.9] drop-shadow-2xl"
                    >
                        Your Daily Dose of{" "}
                        <br className="hidden sm:block" />
                        <span className="text-primary italic relative">
                            Extraordinary
                            {/* Animated underline */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/50 rounded-full origin-left"
                            />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
                    >
                        Crafting artisanal coffee experiences with ethically sourced beans. Start your morning right or take a midday break with our signature blends and fresh pastries.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div variants    ={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
                        <Link href="/menu" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto text-base font-bold h-14 px-10 rounded-full shadow-[0_0_40px_-5px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_60px_-5px_hsl(var(--primary)/0.8)] hover:scale-105 transition-all duration-300">
                                View Our Menu
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/promotions" className="w-full sm:w-auto">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-bold h-14 px-10 rounded-full bg-white/5 border-white/20 text-white backdrop-blur-md hover:bg-white/15 hover:text-white hover:scale-105 transition-all duration-300">
                                Latest Promotions
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/10 text-white/80 w-full max-w-lg"
                    >
                        {[
                            { value: "50+", label: "Premium Blends" },
                            { value: "12k+", label: "Happy Customers" },
                            { value: "4.9★", label: "Rating" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                                <span className="text-xs uppercase tracking-wider text-white/50">{stat.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                style={{ opacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40"
            >
                <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.div>
        </section>
    )
}
