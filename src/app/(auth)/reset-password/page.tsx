"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Lock, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [success, setSuccess] = useState(false)

    const passwordsMatch = password && confirmPassword && password === confirmPassword
    const isStrong = password.length >= 8

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!passwordsMatch) return
        // TODO: call backend reset password
        setSuccess(true)
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
                        Almost there! Set a strong new password and you'll be back enjoying your coffee deals in seconds.
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

                    {!success ? (
                        <>
                            <div className="mb-8">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                                    <Lock className="w-7 h-7 text-primary" />
                                </div>
                                <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                                    Set New Password
                                </h2>
                                <p className="text-muted-foreground">
                                    Create a strong new password for your Daily Grind account.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                {/* New Password */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="password" className="text-sm font-medium text-foreground">New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Min. 8 characters"
                                            className="w-full pl-10 pr-12 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                        />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {/* Strength Indicator */}
                                    {password && (
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className={`h-1.5 flex-1 rounded-full transition-colors ${isStrong ? "bg-green-500" : "bg-red-400"}`} />
                                            <span className={`text-xs font-medium ${isStrong ? "text-green-500" : "text-red-400"}`}>
                                                {isStrong ? "Strong" : "Too short"}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">Confirm New Password</label>
                                    <div className="relative">
                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                        <input
                                            id="confirmPassword"
                                            type={showConfirm ? "text" : "password"}
                                            required
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="Re-enter your new password"
                                            className={`w-full pl-10 pr-12 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                                                confirmPassword
                                                    ? passwordsMatch
                                                        ? "border-green-500 focus:ring-green-400"
                                                        : "border-red-400 focus:ring-red-400"
                                                    : "border-input focus:ring-ring"
                                            }`}
                                        />
                                        <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors">
                                            {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                    {confirmPassword && !passwordsMatch && (
                                        <p className="text-red-400 text-xs mt-1">Passwords do not match.</p>
                                    )}
                                    {passwordsMatch && (
                                        <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                                            <CheckCircle2 className="w-3 h-3" /> Passwords match!
                                        </p>
                                    )}
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={!passwordsMatch || !isStrong}
                                    className="w-full h-12 text-base font-semibold rounded-xl mt-2"
                                >
                                    Reset Password
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
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>
                            <h2 className="font-display text-3xl font-bold text-foreground mb-3">Password Reset!</h2>
                            <p className="text-muted-foreground mb-8">
                                Your password has been successfully updated. You can now log in with your new password.
                            </p>
                            <Link href="/login">
                                <Button size="lg" className="w-full h-12 rounded-xl text-base font-semibold">
                                    Back to Login
                                </Button>
                            </Link>
                        </motion.div>
                    )}

                    {!success && (
                        <div className="mt-8 text-center">
                            <Link href="/verify-code" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                                Back to Verify Code
                            </Link>
                        </div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}
