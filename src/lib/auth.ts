import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"

// ─── Constants ────────────────────────────────────────────────────────────────
const SESSION_COOKIE = "dg_session"
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "daily-grind-super-secret-key-change-in-production"
)

// ─── Types ────────────────────────────────────────────────────────────────────
export interface SessionPayload {
    userId: number
    email: string
    name: string | null
}

// ─── Create a signed JWT session token ───────────────────────────────────────
export async function createSessionToken(payload: SessionPayload): Promise<string> {
    return new SignJWT({ ...payload })
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(JWT_SECRET)
}

// ─── Verify a JWT session token ───────────────────────────────────────────────
export async function verifySessionToken(token: string): Promise<SessionPayload | null> {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET)
        return payload as unknown as SessionPayload
    } catch {
        return null
    }
}

// ─── Set session cookie (Server Action / API Route only) ─────────────────────
export async function setSessionCookie(payload: SessionPayload) {
    const token = await createSessionToken(payload)
    const cookieStore = await cookies()
    cookieStore.set(SESSION_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
    })
}

// ─── Get current session (Server Components / API Routes) ────────────────────
export async function getSession(): Promise<SessionPayload | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get(SESSION_COOKIE)?.value
    if (!token) return null
    return verifySessionToken(token)
}

// ─── Clear session cookie ─────────────────────────────────────────────────────
export async function clearSession() {
    const cookieStore = await cookies()
    cookieStore.delete(SESSION_COOKIE)
}
