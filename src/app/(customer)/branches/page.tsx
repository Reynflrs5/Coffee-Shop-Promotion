"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Clock, Phone, Car, Wifi, Coffee, MapPinned, ArrowRight } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"

import storeImg1 from "@/assets/images/hero-bg.png"
import storeImg2 from "@/assets/images/daily-grind1.png"
import storeImg3 from "@/assets/images/daily-grind-bg.png"

const branches = [
    {
        name: "Angeles City (Flagship)",
        address: "MacArthur Highway, Balibago, Angeles City",
        hours: "7:00 AM - 11:00 PM (Daily)",
        phone: "+63 917 123 4567",
        amenities: [
            { icon: Wifi, label: "Fast Wi-Fi" },
            { icon: Car, label: "Parking" },
            { icon: Coffee, label: "Reserve Bar" },
        ],
        type: "Flagship Store",
        image: storeImg1
    },
    {
        name: "Clark Freeport Zone",
        address: "Parade Grounds, Clark Freeport Zone",
        hours: "6:00 AM - 12:00 MN (Daily)",
        phone: "+63 917 987 6543",
        amenities: [
            { icon: Wifi, label: "Fast Wi-Fi" },
            { icon: Car, label: "Ample Parking" },
            { icon: Coffee, label: "Outdoor Seating" },
        ],
        type: "Premium Cafe",
        image: storeImg2
    },
    {
        name: "San Fernando (Drive-Thru)",
        address: "Jose Abad Santos Ave, San Fernando",
        hours: "Open 24 Hours",
        phone: "+63 917 456 7890",
        amenities: [
            { icon: MapPinned, label: "Drive-Thru" },
            { icon: Wifi, label: "Wi-Fi" },
            { icon: Car, label: "Parking" },
        ],
        type: "Drive-Thru",
        image: storeImg3
    }
]

export default function BranchesPage() {
    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24 overflow-hidden">
            {/* 1. Cinematic Header with Curved Bottom */}
            <div className="relative w-full bg-foreground dark:bg-muted/10 py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[4rem] border-b border-border/10 mb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/30 backdrop-blur-md">
                        <MapPin className="w-4 h-4" />
                        Pampanga Exclusives
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Find Your <br />
                        <span className="text-primary italic">Daily Grind.</span>
                    </h1>
                    <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Proudly brewing in the Culinary Capital of the Philippines. Visit our meticulously designed stores across Pampanga for your daily dose of perfection.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 2. Ultra-Premium Branches List */}
                <div className="space-y-12 lg:space-y-24 mb-24">
                    {branches.map((branch, index) => {
                        const isEven = index % 2 === 0
                        return (
                            <motion.div 
                                key={branch.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
                            >
                                {/* Store Image with Parallax & Float Effects */}
                                <div className="w-full lg:w-1/2 relative">
                                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/20 z-10">
                                        <Image 
                                            src={branch.image}
                                            alt={branch.name}
                                            fill
                                            className="object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="absolute bottom-6 left-6 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                            {branch.amenities.map((amenity, i) => {
                                                const Icon = amenity.icon
                                                return (
                                                    <div key={i} className="bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-foreground flex items-center gap-1.5 shadow-lg">
                                                        <Icon className="w-3.5 h-3.5 text-primary" />
                                                        {amenity.label}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {/* Decorative glowing blob behind image */}
                                    <div className={`absolute -inset-4 rounded-full blur-3xl opacity-20 -z-10 bg-primary group-hover:opacity-40 transition-opacity duration-700 ${isEven ? '-bottom-10 -right-10' : '-bottom-10 -left-10'}`} />
                                </div>

                                {/* Store Details */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-4">
                                        {branch.type}
                                    </div>
                                    <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
                                        {branch.name}
                                    </h2>
                                    
                                    <div className="space-y-6 mb-10 border-l-2 border-primary/20 pl-6 py-2">
                                        <div className="flex items-start gap-4 text-muted-foreground">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Location</p>
                                                <span className="text-sm leading-relaxed block">{branch.address}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 text-muted-foreground">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                <Clock className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Hours</p>
                                                <span className="text-sm leading-relaxed block">{branch.hours}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4 text-muted-foreground">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                                <Phone className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground mb-1">Contact</p>
                                                <span className="text-sm leading-relaxed block">{branch.phone}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button size="lg" className="rounded-full px-8 h-12 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                            Get Directions <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                        <Button size="lg" variant="outline" className="rounded-full px-8 h-12 border-border/50 hover:bg-muted">
                                            Call Store
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* 3. Call to Action (Expansion) */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 p-10 md:p-16 rounded-[3rem] bg-card dark:bg-card/40 border border-border/50 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -z-10" />
                    
                    <h2 className="relative z-10 font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Want us in your city?</h2>
                    <p className="relative z-10 text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                        We are currently exclusive to Pampanga, but we're actively scouting new locations. Let us know where you want the next Daily Grind to open!
                    </p>
                    <Button size="lg" className="relative z-10 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-10 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                        Suggest a Location
                    </Button>
                </motion.div>
            </div>
        </MainWrapper>
    )
}
