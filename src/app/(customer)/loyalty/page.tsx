"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Coffee, Gift, Star, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"

// Use some of the beautiful AI generated images for rewards
import espressoImg from "@/assets/images/espresso.png"
import croissantImg from "@/assets/images/butter-croissant.png"
import frappeImg from "@/assets/images/coffee-frappe.png"
import cakeImg from "@/assets/images/chocolate-cake.png"

const tiers = [
    {
        name: "Bronze",
        points: "0 - 499 pts",
        multiplier: "1x",
        benefits: ["Earn 1 point per ₱1 spent", "Free birthday pastry", "App-exclusive promotions"],
        cardGradient: "from-[#CD7F32] via-[#8c5622] to-[#4c2f12]", // Bronze metallic
        textColor: "text-white",
    },
    {
        name: "Silver",
        points: "500 - 1,499 pts",
        multiplier: "1.5x",
        benefits: ["Earn 1.5 points per ₱1 spent", "Free birthday drink & pastry", "Early access to new items", "Free size upgrade once a month"],
        cardGradient: "from-slate-300 via-slate-400 to-slate-600", // Silver metallic
        textColor: "text-slate-900",
    },
    {
        name: "Gold VIP",
        points: "1,500+ pts",
        multiplier: "2x",
        benefits: ["Earn 2 points per ₱1 spent", "Free monthly reserve coffee", "Skip the line (Priority)", "Exclusive merch drops", "VIP event invites"],
        cardGradient: "from-[#FCD34D] via-[#F59E0B] to-[#B45309]", // Gold metallic
        textColor: "text-amber-950",
    },
]

const rewards = [
    { title: "Free Espresso Shot", points: 100, image: espressoImg },
    { title: "Butter Croissant", points: 250, image: croissantImg },
    { title: "Signature Frappe", points: 400, image: frappeImg },
    { title: "Decadent Cake Slice", points: 600, image: cakeImg },
]

export default function LoyaltyPage() {
    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24 overflow-hidden">
            
            {/* 1. Ultra-Premium Hero Section with Floating Card */}
            <div className="relative w-full bg-foreground dark:bg-muted/10 py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[4rem] border-b border-border/10 mb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                </div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-8">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/30 backdrop-blur-md">
                            <Sparkles className="w-4 h-4" />
                            Daily Grind Rewards
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Your loyalty,<br />
                            <span className="text-primary italic">beautifully</span> rewarded.
                        </h1>
                        <p className="text-white/70 text-lg font-medium mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Turn your daily coffee ritual into free drinks, exclusive perks, and VIP experiences. The more you sip, the more you get.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <Button size="lg" className="rounded-full h-14 px-8 text-base font-bold w-full sm:w-auto shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                                Join for Free
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-bold w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white/10">
                                Sign In
                            </Button>
                        </div>
                    </motion.div>

                    {/* Floating Gold Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: -10 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center perspective-[1000px]"
                    >
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="relative w-full max-w-[400px] aspect-[1.58/1] rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 shadow-[0_20px_50px_rgba(245,158,11,0.3)] border border-white/40 p-8 flex flex-col justify-between overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-overlay" />
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/30 rounded-full blur-2xl" />
                            
                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h3 className="font-display text-2xl font-black text-amber-950">Daily Grind</h3>
                                    <p className="text-amber-900/80 text-xs uppercase tracking-widest font-bold">VIP Member</p>
                                </div>
                                <Star className="w-8 h-8 text-amber-900 fill-amber-900" />
                            </div>
                            
                            <div className="relative z-10 flex justify-between items-end">
                                <div>
                                    <p className="text-amber-900/70 text-xs font-bold uppercase mb-1">Points Balance</p>
                                    <p className="font-mono text-3xl font-black text-amber-950">2,450</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-display font-black text-amber-900 text-lg uppercase tracking-widest">Gold</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2. Step-by-Step Modern Timeline */}
                <div className="mb-24 mt-12">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-foreground mb-4">How it works</h2>
                        <p className="text-muted-foreground text-lg">Three simple steps to free coffee.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-0" />
                        
                        {[
                            { step: "01", title: "Create Account", desc: "Sign up in seconds. It's completely free to join.", icon: Star },
                            { step: "02", title: "Earn Points", desc: "Scan your app in-store to earn points on every purchase.", icon: Coffee },
                            { step: "03", title: "Claim Rewards", desc: "Trade points for free drinks, food, and exclusive merch.", icon: Gift }
                        ].map((item, i) => {
                            const Icon = item.icon
                            return (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative z-10 flex flex-col items-center text-center group"
                                >
                                    <div className="w-24 h-24 rounded-full bg-background border-4 border-muted flex items-center justify-center mb-6 shadow-xl group-hover:border-primary transition-colors duration-500">
                                        <Icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground font-display">{item.title}</h3>
                                    <p className="text-muted-foreground max-w-[250px]">{item.desc}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* 3. Aesthetic Physical Cards for Tiers */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-foreground mb-4">Unlock Premium Tiers</h2>
                        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Elevate your coffee experience. The higher your tier, the faster you earn.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tiers.map((tier, i) => (
                            <motion.div 
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="flex flex-col group"
                            >
                                {/* The Card Visual */}
                                <div className={`w-full aspect-[1.58/1] rounded-3xl bg-gradient-to-tr ${tier.cardGradient} p-6 flex flex-col justify-between shadow-xl mb-8 relative overflow-hidden group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-500`}>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30 mix-blend-overlay" />
                                    <div className="relative z-10 flex justify-between">
                                        <span className={`font-display font-black text-xl tracking-wide uppercase ${tier.textColor}`}>{tier.name}</span>
                                        <span className={`font-mono font-bold ${tier.textColor}`}>{tier.points}</span>
                                    </div>
                                    <div className="relative z-10">
                                        <p className={`${tier.textColor} opacity-80 text-xs font-bold uppercase tracking-widest mb-1`}>Earning Rate</p>
                                        <p className={`text-4xl font-black ${tier.textColor}`}>{tier.multiplier}</p>
                                    </div>
                                </div>
                                
                                {/* The Benefits List */}
                                <div className="bg-card dark:bg-card/40 border border-border/50 rounded-3xl p-8 flex-1 shadow-sm">
                                    <h4 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm border-b border-border/50 pb-4">Benefits</h4>
                                    <ul className="space-y-4">
                                        {tier.benefits.map((benefit, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                                <span className="text-muted-foreground text-sm font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. Beautiful Rewards Gallery */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6">
                        <div>
                            <h2 className="font-display text-4xl font-bold text-foreground mb-3">Spend your points.</h2>
                            <p className="text-muted-foreground text-lg">Here's a taste of what you can redeem for free.</p>
                        </div>
                        <Button variant="outline" className="rounded-full px-6 bg-background">
                            View Reward Catalog <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {rewards.map((reward, i) => (
                            <div key={i} className="group rounded-3xl bg-card border border-border/50 overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                <div className="relative w-full aspect-square bg-muted/40 overflow-hidden p-6">
                                    <Image 
                                        src={reward.image}
                                        alt={reward.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Gradient overlay to make text pop */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Reveal button on hover */}
                                    <div className="absolute bottom-6 left-0 right-0 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                                        <Button size="sm" className="rounded-full font-bold shadow-lg shadow-black/20">
                                            Redeem
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-6 text-center border-t border-border/50">
                                    <h4 className="font-bold text-foreground text-lg mb-2">{reward.title}</h4>
                                    <p className="text-primary font-bold text-sm bg-primary/10 inline-block px-4 py-1.5 rounded-full">
                                        {reward.points} Points
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </MainWrapper>
    )
}
