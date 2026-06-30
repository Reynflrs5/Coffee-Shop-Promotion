"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, Mail, Lock, Coffee, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoImage from "@/assets/logo/daily-grind-logo1.png"
import heroBg from "@/assets/images/daily-grind-bg.png"
import { toast } from "sonner"

export default function LoginPage() {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                setError(data.error || "Login failed. Please try again.")
                toast.error(data.error || "Login failed.")
                return
            }

            // Success — redirect to dashboard
            toast.success("Welcome back! 👋")
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
                {/* Background Image */}
                <Image
                    src={heroBg}
                    alt="Daily Grind Coffee"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Branding Content */}
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
                        Daily Grind
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white/70 text-lg max-w-sm"
                    >
                        Your daily escape to artisanal coffee perfection. Sign in and discover exclusive deals crafted just for you.
                    </motion.p>

                    {/* Testimonial Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-12 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-sm"
                    >
                        <p className="text-white/90 italic text-sm mb-3">
                            "The best coffee I've ever had. Daily Grind makes my mornings worth waking up for!"
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/80 flex items-center justify-center">
                                <Coffee className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white/70 text-sm font-medium">Maria Santos, Regular Customer</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Right Side — Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-background">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md"
                >
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Promotions
                    </Link>

                    {/* Mobile Logo (visible only on small screens) */}
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
                            Welcome back! ☕
                        </h2>
                        <p className="text-muted-foreground">
                            Sign in to your account to claim promos and manage your orders.
                        </p>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl flex items-start gap-3">
                            <span className="w-5 h-5 mt-0.5 shrink-0 rounded-full bg-red-100 dark:bg-red-500/20 flex items-center justify-center font-bold">!</span>
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {/* Email Field */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="text-sm font-medium text-foreground">
                                    Password
                                </label>
                                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
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

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 accent-primary rounded"
                            />
                            <label htmlFor="remember" className="text-sm text-muted-foreground">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full h-12 text-base font-semibold rounded-xl mt-2"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                "Sign In"
                            )}
                        </Button>

                    </form>

                    {/* Register Link */}
                    <p className="text-center text-muted-foreground text-sm mt-8">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-primary font-semibold hover:underline">
                            Sign up for free
                        </Link>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
