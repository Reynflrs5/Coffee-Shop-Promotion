"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants/nav-links"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

/* ─── Scroll progress hook ─── */
function useScrollProgress() {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const onScroll = () => {
            const el = document.documentElement
            const scrolled = el.scrollTop
            const total = el.scrollHeight - el.clientHeight
            setProgress(total > 0 ? (scrolled / total) * 100 : 0)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return progress
}


/* ─── Amber logo mark ─── */
function LogoMark() {
    return (
        <div className="w-9 h-9 rounded-[10px] bg-[#C87941] flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-[17px] font-bold italic text-[#1A0900] tracking-[-0.03em] leading-none">
                dg
            </span>
        </div>
    )
}

/* ─── Nav link with animated underline ─── */
function NavLink({
    href,
    label,
    isActive,
    index,
}: {
    href: string
    label: string
    isActive: boolean
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease: "easeOut" }}
        >
            <Link
                href={href}
                className={cn(
                    "relative px-3.5 py-2 rounded-lg text-[13px] font-semibold tracking-[0.01em] transition-all duration-200",
                    isActive
                        ? "text-[#C87941]"
                        : "text-foreground/55 hover:text-[#C87941] hover:bg-[rgba(200,121,65,0.08)]"
                )}
            >
                {label}
                {/* Active underline */}
                {isActive && (
                    <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#C87941]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                )}
                {/* Hover underline */}
                {!isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-[#C87941] scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-200 origin-left" />
                )}
            </Link>
        </motion.div>
    )
}

/* ─── Mobile drawer link ─── */
function MobileNavLink({
    href,
    label,
    isActive,
    onClick,
    index,
}: {
    href: string
    label: string
    isActive: boolean
    onClick: () => void
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.05 + index * 0.055, ease: "easeOut" }}
        >
            <Link
                href={href}
                onClick={onClick}
                className={cn(
                    "group flex items-center justify-between py-[15px] border-b border-border/60",
                    "font-serif text-[19px] font-bold leading-tight",
                    "transition-all duration-200",
                    isActive ? "text-[#C87941]" : "text-foreground/75 hover:text-[#C87941]"
                )}
            >
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                    {label}
                </span>
                <span
                    className={cn(
                        "text-[#C87941] text-sm transition-all duration-200",
                        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0"
                    )}
                >
                    →
                </span>
            </Link>
        </motion.div>
    )
}

