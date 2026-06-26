"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("")
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: call backend to send reset code
        setSent(true)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Branding Panel */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
                <Image src={heroBg} alt="Daily Grind Coffee" fill className="object-cover object-center" priority quality={90} />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
                        <Image src={logoImage} alt="Daily Grind Logo" width={100} height={100} className="h-24 w-24 object-contain drop-shadow-2xl" />
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-5xl font-bold text-white mb-4">
                        Daily Grind
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-white/70 text-lg max-w-sm">
                        Don't worry — it happens to the best of us. We'll help you get back to your coffee in no time.
                    </motion.p>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Mobile Logo */}
                    <div className="flex items-center gap-3 mb-8 lg:hidden">
                        <Image src={logoImage} alt="Daily Grind Logo" width={48} height={48} className="h-12 w-12 object-contain" />
                        <span className="font-display text-2xl font-bold text-primary">Daily Grind</span>
                    </div>

                    {!sent ? (
                        <>
                            <div className="mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Mail className="w-7 h-7 text-primary" />
                                </div>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                                    Forgot Password?
                                </h2>
                                <p className="text-muted-foreground">
                                    No worries! Enter your email address and we'll send you a 6-digit reset code.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                        />
                                    </div>
                                </div>

                                <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold rounded-xl">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Reset Code
                                </Button>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Check your email!</h2>
                            <p className="text-muted-foreground mb-6">
                                We've sent a 6-digit reset code to <br />
                                <span className="font-semibold text-foreground">{email}</span>
                            </p>
                            <Link href="/verify-code">
                                <Button size="lg" className="w-full h-12 rounded-xl text-base font-semibold">
                                    Enter the Code
                                </Button>
                            </Link>
                        </motion.div>
                    )}

                    <div className="mt-8 text-center">
                        <Link href="/login" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Login
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
