import { cn } from "@/lib/utils"

interface MainWrapperProps {
    children: React.ReactNode
    className?: string
}

export function MainWrapper({ children, className }: MainWrapperProps) {
    return (
        <main className={cn("flex-1 w-full", className)}>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </main>
    )
}