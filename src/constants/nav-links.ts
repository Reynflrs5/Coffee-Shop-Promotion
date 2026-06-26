export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Promotions", href: "/promotions" },
  { label: "Loyalty Rewards", href: "/loyalty" },
  { label: "Branches", href: "/branches" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
]