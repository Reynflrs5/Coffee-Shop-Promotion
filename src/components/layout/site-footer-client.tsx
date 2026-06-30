"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Send, MapPin, Mail, Phone } from "lucide-react"
import { navLinks } from "@/constants/nav-links"

/* ─── Logo mark — matches header treatment ─── */
function LogoMark() {
    return (
        <div className="w-[38px] h-[38px] rounded-[11px] bg-[#C87941] flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-[17px] font-bold italic text-[#1A0900] tracking-[-0.03em] leading-none">
                dg
            </span>
        </div>
    )
}


/* ─── Section heading with trailing rule ─── */
function ColHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C87941] whitespace-nowrap">
                {children}
            </span>
            <span className="flex-1 h-px bg-border/70" />
        </div>
    )
}

/* ─── Social icon button ─── */
function SocialButton({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a
            href={href}
            className="w-[38px] h-[38px] rounded-[11px] bg-[rgba(200,121,65,0.09)] border border-[rgba(200,121,65,0.20)] flex items-center justify-center text-[#C87941] hover:bg-[#C87941] hover:text-[#1A0900] hover:-translate-y-0.5 transition-all duration-200"
        >
            {children}
        </a>
    )
}

/* ─── Contact row ─── */
function ContactItem({
    icon,
    children,
}: {
    icon: React.ReactNode
    children: React.ReactNode
}) {
    return (
        <li className="flex items-start gap-[11px] text-[13.5px] text-muted-foreground leading-[1.55]">
            <span className="w-[30px] h-[30px] rounded-[9px] flex-shrink-0 bg-[rgba(200,121,65,0.09)] border border-[rgba(200,121,65,0.20)] flex items-center justify-center text-[#C87941] mt-px">
                {icon}
            </span>
            <span>{children}</span>
        </li>
    )
}

export function SiteFooterClient({ address, phone }: { address: string; phone: string }) {
    return (
        <footer className="relative w-full overflow-hidden bg-background text-foreground pt-[88px] pb-9 mt-auto border-t border-border/60">

            {/* Top glow line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C87941] to-transparent opacity-50" />

            {/* Ambient glows */}
            <div className="absolute -bottom-[220px] -right-[180px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(200,121,65,0.12)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute -top-[160px] -left-[140px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(200,121,65,0.06)_0%,transparent_70%)] pointer-events-none" />

            <div className="mx-auto max-w-[1200px] px-5 sm:px-8 relative z-10">

                {/* ── Main grid ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr] gap-10 lg:gap-12 mb-16"
                >
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-[11px] mb-5 w-fit">
                            <LogoMark />
                            <span className="font-serif text-[22px] font-bold tracking-[-0.01em] text-foreground">
                                Daily <em className="text-[#C87941] not-italic">Grind</em>
                            </span>
                        </Link>
                        <p className="text-[13.5px] leading-[1.75] text-muted-foreground max-w-[280px] mb-6">
                            More than just coffee — we&apos;re a community of caffeine
                            enthusiasts dedicated to the perfect cup, roasted fresh in
                            Pampanga.
                        </p>
                        <div className="flex gap-2.5">
                            <SocialButton href="#">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                                </svg>
                            </SocialButton>
                            <SocialButton href="#">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </SocialButton>
                            <SocialButton href="#">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </SocialButton>
                        </div>
                    </div>

                    {/* Explore */}
                    <div>
                        <ColHeading>Explore</ColHeading>
                        <ul className="flex flex-col gap-[13px]">
                            {navLinks.slice(0, 5).map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[13.5px] font-medium text-muted-foreground hover:text-[#C87941] hover:translate-x-[3px] inline-block transition-all duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <ColHeading>Contact</ColHeading>
                        <ul className="flex flex-col gap-4">
                            <ContactItem icon={<MapPin className="w-[13px] h-[13px]" />}>
                                {address}
                            </ContactItem>
                            <ContactItem icon={<Phone className="w-[13px] h-[13px]" />}>
                                {phone}
                            </ContactItem>
                            <ContactItem icon={<Mail className="w-[13px] h-[13px]" />}>
                                hello@dailygrind.ph
                            </ContactItem>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <ColHeading>Newsletter</ColHeading>
                        <p className="text-[13.5px] leading-[1.7] text-muted-foreground mb-[18px]">
                            Subscribe for special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="relative group">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                                className="w-full py-3.5 pl-[18px] pr-[50px] rounded-full text-[13px] text-foreground placeholder-muted-foreground bg-[rgba(200,121,65,0.09)] border border-[rgba(200,121,65,0.20)] outline-none focus:border-[#C87941] transition-colors duration-200"
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className="absolute right-[5px] top-[5px] bottom-[5px] w-[38px] rounded-full bg-[#C87941] text-[#1A0900] flex items-center justify-center hover:scale-[1.07] transition-transform duration-200"
                            >
                                <Send className="w-3.5 h-3.5 ml-0.5" />
                            </button>
                        </form>
                        <p className="text-[11px] text-muted-foreground/70 mt-2.5">
                            No spam. Unsubscribe anytime.
                        </p>
                    </div>
                </motion.div>

                {/* ── Bottom bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="pt-7 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="flex items-center gap-2 text-[12.5px] font-medium text-muted-foreground">
                        <span className="w-[5px] h-[5px] rounded-full bg-[#C87941]" />
                        © {new Date().getFullYear()} Daily Grind Coffee Shop. All rights reserved.
                    </p>
                    <div className="flex items-center gap-7">
                        <Link
                            href="/privacy"
                            className="text-[12.5px] font-medium text-muted-foreground hover:text-[#C87941] transition-colors duration-200"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-[12.5px] font-medium text-muted-foreground hover:text-[#C87941] transition-colors duration-200"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
