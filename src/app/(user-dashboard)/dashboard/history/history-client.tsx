"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowUpRight, ArrowDownRight, Coffee, Gift, Calendar, Search } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Order } from "@prisma/client"

export function HistoryClient({ initialHistory }: { initialHistory: Order[] }) {
    const [filter, setFilter] = useState<"all" | "order" | "reward">("all")

    const filteredHistory = initialHistory.filter(item => filter === "all" || item.type === filter)

    return (
        <div className="min-h-screen bg-background pb-20 pt-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-muted/50 px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <h1 className="font-display text-4xl font-bold text-foreground mb-4">Activity History</h1>
                    <p className="text-muted-foreground text-lg">Track your past orders and reward redemptions.</p>
                </motion.div>

                {/* Filters */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-card border border-border p-2 rounded-2xl md:rounded-full shadow-sm"
                >
                    <div className="flex gap-1 w-full sm:w-auto overflow-x-auto">
                        {(["all", "order", "reward"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all capitalize whitespace-nowrap ${
                                    filter === type 
                                    ? "bg-primary text-primary-foreground shadow-md" 
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                                }`}
                            >
                                {type === "all" ? "All Activity" : type + "s"}
                            </button>
                        ))}
                    </div>
                    
                    <div className="relative w-full sm:w-64 px-2 pb-2 sm:p-0 sm:pr-2">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search history..."
                            className="w-full pl-11 pr-4 py-2.5 bg-muted/50 hover:bg-muted focus:bg-background border border-transparent focus:border-primary/30 rounded-full text-sm transition-all outline-none"
                        />
                    </div>
                </motion.div>

                {/* Timeline */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                >
                    {filteredHistory.map((item, index) => (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            key={item.id}
                            className="bg-card border border-border rounded-3xl p-6 flex items-start sm:items-center gap-6 hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            {/* Icon */}
                            <div className={`w-14 h-14 shrink-0 rounded-full flex items-center justify-center shadow-inner ${
                                item.type === 'order' ? 'bg-primary/10 text-primary' : 'bg-orange-500/10 text-orange-500'
                            }`}>
                                {item.type === 'order' ? <Coffee className="w-6 h-6" /> : <Gift className="w-6 h-6" />}
                            </div>

                            {/* Details */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                    <h3 className="font-bold text-lg text-foreground truncate group-hover:text-primary transition-colors">
                                        {item.items}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground whitespace-nowrap">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm font-mono text-muted-foreground">#{item.id}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="font-medium text-foreground">
                                            {item.amount === 0 ? "Free" : `₱${item.amount.toFixed(2)}`}
                                        </span>
                                        <span className={`inline-flex items-center gap-1 font-bold text-sm px-3 py-1 rounded-full ${
                                            item.type === 'order' 
                                            ? 'bg-green-500/10 text-green-500' 
                                            : 'bg-red-500/10 text-red-500'
                                        }`}>
                                            {item.type === 'order' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                                            {item.points} pts
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {filteredHistory.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-muted-foreground text-lg">No activity found.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}
