"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Coffee, Users, Leaf, ArrowRight, Star } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"

import heroBg from "@/assets/images/hero-bg.png"
import matchaImg from "@/assets/images/matcha.png"
import espressoImg from "@/assets/images/espresso.png"

const values = [
    {
        title: "Ethical Sourcing",
        description: "We partner directly with local farmers in the Philippines and sustainable estates globally, ensuring fair wages and pristine quality.",
        icon: Leaf,
    },
    {
        title: "Artisanal Roasting",
        description: "Every bean is micro-roasted in small batches at our Pampanga roastery to unlock its full, unique flavor profile.",
        icon: Coffee,
    },
    {
        title: "Community First",
        description: "Coffee brings people together. Our shops are designed to be a safe, welcoming third space for everyone in the community.",
        icon: Users,
    },
    {
        title: "Uncompromising Passion",
        description: "We obsess over every detail—from water temperature to extraction time—because you deserve a perfect cup, every time.",
        icon: Heart,
    },
]

export default function AboutPage() {
    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24 overflow-hidden">
            {/* 1. Cinematic Hero Section */}
            <div className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-foreground dark:bg-muted/10 mb-20 rounded-b-[3rem] md:rounded-b-[4rem] border-b border-border/10">
                <div className="absolute inset-0">
                    <Image 
                        src={heroBg}
                        alt="Coffee Shop Vibe"
                        fill
                        className="object-cover opacity-30 dark:opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10"
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest mb-6 border border-white/20 backdrop-blur-md">
                        <Star className="w-4 h-4 text-primary" />
                        Our Story
                    </div>
                    <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-6 leading-tight">
                        Brewing passion <br />
                        <span className="text-primary italic">since 2020.</span>
                    </h1>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 2. The Story (Aesthetic Staggered Grid) */}
                <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
                    {/* Left: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            From a small cart to <span className="text-primary">Pampanga's</span> favorite cup.
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground/90 font-medium leading-relaxed">
                            <p>
                                What began in 2020 as a humble espresso cart in the streets of Angeles City quickly grew into something much bigger. We noticed a gap in the local coffee scene: finding specialty coffee usually meant sacrificing warmth and community for pretension.
                            </p>
                            <p>
                                <strong className="text-foreground">Daily Grind was built to change that.</strong> We combined world-class barista techniques and ethically sourced beans with the signature warmth and hospitality of Pampangueños.
                            </p>
                            <p>
                                Today, we roast our own beans, bake our own pastries, and pour our hearts into every single cup. We aren't just selling coffee; we're crafting your daily ritual.
                            </p>
                        </div>

                        {/* Stat Blocks */}
                        <div className="mt-12 grid grid-cols-3 gap-6">
                            <div className="p-6 rounded-3xl bg-card border border-border/50 text-center shadow-lg">
                                <span className="block text-4xl font-display font-black text-primary mb-2">3</span>
                                <span className="text-xs font-bold text-foreground uppercase tracking-widest">Locations</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-card border border-border/50 text-center shadow-lg">
                                <span className="block text-4xl font-display font-black text-primary mb-2">12+</span>
                                <span className="text-xs font-bold text-foreground uppercase tracking-widest">Blends</span>
                            </div>
                            <div className="p-6 rounded-3xl bg-card border border-border/50 text-center shadow-lg">
                                <span className="block text-4xl font-display font-black text-primary mb-2">1M</span>
                                <span className="text-xs font-bold text-foreground uppercase tracking-widest">Cups</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Beautiful Image Composition */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative h-[600px]"
                    >
                        {/* Image 1 */}
                        <div className="absolute top-0 right-0 w-2/3 h-[70%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background z-20">
                            <Image src={matchaImg} alt="Crafting drinks" fill className="object-cover" />
                        </div>
                        {/* Image 2 */}
                        <div className="absolute bottom-0 left-0 w-2/3 h-[60%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-background z-30">
                            <Image src={espressoImg} alt="Espresso extraction" fill className="object-cover" />
                        </div>
                        {/* Decorative Blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] z-10" />
                    </motion.div>
                </div>

                {/* 3. Core Values */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-muted text-foreground font-bold text-xs uppercase tracking-widest mb-4 border border-border/50">
                            The Philosophy
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every decision we make and every shot we pull.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div 
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-10 rounded-[3rem] bg-card dark:bg-card/40 border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-700" />
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:-translate-y-2 transition-transform duration-500 shadow-inner">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-foreground mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                {/* 4. Call to Action */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-foreground to-foreground/90 text-background relative overflow-hidden shadow-2xl mb-10"
                >
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                    
                    <div className="relative z-10 text-center max-w-3xl mx-auto">
                        <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">Ready to taste the <span className="text-primary italic">difference?</span></h2>
                        <p className="text-background/80 text-xl mb-12 font-medium">
                            Check out our menu or visit one of our Pampanga branches to experience the Daily Grind signature hospitality firsthand.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                                View Menu <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg font-bold border-background/20 text-background hover:bg-background/10 hover:text-white">
                                Find a Store
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </MainWrapper>
    )
}
