"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, Coffee, Award, Clock, ChevronRight, Gift, Star, QrCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const recentOrders = [
    { id: "ORD-001", items: "Iced Caramel Macchiato, Butter Croissant", date: "Today, 10:45 AM", points: "+45" },
    { id: "ORD-002", items: "Hot Americano", date: "Yesterday, 08:30 AM", points: "+15" },
    { id: "ORD-003", items: "Matcha Latte, Blueberry Muffin", date: "Oct 12, 2023", points: "+60" },
]

export default function CustomerDashboard() {
    const [isQrOpen, setIsQrOpen] = useState(false)

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header Section */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
                    >
                        <div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">
                                Welcome back, <span className="text-primary">Alex</span>
                            </h1>
                            <p className="text-muted-foreground text-lg">
                                Ready for your daily grind?
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" onClick={() => setIsQrOpen(true)} className="rounded-full shadow-lg shadow-primary/25 group">
                                <QrCode className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                My QR Code
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Left Column (Points & Status) */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Loyalty Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl border border-white/10"
                        >
                            {/* Card Details */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/30 rounded-full blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <p className="text-white/60 text-sm font-medium uppercase tracking-widest mb-1">Current Balance</p>
                                        <h2 className="text-5xl font-display font-bold text-primary">845<span className="text-2xl text-white ml-2">pts</span></h2>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20">
                                        <Star className="w-6 h-6 text-primary" fill="currentColor" />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white/80 font-medium">Gold Tier</span>
                                        <span className="text-white/60">155 pts to Platinum</span>
                                    </div>
                                    <div className="w-full bg-white/10 rounded-full h-2 mb-6">
                                        <div className="bg-primary h-2 rounded-full w-[84.5%]" />
                                    </div>
                                    
                                    <Link href="/dashboard/loyalty" className="inline-flex items-center text-sm font-bold text-primary hover:text-white transition-colors">
                                        View Rewards Catalog <ChevronRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Actions */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <Link href="/dashboard/menu" className="bg-card border border-border rounded-2xl p-6 text-center hover:bg-muted/50 hover:border-primary/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-foreground block">View Menu</span>
                            </Link>
                            <Link href="/dashboard/promotions" className="bg-card border border-border rounded-2xl p-6 text-center hover:bg-muted/50 hover:border-primary/50 transition-all group">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                    <Gift className="w-6 h-6" />
                                </div>
                                <span className="font-bold text-foreground block">Offers</span>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Column (Recent Orders) */}
                    <div className="lg:col-span-2">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-card border border-border rounded-3xl p-8 h-full shadow-sm"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-display text-2xl font-bold text-foreground">Recent Activity</h3>
                                <Link href="/dashboard/history" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center">
                                    View All <ChevronRight className="w-4 h-4 ml-1" />
                                </Link>
                            </div>

                            <div className="space-y-6">
                                {recentOrders.map((order, index) => (
                                    <div key={order.id} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground shrink-0">
                                            <Clock className="w-5 h-5 opacity-70" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                                                <h4 className="font-bold text-foreground">{order.items}</h4>
                                                <span className="font-bold text-primary mt-1 sm:mt-0">{order.points} pts</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <span>{order.id}</span>
                                                <span className="w-1 h-1 rounded-full bg-border" />
                                                <span>{order.date}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* QR Code Modal Overlay */}
            <AnimatePresence>
                {isQrOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsQrOpen(false)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside modal from closing it
                            className="bg-card border border-border rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative overflow-hidden"
                        >
                            {/* Decorative Blur */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

                            <div className="relative z-10">
                                <h3 className="font-display text-2xl font-bold text-foreground mb-2">Member Card</h3>
                                <p className="text-muted-foreground text-sm mb-8">Scan this code at the counter to earn points and claim rewards.</p>
                                
                                <div className="bg-white p-6 rounded-2xl mx-auto inline-block shadow-md border border-border mb-8">
                                    {/* Mock QR Code (using Lucide icon as placeholder for an actual QR image) */}
                                    <QrCode className="w-48 h-48 text-black" />
                                </div>
                                
                                <div className="bg-muted py-3 px-4 rounded-xl inline-flex items-center gap-3 w-full justify-center border border-border border-dashed">
                                    <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Member ID:</span>
                                    <span className="font-mono font-bold text-foreground">DG-8459-2023</span>
                                </div>
                                
                                <Button 
                                    variant="ghost" 
                                    className="w-full mt-6 rounded-xl font-semibold"
                                    onClick={() => setIsQrOpen(false)}
                                >
                                    Close
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
