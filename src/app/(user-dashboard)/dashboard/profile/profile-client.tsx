"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Shield, Calendar, Award, ArrowLeft, Loader2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface ProfileClientProps {
    user: {
        id: number
        name: string | null
        email: string
        createdAt: Date
    }
    points: number
}

export function ProfileClient({ user, points }: ProfileClientProps) {
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(user.name || "")
    const [isSaving, setIsSaving] = useState(false)
    
    // Tier calculation
    let tier = "Silver Tier"
    if (points >= 500) tier = "Platinum Tier"
    else if (points >= 200) tier = "Gold Tier"

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        
        try {
            const res = await fetch("/api/user/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name }),
            })
            
            if (!res.ok) throw new Error("Failed to update profile")
            
            toast.success("Profile updated successfully! 🎉")
            setIsEditing(false)
            router.refresh()
        } catch (error) {
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <div className="min-h-screen bg-background pb-20 pt-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                
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
                    <h1 className="font-display text-4xl font-bold text-foreground mb-4">My Profile</h1>
                    <p className="text-muted-foreground text-lg">Manage your account details and preferences.</p>
                </motion.div>

                {/* Profile Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-card border border-border rounded-3xl p-8 shadow-sm relative overflow-hidden"
                >
                    {/* Decorative glow */}
                    <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row gap-10">
                        {/* Avatar Column */}
                        <div className="flex flex-col items-center shrink-0">
                            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-background shadow-xl mb-4 relative">
                                <span className="text-5xl font-bold text-primary">
                                    {(user.name || "C").charAt(0).toUpperCase()}
                                </span>
                                <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-500 font-bold text-sm border border-amber-500/20">
                                <Award className="w-4 h-4" />
                                {tier}
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="flex-1">
                            {!isEditing ? (
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h2 className="text-2xl font-bold text-foreground">{user.name || "Coffee Lover"}</h2>
                                            <p className="text-muted-foreground flex items-center gap-1.5 mt-1 text-sm">
                                                <Mail className="w-4 h-4" /> {user.email}
                                            </p>
                                        </div>
                                        <Button onClick={() => setIsEditing(true)} variant="outline" className="rounded-full h-9">
                                            Edit Profile
                                        </Button>
                                    </div>
                                    
                                    <div className="h-px w-full bg-border/60" />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Member ID</span>
                                            <div className="flex items-center gap-2 font-mono font-medium text-foreground">
                                                <Shield className="w-4 h-4 text-primary" />
                                                DG-{user.id.toString().padStart(4, '0')}-{new Date(user.createdAt).getFullYear()}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Joined</span>
                                            <div className="flex items-center gap-2 font-medium text-foreground">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSave} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                id="name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Enter your name"
                                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                                required
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="text-sm font-medium text-foreground mb-1.5 block opacity-70">
                                            Email Address (Read-only)
                                        </label>
                                        <div className="relative opacity-70">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                            <input
                                                type="email"
                                                value={user.email}
                                                readOnly
                                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-muted text-foreground cursor-not-allowed"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <Button type="submit" disabled={isSaving} className="rounded-full shadow-md shadow-primary/20">
                                            {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                                            Save Changes
                                        </Button>
                                        <Button type="button" variant="ghost" onClick={() => { setIsEditing(false); setName(user.name || ""); }} className="rounded-full" disabled={isSaving}>
                                            Cancel
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
