import { cn } from "@/lib/utils"

interface LogoProps {
    className?: string
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={cn("flex items-center justify-center shrink-0", className)}>
            <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-foreground text-background font-display font-bold text-xl md:text-2xl tracking-tighter overflow-hidden group">
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">DG</span>
                {/* Decorative shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-background/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            </div>
        </div>
    )
}
