"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react"
import { MainWrapper } from "@/components/layout/main-wrapper"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 1500)
    }

    return (
        <MainWrapper className="min-h-screen bg-[#FDFBF7] dark:bg-background pb-24 overflow-hidden">
            {/* 1. Ultra-Premium Header */}
            <div className="relative w-full bg-foreground dark:bg-muted/10 py-24 md:py-32 rounded-b-[3rem] md:rounded-b-[4rem] border-b border-border/10 mb-16 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest mb-6 border border-primary/30 backdrop-blur-md">
                        <MessageSquare className="w-4 h-4" />
                        Get in Touch
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Let's grab a <br />
                        <span className="text-primary italic">coffee.</span>
                    </h1>
                    <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Whether you have a question about our beans, want to partner with us, or just want to say hi—we'd love to hear from you.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative -mt-24 z-20">
                    
                    {/* 2. Glassmorphism Contact Details (Left Side) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 flex flex-col gap-6"
                    >
                        {/* Info Card */}
                        <div className="bg-card/90 dark:bg-card/60 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                            
                            <h3 className="font-display text-3xl font-bold text-foreground mb-10">Say Hello!</h3>
                            
                            <div className="space-y-10">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Us</p>
                                        <a href="mailto:hello@dailygrind.ph" className="text-lg text-foreground font-bold hover:text-primary transition-colors">hello@dailygrind.ph</a>
                                        <p className="text-sm text-muted-foreground mt-1">Replies within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Call Us</p>
                                        <a href="tel:+639171234567" className="text-lg text-foreground font-bold hover:text-primary transition-colors">+63 917 123 4567</a>
                                        <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm PHT.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-5 group">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Headquarters</p>
                                        <p className="text-lg text-foreground font-bold leading-snug">MacArthur Highway, Balibago<br/>Angeles City, Pampanga</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links Panel */}
                        <div className="bg-card/90 dark:bg-card/60 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] p-8 shadow-2xl flex items-center justify-between">
                            <span className="font-bold text-foreground tracking-wide">Follow our journey</span>
                            <div className="flex items-center gap-2">
                                <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all shadow-sm">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Modern Form Design (Right Side) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-2/3"
                    >
                        <div className="bg-card dark:bg-card/40 border border-border/50 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden h-full">
                            {/* Decorative blur */}
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

                            {isSubmitted ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-20"
                                >
                                    <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-inner">
                                        <Send className="w-10 h-10 ml-1" />
                                    </div>
                                    <h3 className="font-display text-4xl font-bold text-foreground mb-4">Message Sent!</h3>
                                    <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
                                        Thank you for reaching out. A member of our team will get back to you shortly.
                                    </p>
                                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full px-10 h-14 text-base font-bold">
                                        Send Another Message
                                    </Button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-10">
                                        <h2 className="font-display text-4xl font-bold text-foreground mb-3">Send a message</h2>
                                        <p className="text-muted-foreground text-lg">Fill out the form below and we'll be in touch.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Name */}
                                            <div className="relative group">
                                                <input 
                                                    id="name"
                                                    type="text" 
                                                    required
                                                    className="w-full peer bg-transparent border-b-2 border-border/50 py-3 text-lg font-medium text-foreground outline-none transition-colors focus:border-primary placeholder-transparent"
                                                    placeholder="Name"
                                                />
                                                <label htmlFor="name" className="absolute left-0 -top-4 text-xs font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">
                                                    Full Name
                                                </label>
                                            </div>
                                            {/* Email */}
                                            <div className="relative group">
                                                <input 
                                                    id="email"
                                                    type="email" 
                                                    required
                                                    className="w-full peer bg-transparent border-b-2 border-border/50 py-3 text-lg font-medium text-foreground outline-none transition-colors focus:border-primary placeholder-transparent"
                                                    placeholder="Email"
                                                />
                                                <label htmlFor="email" className="absolute left-0 -top-4 text-xs font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-primary">
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="space-y-3">
                                            <label htmlFor="subject" className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Topic of Interest</label>
                                            <div className="relative">
                                                <select 
                                                    id="subject"
                                                    className="w-full px-5 py-4 rounded-2xl border-2 border-border/50 bg-background/50 focus:bg-background focus:border-primary outline-none transition-all appearance-none text-foreground font-medium text-lg cursor-pointer hover:border-primary/50"
                                                >
                                                    <option>General Inquiry</option>
                                                    <option>Feedback & Suggestions</option>
                                                    <option>Franchising & Partnerships</option>
                                                    <option>Catering & Events</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <div className="w-3 h-3 border-r-2 border-b-2 border-muted-foreground rotate-45" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="relative pt-6">
                                            <textarea 
                                                id="message"
                                                required
                                                rows={4}
                                                className="w-full peer bg-transparent border-b-2 border-border/50 py-3 text-lg font-medium text-foreground outline-none transition-colors focus:border-primary placeholder-transparent resize-none"
                                                placeholder="Message"
                                            />
                                            <label htmlFor="message" className="absolute left-0 -top-1 text-xs font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground peer-placeholder-shown:top-6 peer-focus:-top-1 peer-focus:text-xs peer-focus:text-primary">
                                                Your Message
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <Button 
                                            type="submit" 
                                            size="lg" 
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto px-10 rounded-full h-14 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3">
                                                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-3">
                                                    Send Message <Send className="w-5 h-5" />
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainWrapper>
    )
}
