"use client"

import { motion } from "framer-motion"
import { User, Mail, Phone, MapPin, Edit3, Settings, Shield, Award, ChevronRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Header / Cover Photo */}
            <div className="relative h-64 overflow-hidden bg-primary/10">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
                
                {/* Simulated background texture */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
                
                {/* Back Button */}
                <div className="mb-8">
                    <Link 
                        href="/dashboard"
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-border hover:bg-muted transition-colors shadow-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12"
                >
                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-40 h-40 rounded-full bg-card border-4 border-background overflow-hidden flex items-center justify-center shadow-2xl relative z-10">
                            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                <User className="w-16 h-16 text-primary" />
                            </div>
                        </div>
                        {/* Edit Badge */}
                        <button className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:scale-110 transition-transform z-20">
                            <Edit3 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Profile Summary */}
                    <div className="text-center md:text-left flex-1 mb-2">
                        <h1 className="font-display text-4xl font-bold text-foreground mb-1">Alex Doe</h1>
                        <p className="text-muted-foreground text-lg mb-3">Premium Coffee Lover</p>
                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                <Award className="w-4 h-4" /> Gold Tier
                            </span>
                            <span className="text-sm text-muted-foreground">Member since Oct 2023</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Form Fields */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 space-y-6"
                    >
                        <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-display text-2xl font-bold text-foreground">Personal Details</h2>
                                <Button variant="outline" size="sm" className="rounded-full gap-2">
                                    <Edit3 className="w-4 h-4" /> Edit
                                </Button>
                            </div>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">First Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue="Alex"
                                        disabled
                                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground disabled:opacity-70 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Last Name</label>
                                    <input 
                                        type="text" 
                                        defaultValue="Doe"
                                        disabled
                                        className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground disabled:opacity-70 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-foreground">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input 
                                            type="email" 
                                            defaultValue="alex.doe@example.com"
                                            disabled
                                            className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3 text-foreground disabled:opacity-70 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input 
                                            type="tel" 
                                            defaultValue="+63 917 123 4567"
                                            disabled
                                            className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3 text-foreground disabled:opacity-70 focus:outline-none focus:border-primary transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-medium text-foreground">Default Address</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                                        <textarea 
                                            defaultValue="123 MacArthur Highway, Balibago&#10;Angeles City, Pampanga"
                                            disabled
                                            rows={2}
                                            className="w-full bg-muted/50 border border-border rounded-xl pl-10 pr-4 py-3 text-foreground disabled:opacity-70 focus:outline-none focus:border-primary transition-colors resize-none"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column - Settings & Security */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="bg-card border border-border rounded-3xl p-6 shadow-sm">
                            <h3 className="font-display text-xl font-bold text-foreground mb-4">Account Security</h3>
                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/50 hover:border-primary/50 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Shield className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-sm font-bold text-foreground">Change Password</span>
                                            <span className="block text-xs text-muted-foreground">Update your login credential</span>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </button>
                                
                                <button className="w-full flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/50 hover:border-primary/50 transition-colors group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Settings className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <span className="block text-sm font-bold text-foreground">Preferences</span>
                                            <span className="block text-xs text-muted-foreground">Manage notifications</span>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                </button>
                            </div>
                        </div>

                        {/* Danger Zone */}
                        <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-6">
                            <h3 className="text-destructive font-bold mb-2">Danger Zone</h3>
                            <p className="text-sm text-muted-foreground mb-4">Once you delete your account, there is no going back. Please be certain.</p>
                            <Button variant="destructive" className="w-full rounded-xl font-bold">
                                Delete Account
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
