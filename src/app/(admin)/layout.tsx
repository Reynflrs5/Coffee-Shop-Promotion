export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-muted">
            {/* Sidebar will be added in Phase 14 */}
            <div className="flex-1 p-6">{children}</div>
        </div>
    )
}