/* ─── Main header ─── */
export function SiteHeader({ user }: { user?: { name: string | null } | null }) {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()
    const scrollProgress = useScrollProgress()
    
    // Extract first name for logged-in user
    const firstName = user?.name ? user.name.split(" ")[0] : null

    return (
        <motion.header
            initial={{ y: -72, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-0 z-50 w-full"
        >
            {/* Glass surface */}
            <div className="relative border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-[0_1px_0_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.04)]">

                <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 sm:px-8 gap-6">

                    {/* ── Logo ── */}
                    <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                        <LogoMark />
                        <span className="font-serif text-[20px] font-bold tracking-[-0.01em] text-foreground leading-none hidden sm:block">
                            Daily <em className="text-[#C87941] not-italic">Grind</em>
                        </span>
                    </Link>

                    {/* ── Desktop nav ── */}
                    <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
                        {navLinks.map((link, index) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                label={link.label}
                                isActive={pathname === link.href}
                                index={index}
                            />
                        ))}
                    </nav>

                    {/* ── Right actions ── */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Theme toggle */}
                        <ThemeToggle />

                        {/* Divider */}
                        <div className="hidden sm:block w-px h-5 bg-border/80 mx-1" />

                        {/* Sign in or Dashboard — desktop */}
                        {user ? (
                            <Link
                                href="/dashboard"
                                className="hidden md:flex items-center h-9 px-5 rounded-full bg-[#C87941] text-[#1A0900] text-[12.5px] font-bold tracking-[0.04em] hover:bg-[#D98B52] hover:-translate-y-px transition-all duration-200 shadow-[0_0_20px_rgba(200,121,65,0.25)] hover:shadow-[0_0_28px_rgba(200,121,65,0.40)]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="hidden md:flex items-center h-9 px-5 rounded-full bg-[#C87941] text-[#1A0900] text-[12.5px] font-bold tracking-[0.04em] hover:bg-[#D98B52] hover:-translate-y-px transition-all duration-200 shadow-[0_0_20px_rgba(200,121,65,0.25)] hover:shadow-[0_0_28px_rgba(200,121,65,0.40)]"
                            >
                                Sign in
                            </Link>
                        )}

                        {/* Mobile menu trigger */}
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger
                                render={
                                    <button
                                        className="lg:hidden w-9 h-9 rounded-[9px] flex items-center justify-center border border-border/70 text-foreground/60 hover:text-[#C87941] hover:bg-[rgba(200,121,65,0.08)] hover:border-[rgba(200,121,65,0.22)] transition-all duration-200"
                                        aria-label="Toggle menu"
                                    />
                                }
                            >
                                <Menu className="w-4.5 h-4.5" />
                            </SheetTrigger>

                            {/* ── Mobile drawer ── */}
                            <SheetContent
                                side="right"
                                showCloseButton={false}
                                className="w-[88vw] sm:w-[400px] p-0 border-l border-border/60 bg-background/95 backdrop-blur-2xl flex flex-col overflow-hidden"
                            >
                                {/* Ambient glow */}
                                <div className="absolute top-0 right-0 w-56 h-56 bg-[rgba(200,121,65,0.06)] rounded-full blur-[70px] pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[rgba(200,121,65,0.04)] rounded-full blur-[70px] pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full">

                                    {/* Drawer header */}
                                    <div className="flex items-center justify-between px-6 py-5 border-b border-border/60">
                                        <Link
                                            href="/"
                                            onClick={() => setOpen(false)}
                                            className="flex items-center gap-2.5"
                                        >
                                            <LogoMark />
                                            <span className="font-serif text-[18px] font-bold text-foreground tracking-[-0.01em]">
                                                Daily <em className="text-[#C87941] not-italic">Grind</em>
                                            </span>
                                        </Link>

                                        <motion.button
                                            onClick={() => setOpen(false)}
                                            whileHover={{ rotate: 90 }}
                                            transition={{ duration: 0.25 }}
                                            className="w-8 h-8 rounded-full bg-[rgba(200,121,65,0.10)] border border-[rgba(200,121,65,0.20)] flex items-center justify-center text-[#C87941]"
                                            aria-label="Close menu"
                                        >
                                            <X className="w-3.5 h-3.5" />
                                        </motion.button>
                                    </div>

                                    {/* Drawer nav links */}
                                    <nav className="flex flex-col flex-1 overflow-y-auto px-6 pt-4 pb-2">
                                        {navLinks.map((link, i) => (
                                            <MobileNavLink
                                                key={link.href}
                                                href={link.href}
                                                label={link.label}
                                                isActive={pathname === link.href}
                                                onClick={() => setOpen(false)}
                                                index={i}
                                            />
                                        ))}
                                    </nav>

                                    {/* VIP promo banner */}
                                    <div className="px-5 mt-auto">
                                        <motion.div
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.35, duration: 0.4 }}
                                            className="relative rounded-2xl bg-[rgba(200,121,65,0.09)] border border-[rgba(200,121,65,0.20)] p-4 mb-3 overflow-hidden"
                                        >
                                            {/* Glow accent */}
                                            <div className="absolute top-0 right-0 w-16 h-16 bg-[rgba(200,121,65,0.18)] rounded-full blur-2xl pointer-events-none" />
                                            <p className="text-[10px] font-bold text-[#C87941] uppercase tracking-[0.18em] mb-1">
                                                VIP Member
                                            </p>
                                            <p className="text-[13px] text-foreground/75 leading-[1.55] mb-3">
                                                Join our loyalty program to unlock free drinks and secret promos.
                                            </p>
                                            <Link
                                                href="/loyalty"
                                                onClick={() => setOpen(false)}
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C87941] text-[#1A0900] text-[11.5px] font-bold hover:bg-[#D98B52] transition-colors"
                                            >
                                                Learn more →
                                            </Link>
                                        </motion.div>

                                        {/* Auth buttons */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.42, duration: 0.35 }}
                                            className="flex gap-2.5 pb-6"
                                        >
                                            {user ? (
                                                <Link
                                                    href="/dashboard"
                                                    onClick={() => setOpen(false)}
                                                    className="flex-1 text-center py-3 rounded-full bg-[#C87941] text-[#1A0900] text-[13px] font-bold hover:bg-[#D98B52] transition-all duration-200 shadow-[0_0_20px_rgba(200,121,65,0.28)]"
                                                >
                                                    Go to Dashboard
                                                </Link>
                                            ) : (
                                                <>
                                                    <Link
                                                        href="/login"
                                                        onClick={() => setOpen(false)}
                                                        className="flex-1 text-center py-3 rounded-full border border-border/80 text-foreground/75 text-[13px] font-bold hover:border-[rgba(200,121,65,0.30)] hover:text-[#C87941] transition-all duration-200"
                                                    >
                                                        Sign in
                                                    </Link>
                                                    <Link
                                                        href="/register"
                                                        onClick={() => setOpen(false)}
                                                        className="flex-1 text-center py-3 rounded-full bg-[#C87941] text-[#1A0900] text-[13px] font-bold hover:bg-[#D98B52] transition-all duration-200 shadow-[0_0_20px_rgba(200,121,65,0.28)]"
                                                    >
                                                        Register
                                                    </Link>
                                                </>
                                            )}
                                        </motion.div>
                                    </div>

                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Scroll progress bar */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-[#C87941] rounded-r-full opacity-60"
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>
        </motion.header>
    )
}