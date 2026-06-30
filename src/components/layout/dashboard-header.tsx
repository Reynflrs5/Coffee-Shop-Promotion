"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { LogOut, User } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function LogoMark() {
    return (
        <div className="w-9 h-9 rounded-[10px] bg-[#C87941] flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-[17px] font-bold italic text-[#1A0900] tracking-[-0.03em] leading-none">
                dg
            </span>
        </div>
    )
}

export function DashboardHeader({ user }: { user?: { name: string | null } }) {
    const router = useRouter()
    
    // Extract first name or fallback
    const firstName = user?.name ? user.name.split(" ")[0] : "Guest"

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" })
            router.push("/login")
            router.refresh()
        } catch {
            router.push("/")
        }
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
                        <Link href="/dashboard" className="flex items-center gap-2.5 group">
                            <LogoMark />
                            <span className="font-serif text-[20px] font-bold tracking-[-0.01em] text-foreground leading-none hidden sm:block">
                                Daily <em className="text-[#C87941] not-italic">Grind</em>
                            </span>
                        </Link>
                    </div>

                    {/* Right side (Profile & Actions) */}
                    <div className="flex items-center gap-2 sm:gap-4">
                        <ThemeToggle />

                        <div className="h-6 w-px bg-border mx-1" />

                        <Link 
                            href="/dashboard/profile"
                            className={buttonVariants({ variant: "ghost", size: "sm", className: "gap-2 rounded-full flex px-2 sm:px-4" })}
                        >
                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <span className="text-xs font-bold text-primary">
                                    {firstName.charAt(0).toUpperCase()}
                                </span>
                            </div>
                            <span className="font-semibold hidden sm:inline">{firstName}</span>
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
