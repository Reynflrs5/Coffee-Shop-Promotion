"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Clock, Phone, Car, Wifi, Coffee, MapPinned, ArrowRight, Star, ChevronDown } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"

import storeImg1 from "@/assets/images/hero-bg.png"
import storeImg2 from "@/assets/images/daily-grind1.png"
import storeImg3 from "@/assets/images/daily-grind-bg.png"

// Using Branch from prisma
import { Branch } from "@prisma/client"

const stats = [
    { value: "3", label: "Branches" },
    { value: "12k+", label: "Happy Customers" },
    { value: "4.8★", label: "Avg. Rating" },
    { value: "Since 2019", label: "Serving Pampanga" },
]

export function BranchesClient({ initialBranches }: { initialBranches: Branch[] }) {
    const [activeId, setActiveId] = useState<number | null>(null)

    // Map Prisma branches to add some UI flavor (since these fields aren't in DB yet)
    const displayBranches = initialBranches.map((branch, i) => {
        const images = [storeImg1, storeImg2, storeImg3]
        const colors = [
            "bg-primary/10 text-primary border-primary/20",
            "bg-purple-500/10 text-purple-500 border-purple-500/20",
            "bg-green-500/10 text-green-500 border-green-500/20"
        ]
        return {
            ...branch,
            image: images[i % images.length],
            tagColor: colors[i % colors.length],
            tag: i === 0 ? "Flagship" : (i === 1 ? "Premium" : "24/7"),
            subtitle: i === 0 ? "Flagship Store" : "Local Branch",
            rating: "4.8",
            reviews: "1.2k",
            amenities: [
                { icon: Wifi, label: "Fast Wi-Fi" },
                { icon: Car, label: "Parking" },
                { icon: Coffee, label: "Dine In" },
            ]
        }
    })

    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24 overflow-hidden">

            {/* ── 1. Cinematic Header ── */}
            <div className="relative w-full bg-foreground dark:bg-muted/10 pt-28 pb-36 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px]" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFBF7] dark:from-background to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/30">
                        <MapPin className="w-4 h-4" />
                        Pampanga Exclusives
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
                        Find Your <br />
                        <span className="text-primary italic">Daily Grind.</span>
                    </h1>
                    <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Proudly brewing in the Culinary Capital of the Philippines. Visit our meticulously designed stores across Pampanga.
                    </p>

                    {/* Scroll cue */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mt-12 flex justify-center text-white/30"
                    >
                        <ChevronDown className="w-6 h-6" />
                    </motion.div>
                </motion.div>
            </div>

            {/* ── 2. Stats Strip ── */}
            <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-20 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden shadow-xl border border-border"
                >
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-card px-6 py-6 text-center">
                            <div className="font-display text-2xl font-bold text-primary mb-1">
                                {stat.label === "Branches" ? initialBranches.length : stat.value}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ── 3. Branch Location Cards ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 mb-24">
                    {displayBranches.map((branch, index) => (
                        <motion.div
                            key={branch.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div
                                className={`group relative bg-card border rounded-[2rem] overflow-hidden transition-all duration-500 cursor-pointer ${
                                    activeId === branch.id
                                        ? "border-primary/50 shadow-2xl shadow-primary/10"
                                        : "border-border/40 hover:border-primary/30 hover:shadow-xl"
                                }`}
                                onClick={() => setActiveId(activeId === branch.id ? null : branch.id)}
                            >
                                <div className="flex flex-col lg:flex-row">
                                    {/* Image */}
                                    <div className="relative w-full lg:w-2/5 min-h-[260px] lg:min-h-[320px] overflow-hidden shrink-0">
                                        <Image
                                            src={branch.image}
                                            alt={branch.name}
                                            fill
                                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden lg:block" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:hidden" />

                                        {/* Tag */}
                                        <span className={`absolute top-5 left-5 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border backdrop-blur-md ${branch.tagColor}`}>
                                            {branch.tag}
                                        </span>

                                        {/* Rating bubble */}
                                        <div className="absolute bottom-5 left-5 flex items-center gap-1.5 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-border">
                                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                            <span className="text-xs font-bold text-foreground">{branch.rating}</span>
                                            <span className="text-xs text-muted-foreground">({branch.reviews} reviews)</span>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                                        <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{branch.subtitle}</div>
                                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                                            {branch.name}
                                        </h2>

                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                    <MapPin className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Address</p>
                                                    <p className="text-sm text-foreground leading-snug">{branch.address}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Hours</p>
                                                    <p className="text-sm text-foreground">{branch.openHours || "7:00 AM - 10:00 PM"}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                    <Phone className="w-4 h-4" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-0.5">Contact</p>
                                                    <p className="text-sm text-foreground">{branch.phone || "+63 917 123 4567"}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Amenity Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {branch.amenities.map((amenity, i) => {
                                                const Icon = amenity.icon
                                                return (
                                                    <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground bg-muted px-3 py-1.5 rounded-full border border-border">
                                                        <Icon className="w-3.5 h-3.5 text-primary" />
                                                        {amenity.label}
                                                    </span>
                                                )
                                            })}
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <a href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`} target="_blank" rel="noopener noreferrer">
                                                <Button size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 w-full sm:w-auto">
                                                    Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </a>
                                            {branch.phone && (
                                                <a href={`tel:${branch.phone}`}>
                                                    <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-border/50 hover:bg-muted w-full sm:w-auto">
                                                        <Phone className="w-4 h-4 mr-2" /> Call Store
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── 4. CTA ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-16 rounded-[3rem] bg-card dark:bg-card/40 border border-border/50 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />

                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/20">
                        <MapPin className="w-4 h-4" /> Coming Soon
                    </div>
                    <h2 className="relative z-10 font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Want us in your city?</h2>
                    <p className="relative z-10 text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                        We are currently exclusive to Pampanga, but we're actively scouting new locations. Let us know where you want the next Daily Grind to open!
                    </p>
                    <Button size="lg" className="relative z-10 rounded-full h-14 px-10 text-base shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                        Suggest a Location
                    </Button>
                </motion.div>
            </div>
        </MainWrapper>
    )
}
