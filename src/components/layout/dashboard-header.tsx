"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Bell, LogOut, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useRouter } from "next/navigation"

export function DashboardHeader() {
    const router = useRouter()

    const handleLogout = () => {
        // TODO: clear auth session
        router.push("/")
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Left side (Logo) */}
                    <div className="flex items-center gap-3">
                        <Link href="/dashboard" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-colors" />
                                <Logo className="h-12 w-12 relative z-10" />
                            </div>
                            <span className="font-display text-2xl font-bold text-foreground">
                                Daily Grind
                            </span>
                        </Link>
                    </div>

                    {/* Right side (Profile & Actions) */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <ThemeToggle />

                        <div className="h-6 w-px bg-border mx-1" />

                        <Link 
                            href="/profile"
                            className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-2 rounded-full hidden sm:flex px-4" })}
                        >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                                <User className="w-4 h-4 text-primary" />
                            </div>
                            <span className="font-semibold">Alex</span>
                        </Link>

                        <Button variant="outline" size="sm" onClick={handleLogout} className="rounded-full gap-2 border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors">
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}
