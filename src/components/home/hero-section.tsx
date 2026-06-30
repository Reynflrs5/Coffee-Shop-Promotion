"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Coffee, Star, MapPin, Leaf, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBg from "@/assets/images/daily-grind-bg.png"

/* ─── Floating badge data ─── */
const floatingBadges = [
    {
        icon: Star,
        label: "4.9 / 5 Rating",
        sub: "1,200+ verified reviews",
        extra: "★★★★★",
        delay: 0.9,
        float: "floatA",
    },
    {
        icon: MapPin,
        label: "3 Branches",
        sub: "All across Pampanga",
        extra: null,
        delay: 1.1,
        float: "floatB",
    },
    {
        icon: Leaf,
        label: "Ethically Sourced",
        sub: "50+ bean origins",
        extra: null,
        delay: 1.3,
        float: "floatA",
    },
]

/* ─── Stats data ─── */
const stats = [
    { value: "50+", label: "Premium Blends" },
    { value: "12k+", label: "Happy Customers" },
    { value: "4.9★", label: "Average Rating" },
]

/* ─── Stagger variants ─── */
const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
    },
}

const navVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
}

export function HeroSection() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    /* Parallax transforms */
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"])
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen flex flex-col overflow-hidden bg-[#F5EDD8] dark:bg-[#120A04]"
        >
            {/* ── Parallax background image ── */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 z-0 scale-110 origin-center"
            >
                <Image
                    src={heroBg}
                    alt="Daily Grind Artisanal Coffee"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />

                {/* Layer 1 — left-heavy gradient so text column is always readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(245,237,216,0.96)] dark:from-[rgba(12,6,2,0.92)] via-[rgba(245,237,216,0.70)] dark:via-[rgba(12,6,2,0.60)] to-[rgba(245,237,216,0.20)] dark:to-[rgba(12,6,2,0.20)]" />

                {/* Layer 2 — bottom lift for stats strip */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(245,237,216,0.90)] dark:from-[rgba(12,6,2,0.85)] via-transparent to-transparent" />

                {/* Layer 3 — top dusk for nav */}
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(245,237,216,0.55)] dark:from-[rgba(12,6,2,0.45)] via-transparent to-transparent" />
            </motion.div>

            {/* Vignette ring */}
            <div className="absolute inset-0 z-[1] pointer-events-none hidden dark:block"
                style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(10,5,1,0.50) 100%)" }}
            />

            {/* Amber warmth bleed */}
            <div className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: "radial-gradient(ellipse 55% 70% at 0% 60%, rgba(180,90,20,0.10) 0%, transparent 70%)" }}
            />

            {/* ── Ambient steam lines ── */}
            {[18, 46, 72].map((top, i) => (
                <motion.div
                    key={i}
                    className="absolute left-0 right-0 z-[2] pointer-events-none"
                    style={{
                        top: `${top}%`,
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, rgba(200,121,65,0.14), transparent)",
                    }}
                    animate={{ x: ["-3%", "3%"], opacity: [0, 0.8, 0.5, 0] }}
                    transition={{
                        duration: 9,
                        delay: i * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        times: [0, 0.3, 0.7, 1],
                    }}
                />
            ))}

            {/* ── Drip SVG (right edge) ── */}
            <DripSVG />

            {/* ── Nav ── */}
            <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="relative z-20 flex items-center justify-between px-4 sm:px-8 md:px-12 py-4 sm:py-7"
            >
                {/* Logo */}
                <div className="flex items-center gap-2.5 font-serif text-[19px] font-bold text-[#2C1A0E] dark:text-[#FFF8EE] tracking-wide">
                    <motion.div
                        animate={{ opacity: [1, 0.4, 1], scale: [1, 0.65, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-[#C87941]"
                    />
                    Daily Grind
                </div>


            </motion.nav>

            {/* ── Hero body ── */}
            <motion.div
                style={{ y: textY, opacity: heroOpacity }}
                className="relative z-10 flex-1 flex items-center justify-center lg:justify-start w-full max-w-[1380px] mx-auto px-4 sm:px-8 md:px-12 pb-16 sm:pb-20 pt-4 sm:pt-0"
            >
                {/* Text column */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-[580px] w-full text-center lg:text-left"
                >
                    {/* Eyebrow */}
                    <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-5 sm:mb-6">
                        <span className="w-8 h-px bg-[#C87941]" />
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-bold text-[#C87941]">
                            Artisanal Coffee · Pampanga
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-serif font-black leading-[0.9] tracking-[-0.02em] text-[#1C0D03] dark:text-[#FFF8EE] mb-5 sm:mb-6"
                    >
                        <span className="block text-[clamp(36px,8vw,88px)]">
                            Your Daily Dose of
                        </span>
                        <span className="block italic text-[#C87941] text-[clamp(40px,9vw,102px)] relative">
                            Extraordinary
                            {/* Animated underline */}
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                                className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#C87941] rounded-full origin-left"
                            />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[14px] sm:text-[15.5px] leading-[1.78] text-[rgba(44,26,14,0.65)] dark:text-[rgba(245,237,216,0.52)] mb-8 sm:mb-10 mx-auto lg:mx-0 max-w-[380px]"
                    >
                        Crafting artisanal coffee experiences with ethically sourced beans.
                        Start your morning right or take a midday break with our signature
                        blends and fresh pastries.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-3.5 mb-10 sm:mb-14 justify-center lg:justify-start"
                    >
                        <Link href="/menu" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-12 sm:h-14 px-7 sm:px-9 rounded-full text-[13px] sm:text-[13.5px] font-bold tracking-[0.05em] bg-[#C87941] hover:bg-[#E8924A] text-[#180900] border-0 shadow-[0_0_40px_rgba(200,121,65,0.35)] hover:shadow-[0_0_60px_rgba(200,121,65,0.50)] hover:-translate-y-0.5 transition-all duration-200"
                            >
                                View Our Menu
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                        <Link href="/promotions" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 rounded-full text-[13px] sm:text-[13.5px] font-semibold tracking-[0.04em] bg-[rgba(44,26,14,0.07)] dark:bg-white/[0.07] border border-[rgba(44,26,14,0.20)] dark:border-white/[0.14] text-[#2C1A0E] dark:text-[#F5EDD8] backdrop-blur-xl hover:bg-[rgba(44,26,14,0.12)] dark:hover:bg-white/[0.12] hover:text-[#1C0D03] dark:hover:text-white hover:border-[rgba(44,26,14,0.35)] dark:hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200"
                            >
                                Latest Promotions
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div
                        variants={itemVariants}
                        className="flex justify-center lg:justify-start pt-6 sm:pt-8 border-t border-[rgba(44,26,14,0.15)] dark:border-white/[0.09]"
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-1 ${i > 0 ? "border-l border-[rgba(44,26,14,0.15)] dark:border-white/[0.09] pl-4 sm:pl-7 ml-4 sm:ml-7" : ""
                                    }`}
                            >
                                <span className="font-serif text-[22px] sm:text-[30px] font-bold text-[#1C0D03] dark:text-[#FFF8EE] leading-none">
                                    {stat.value.replace("+", "").replace("★", "")}
                                    <span className="text-[#C87941]">
                                        {stat.value.includes("+") ? "+" : stat.value.includes("★") ? "★" : ""}
                                    </span>
                                </span>
                                <span className="text-[9.5px] sm:text-[10.5px] uppercase tracking-[0.15em] text-[#6B5744] dark:text-[#9A8B78]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── Floating badges — right side, over the visible image ── */}
                <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
                    {floatingBadges.map((badge, i) => {
                        const Icon = badge.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 24 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: badge.delay, duration: 0.65, ease: "easeOut" }}
                            >
                                <motion.div
                                    animate={{ y: i % 2 === 0 ? [0, -7, 0] : [0, 7, 0] }}
                                    transition={{
                                        duration: 6 + i,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: badge.delay + 0.5,
                                    }}
                                    className="flex items-center gap-3 bg-[rgba(245,237,216,0.80)] dark:bg-[rgba(14,8,3,0.55)] border border-[rgba(200,121,65,0.30)] dark:border-[rgba(200,121,65,0.22)] rounded-2xl px-4 py-3.5 backdrop-blur-xl shadow-sm dark:shadow-none"
                                >
                                    <div className="w-10 h-10 rounded-[11px] bg-[rgba(200,121,65,0.15)] flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-4.5 h-4.5 text-[#C87941]" />
                                    </div>
                                    <div>
                                        {badge.extra && (
                                            <p className="text-[#C87941] text-[10px] tracking-[1.5px] mb-0.5">
                                                {badge.extra}
                                            </p>
                                        )}
                                        <p className="text-[12.5px] font-bold text-[#1C0D03] dark:text-[#FFF8EE] whitespace-nowrap leading-tight">
                                            {badge.label}
                                        </p>
                                        <p className="text-[10.5px] text-[#9A8B78] whitespace-nowrap mt-0.5">
                                            {badge.sub}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </motion.div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{ opacity: heroOpacity }}
                className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[rgba(44,26,14,0.50)] dark:text-[rgba(154,139,120,0.65)]"
            >
                <span className="text-[9.5px] uppercase tracking-[0.22em] font-semibold">
                    Scroll
                </span>
                <motion.div
                    animate={{ scaleY: [1, 1.1, 1], opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-10 bg-gradient-to-b from-[#C87941] to-transparent"
                />
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    )
}

/* ─────────────────────────────────────────
   Drip SVG — signature ambient element
   Animates a coffee drip down the right edge
───────────────────────────────────────── */
function DripSVG() {
    return (
        <svg
            className="absolute right-0 top-0 w-[100px] h-full pointer-events-none z-[3] opacity-50"
            viewBox="0 0 100 800"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="dripGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C87941" stopOpacity={0} />
                    <stop offset="35%" stopColor="#C87941" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#C87941" stopOpacity={0.05} />
                </linearGradient>
            </defs>
            <DripAnimatedPath />
        </svg>
    )
}

/* Client-only drip path animation using framer-motion pathLength */
function DripAnimatedPath() {
    return (
        <>
            <motion.path
                d="M50,0 Q56,100 48,200 Q42,310 54,420 Q64,520 46,660 Q40,720 50,780"
                stroke="url(#dripGrad)"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={{
                    duration: 3.4,
                    delay: 0.8,
                    repeat: Infinity,
                    repeatDelay: 2.6,
                    ease: "easeInOut",
                    times: [0, 0.6, 0.85, 1],
                }}
            />
            {/* Trailing drop dot */}
            <motion.circle
                r={3}
                fill="#C87941"
                initial={{ opacity: 0, cy: 0, cx: 50 }}
                animate={{
                    cy: [0, 200, 420, 660, 780],
                    cx: [50, 48, 54, 46, 50],
                    opacity: [0, 0.85, 0.85, 0.85, 0],
                }}
                transition={{
                    duration: 3.4,
                    delay: 0.8,
                    repeat: Infinity,
                    repeatDelay: 2.6,
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.75, 1],
                }}
            />
        </>
    )
}