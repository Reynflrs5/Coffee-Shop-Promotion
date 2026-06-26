"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"

export default function VerifyCodePage() {
    const [code, setCode] = useState(["", "", "", "", "", ""])
    const [error, setError] = useState("")
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return // numbers only
        const newCode = [...code]
        newCode[index] = value.slice(-1) // only 1 digit per box
        setCode(newCode)
        setError("")

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
        if (pasted.length === 6) {
            setCode(pasted.split(""))
            inputRefs.current[5]?.focus()
        }
        e.preventDefault()
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const fullCode = code.join("")
        if (fullCode.length < 6) {
            setError("Please enter all 6 digits.")
            return
        }
        // TODO: verify code with backend
        window.location.href = "/reset-password"
    }

    const isComplete = code.every((d) => d !== "")

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
                        Check your inbox — your 6-digit code is waiting. It expires in 10 minutes.
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

                    <div className="mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                            <ShieldCheck className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            Enter Your Code
                        </h2>
                        <p className="text-muted-foreground">
                            We sent a 6-digit code to your email. Enter it below to verify your identity.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* 6-Digit Code Boxes */}
                        <div className="flex justify-between gap-3" onPaste={handlePaste}>
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    ref={(el) => { inputRefs.current[index] = el }}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className={`w-full aspect-square text-center text-2xl font-bold rounded-xl border-2 bg-background text-foreground focus:outline-none transition-all ${
                                        digit
                                            ? "border-primary bg-primary/5"
                                            : "border-input hover:border-primary/50"
                                    } focus:border-primary focus:ring-2 focus:ring-ring`}
                                />
                            ))}
                        </div>

                        {error && (
                            <p className="text-red-400 text-sm text-center -mt-2">{error}</p>
                        )}

                        <Button
                            type="submit"
                            size="lg"
                            disabled={!isComplete}
                            className="w-full h-12 text-base font-semibold rounded-xl"
                        >
                            <ShieldCheck className="w-4 h-4 mr-2" />
                            Verify Code
                        </Button>

                        <p className="text-center text-sm text-muted-foreground">
                            Didn't receive a code?{" "}
                            <button type="button" className="text-primary font-semibold hover:underline">
                                Resend Code
                            </button>
                        </p>
                    </form>

                    <div className="mt-8 text-center">
                        <Link href="/forgot-password" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Forgot Password
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
