"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, ShoppingBag, User, X } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constants/nav-links"
import { cn } from "@/lib/utils"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80"
        >
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src={logoImage}
                        alt="Daily Grind Coffee Shop Logo"
                        width={80}
                        height={80}
                        className="h-20 w-20 object-contain drop-shadow-md hover:scale-105 transition-transform"
                        priority
                    />
                    <span className="font-display text-4xl font-bold tracking-tight text-primary hidden sm:inline">
                        Daily Grind
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link, index) => {
                        const isActive = pathname === link.href
                        return (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.07 }}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "relative px-3 py-2 text-sm font-medium transition-colors rounded-md group",
                                        isActive
                                            ? "text-primary"
                                            : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                                    )}
                                >
                                    {link.label}
                                    {/* Animated underline */}
                                    <span
                                        className={cn(
                                            "absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full transition-all duration-300",
                                            isActive
                                                ? "opacity-100 scale-x-100"
                                                : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                                        )}
                                    />
                                </Link>
                            </motion.div>
                        )
                    })}
                </nav>

                {/* Right side actions */}
                <div className="flex items-center gap-2">
                    <Link
                        href="/login"
                        className={cn(buttonVariants({ variant: "default" }), "hidden md:inline-flex")}
                    >
                        Login
                    </Link>

                    <ThemeToggle />

                    {/* Mobile menu trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </SheetTrigger>
                        <SheetContent side="right" showCloseButton={false} style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }} className="w-[85vw] sm:w-[400px] border-l border-border p-0 overflow-hidden flex flex-col">
                            {/* Decorative background blur inside the mobile menu */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
                            
                            <div className="flex flex-col h-full z-10">
                                {/* Mobile Header */}
                                <div className="flex items-center gap-4 p-8 pb-4 border-b border-border justify-between">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center p-2 shadow-inner">
                                        <Image
                                            src={logoImage}
                                            alt="Daily Grind Logo"
                                            width={48}
                                            height={48}
                                            className="object-contain drop-shadow-md"
                                        />
                                    </div>
                                    <span className="font-display text-2xl font-bold text-foreground tracking-wide">
                                        Daily Grind
                                    </span>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="ml-auto w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-muted/80 hover:rotate-90 transition-all duration-300"
                                        aria-label="Close menu"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Mobile Links */}
                                <nav className="flex flex-col flex-1 overflow-y-auto px-8 py-6">
                                    {navLinks.map((link, i) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="group flex items-center justify-between py-4 border-b border-border text-xl font-display font-bold text-foreground/80 hover:text-primary transition-all"
                                        >
                                            <span className="group-hover:translate-x-2 transition-transform">{link.label}</span>
                                            <span className="text-primary opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all">→</span>
                                        </Link>
                                    ))}
                                </nav>

                                {/* VIP Promo Banner inside Menu */}
                                <div className="px-8 mt-auto pb-6">
                                    <div className="bg-primary/10 border border-primary/20 rounded-2xl p-5 relative overflow-hidden mb-6">
                                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">VIP Member</p>
                                        <p className="text-foreground text-sm font-medium mb-3">Join our loyalty program to unlock free drinks and secret promos.</p>
                                        <Link 
                                            href="/loyalty" 
                                            onClick={() => setOpen(false)}
                                            className="text-xs font-bold text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-full inline-block transition-colors"
                                        >
                                            Learn More
                                        </Link>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <Link
                                            href="/login"
                                            onClick={() => setOpen(false)}
                                            className="flex-1 text-center py-3.5 rounded-full border border-border text-foreground font-bold text-sm hover:bg-muted transition-colors"
                                        >
                                            Sign In
                                        </Link>
                                        <Link
                                            href="/register"
                                            onClick={() => setOpen(false)}
                                            className="flex-1 text-center py-3.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm shadow-lg shadow-primary/20 transition-all"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}