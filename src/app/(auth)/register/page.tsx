"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Coffee, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: false,
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    }

    const passwordsMatch = form.password && form.confirmPassword && form.password === form.confirmPassword

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!passwordsMatch) return
        // TODO: connect to backend auth
        console.log(form)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side — Coffee Branding Panel */}
            <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-12 overflow-hidden">
                <Image
                    src={heroBg}
                    alt="Daily Grind Coffee"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <Image
                            src={logoImage}
                            alt="Daily Grind Logo"
                            width={100}
                            height={100}
                            className="h-24 w-24 object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-5xl font-bold text-white mb-4"
                    >
                        Join the Grind
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/70 text-lg max-w-sm"
                    >
                        Create your free account and get access to exclusive promos, deals, and member-only coffee perks.
                    </motion.p>

                    {/* Benefits List */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-10 flex flex-col gap-3 text-left"
                    >
                        {[
                            "Access exclusive member-only promos",
                            "Save and claim deals instantly",
                            "Be the first to know about new offers",
                            "It's 100% free to join!",
                        ].map((benefit) => (
                            <div key={benefit} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-white/80 text-sm">{benefit}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Right Side — Register Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md py-8"
                >
                    {/* Mobile Logo */}
                    <div className="flex items-center gap-3 mb-8 lg:hidden">
                        <Image
                            src={logoImage}
                            alt="Daily Grind Logo"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                        />
                        <span className="font-display text-2xl font-bold text-primary">Daily Grind</span>
                    </div>

                    {/* Form Header */}
                    <div className="mb-8">
                        <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                            Create an account ✨
                        </h2>
                        <p className="text-muted-foreground">
                            Sign up for free and start enjoying exclusive coffee promotions.
                        </p>
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Name Row */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="firstName" className="text-sm font-medium text-foreground">
                                    First Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        required
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Juan"
                                        className="w-full pl-9 pr-3 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="lastName" className="text-sm font-medium text-foreground">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        required
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Dela Cruz"
                                        className="w-full pl-9 pr-3 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all text-sm"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password" className="text-sm font-medium text-foreground">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Min. 8 characters"
                                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirm ? "text" : "password"}
                                    autoComplete="new-password"
                                    required
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter your password"
                                    className={`w-full pl-10 pr-12 py-3 rounded-xl border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                                        form.confirmPassword
                                            ? passwordsMatch
                                                ? "border-green-500 focus:ring-green-400"
                                                : "border-red-400 focus:ring-red-400"
                                            : "border-input focus:ring-ring"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {form.confirmPassword && !passwordsMatch && (
                                <p className="text-red-400 text-xs mt-1">Passwords do not match.</p>
                            )}
                            {passwordsMatch && (
                                <p className="text-green-500 text-xs mt-1 flex items-center gap-1">
                                    <CheckCircle2 className="w-3 h-3" /> Passwords match!
                                </p>
                            )}
                        </div>

                        {/* Agree to Terms */}
                        <div className="flex items-start gap-2 mt-1">
                            <input
                                id="agree"
                                name="agree"
                                type="checkbox"
                                required
                                checked={form.agree}
                                onChange={handleChange}
                                className="w-4 h-4 accent-primary rounded mt-0.5"
                            />
                            <label htmlFor="agree" className="text-sm text-muted-foreground">
                                I agree to the{" "}
                                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                                {" "}and{" "}
                                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-base font-semibold rounded-xl mt-2"
                            disabled={!passwordsMatch || !form.agree}
                        >
                            <Coffee className="w-5 h-5 mr-2" />
                            Create My Account
                        </Button>

                        {/* Divider */}
                        <div className="relative flex items-center gap-4 my-1">
                            <div className="flex-1 h-px bg-border" />
                            <span className="text-xs text-muted-foreground uppercase tracking-wider">or sign up with</span>
                            <div className="flex-1 h-px bg-border" />
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button type="button" variant="outline" className="h-12 rounded-xl gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Google
                            </Button>
                            <Button type="button" variant="outline" className="h-12 rounded-xl gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                Facebook
                            </Button>
                        </div>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-muted-foreground text-sm mt-8">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-semibold hover:underline">
                            Sign in here
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
