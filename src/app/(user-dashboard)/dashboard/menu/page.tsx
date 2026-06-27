"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Coffee, Plus, Sparkles, Coffee as CoffeeCup, CakeSlice, ArrowLeft } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"
import { menuItems, menuCategories, MenuCategory } from "@/constants/menu-items"

// Map categories to modern icons
const categoryIcons: Record<string, React.ReactNode> = {
    "all": <Sparkles className="w-4 h-4" />,
    "hot-drinks": <Coffee className="w-4 h-4" />,
    "cold-drinks": <CoffeeCup className="w-4 h-4" />, // Alternative for cold
    "pastries": <CakeSlice className="w-4 h-4" />,
}

function getBadgeStyle(badge: string) {
    switch (badge) {
        case "Best Seller":
            return "bg-orange-500/90 text-white backdrop-blur-md border-orange-500/20 shadow-orange-500/20"
        case "New":
            return "bg-blue-500/90 text-white backdrop-blur-md border-blue-500/20 shadow-blue-500/20"
        case "Popular":
            return "bg-primary/90 text-primary-foreground backdrop-blur-md border-primary/20 shadow-primary/20"
        default:
            return ""
    }
}

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState<MenuCategory>("all")
    const [search, setSearch] = useState("")

    const filteredItems = menuItems.filter((item) => {
        const matchesCategory = activeCategory === "all" || item.category === activeCategory
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24">
            
            {/* 1. Ultra-Premium Page Header */}
            <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-foreground dark:bg-muted/20">
                {/* Subtle Background Pattern / Blur */}
                <div className="absolute inset-0 opacity-20 dark:opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] dark:from-background to-transparent opacity-90" />
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 text-center px-4 mt-8"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold tracking-widest text-xs uppercase mb-4 border border-primary/20">
                        Artisanal Selection
                    </span>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
                        Our <span className="text-primary italic">Menu</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Handcrafted with passion. Explore our signature roasts, refreshing blends, and freshly baked delights.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                
                {/* Back Button */}
                <div className="mb-6">
                    <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>

                {/* 2. Glassmorphism Search & Filter Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-background/80 dark:bg-card/80 backdrop-blur-xl border border-border/50 p-2 rounded-2xl md:rounded-full shadow-lg shadow-black/5 flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
                >
                    {/* Category Pills */}
                    <div className="flex w-full md:w-auto overflow-x-auto hide-scrollbar gap-1 p-1">
                        {menuCategories.map((cat) => {
                            const isActive = activeCategory === cat.value
                            return (
                                <button
                                    key={cat.value}
                                    onClick={() => setActiveCategory(cat.value)}
                                    className={`relative flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                                        isActive
                                            ? "text-primary-foreground"
                                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategoryTab"
                                            className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/20"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center gap-2">
                                        {categoryIcons[cat.value]}
                                        {cat.label}
                                    </span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-72 px-2 pb-2 md:p-0 md:pr-2">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search our menu..."
                            className="w-full pl-11 pr-4 py-2.5 bg-muted/50 hover:bg-muted focus:bg-background border border-transparent focus:border-primary/30 rounded-full text-sm transition-all outline-none focus:ring-4 focus:ring-primary/10"
                        />
                    </div>
                </motion.div>

                {/* 3. Aesthetic Product Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="group relative bg-card dark:bg-card/40 border border-border/40 rounded-3xl overflow-hidden hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted/30">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />
                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Badge */}
                                    {item.badge && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg ${getBadgeStyle(item.badge)}`}>
                                                {item.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Floating Add Button on Hover */}
                                    <motion.button 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-black shadow-xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10"
                                    >
                                        <Plus className="w-5 h-5" />
                                    </motion.button>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex justify-between items-start gap-4 mb-3">
                                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                            {item.name}
                                        </h3>
                                        <span className="font-bold text-lg text-foreground whitespace-nowrap bg-primary/10 px-2 py-1 rounded-lg">
                                            <span className="text-xs text-primary font-semibold mr-0.5">₱</span>
                                            {item.price}
                                        </span>
                                    </div>
                                    
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mt-auto">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredItems.length === 0 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center py-32 text-center"
                    >
                        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
                            <Coffee className="w-10 h-10 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2">No items found</h3>
                        <p className="text-muted-foreground text-lg max-w-md">
                            {search
                                ? `We couldn't find any items matching "${search}". Try a different term!`
                                : "Check back later for new additions to this category."}
                        </p>
                    </motion.div>
                )}
            </div>
        </MainWrapper>
    )
}