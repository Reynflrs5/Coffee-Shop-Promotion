"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, User, Coffee, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"
import { toast } from "sonner"

import { useRouter } from "next/navigation"

export default function RegisterPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!passwordsMatch) return

        setError("")
        setIsLoading(true)

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Registration failed. Please try again.")
                toast.error(data.error || "Registration failed.")
                return
            }

            toast.success("Account created successfully! Welcome to Daily Grind.")
            router.push("/dashboard")
            router.refresh()
        } catch {
            const msg = "Network error. Please check your connection."
            setError(msg)
            toast.error(msg)
        } finally {
            setIsLoading(false)
        }
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

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl flex items-start gap-3">
                            <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center font-bold">!</span>
                            {error}
                        </div>
                    )}

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
                            disabled={!passwordsMatch || !form.agree || isLoading}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <>
                                    <Coffee className="w-5 h-5 mr-2" />
                                    Create My Account
                                </>
                            )}
                        </Button>

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
