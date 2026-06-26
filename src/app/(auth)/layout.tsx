// Auth pages (login, register) have their own full-screen layout
// without the site header and footer
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
