import { StaticImageData } from "next/image"

import espressoImg from "@/assets/images/espresso.png"
import caramelMacchiatoImg from "@/assets/images/caramel-macchiato.png"
import flatWhiteImg from "@/assets/images/flat-white.png"
import cappuccinoImg from "@/assets/images/Cappuccino.png"
import americanoImg from "@/assets/images/americano.png"
import matchaImg from "@/assets/images/matcha.png"
import icedCaramelImg from "@/assets/images/iced-caramel.png"
import coffeeFrappeImg from "@/assets/images/coffee-frappe.png"
import icedMatchaImg from "@/assets/images/iced-matcha.png"
import coldBrewImg from "@/assets/images/cold-brew.png"
import vanillaBeanImg from "@/assets/images/vanilla-bean.png"
import strawberryLemonadeImg from "@/assets/images/strawberry-lemonade.png"
import butterCroissantImg from "@/assets/images/butter-croissant.png"
import blueberryMuffinImg from "@/assets/images/blueberry-muffin.png"
import chocolateCakeImg from "@/assets/images/chocolate-cake.png"
import hamCheeseImg from "@/assets/images/ham-cheese.png"
import cinnamonRollImg from "@/assets/images/cinnamon-roll.png"
import avocadoToastImg from "@/assets/images/avocado-toast.png"

export type MenuCategory = "all" | "hot-drinks" | "cold-drinks" | "pastries"

export interface MenuItem {
    id: number
    name: string
    description: string
    price: number
    category: Exclude<MenuCategory, "all">
    badge?: "Best Seller" | "New" | "Popular"
    image: StaticImageData
}

export const menuItems: MenuItem[] = [
    // Hot Drinks
    {
        id: 1,
        name: "Espresso",
        description: "A rich, concentrated shot of pure coffee perfection. Bold and intense.",
        price: 89,
        category: "hot-drinks",
        badge: "Best Seller",
        image: espressoImg,
    },
    {
        id: 2,
        name: "Caramel Macchiato",
        description: "Steamed milk layered with espresso and finished with silky caramel drizzle.",
        price: 155,
        category: "hot-drinks",
        badge: "Best Seller",
        image: caramelMacchiatoImg,
    },
    {
        id: 3,
        name: "Flat White",
        description: "A velvety smooth coffee with a double ristretto and perfectly textured microfoam.",
        price: 145,
        category: "hot-drinks",
        image: flatWhiteImg,
    },
    {
        id: 4,
        name: "Cappuccino",
        description: "Classic Italian blend of espresso, steamed milk, and a thick layer of foam.",
        price: 139,
        category: "hot-drinks",
        image: cappuccinoImg,
    },
    {
        id: 5,
        name: "Americano",
        description: "Bold espresso shots diluted with hot water for a clean, crisp taste.",
        price: 99,
        category: "hot-drinks",
        image: americanoImg,
    },
    {
        id: 6,
        name: "Matcha Latte",
        description: "Premium ceremonial grade matcha whisked with steamed oat milk. Earthy and calming.",
        price: 169,
        category: "hot-drinks",
        badge: "New",
        image: matchaImg,
    },
    // Cold Drinks
    {
        id: 7,
        name: "Iced Caramel Latte",
        description: "Chilled espresso over ice with fresh milk and sweet caramel syrup.",
        price: 159,
        category: "cold-drinks",
        badge: "Best Seller",
        image: icedCaramelImg,
    },
    {
        id: 8,
        name: "Coffee Frappe",
        description: "Blended iced coffee with whipped cream and a drizzle of chocolate sauce.",
        price: 175,
        category: "cold-drinks",
        badge: "Popular",
        image: coffeeFrappeImg,
    },
    {
        id: 9,
        name: "Iced Matcha Latte",
        description: "Smooth matcha blended with cold milk over crushed ice. Refreshing and earthy.",
        price: 179,
        category: "cold-drinks",
        badge: "New",
        image: icedMatchaImg,
    },
    {
        id: 10,
        name: "Cold Brew",
        description: "12-hour steeped cold brew with a smooth, chocolatey finish and zero bitterness.",
        price: 169,
        category: "cold-drinks",
        image: coldBrewImg,
    },
    {
        id: 11,
        name: "Vanilla Bean Frappe",
        description: "Creamy vanilla blended with ice and topped with fresh whipped cream.",
        price: 165,
        category: "cold-drinks",
        image: vanillaBeanImg,
    },
    {
        id: 12,
        name: "Strawberry Lemonade",
        description: "Fresh squeezed lemonade blended with ripe strawberry puree over ice.",
        price: 149,
        category: "cold-drinks",
        image: strawberryLemonadeImg,
    },
    // Pastries & Food
    {
        id: 13,
        name: "Butter Croissant",
        description: "Freshly baked, golden-layered French butter croissant. Flaky and warm.",
        price: 89,
        category: "pastries",
        badge: "Best Seller",
        image: butterCroissantImg,
    },
    {
        id: 14,
        name: "Blueberry Muffin",
        description: "Soft, moist muffin bursting with fresh blueberries and a sugared crust.",
        price: 95,
        category: "pastries",
        image: blueberryMuffinImg,
    },
    {
        id: 15,
        name: "Chocolate Cake Slice",
        description: "Rich, decadent dark chocolate layer cake with ganache frosting.",
        price: 129,
        category: "pastries",
        badge: "Popular",
        image: chocolateCakeImg,
    },
    {
        id: 16,
        name: "Ham & Cheese Sandwich",
        description: "Toasted sourdough with smoked ham, melted cheese, and whole grain mustard.",
        price: 149,
        category: "pastries",
        image: hamCheeseImg,
    },
    {
        id: 17,
        name: "Cinnamon Roll",
        description: "Soft and pillowy roll drizzled with cream cheese icing. Warm and indulgent.",
        price: 115,
        category: "pastries",
        badge: "New",
        image: cinnamonRollImg,
    },
    {
        id: 18,
        name: "Avocado Toast",
        description: "Toasted multigrain bread topped with smashed avocado, poached egg, and chili flakes.",
        price: 169,
        category: "pastries",
        image: avocadoToastImg,
    },
]

export const menuCategories: { label: string; value: MenuCategory }[] = [
    { label: "All", value: "all" },
    { label: "Hot Drinks", value: "hot-drinks" },
    { label: "Cold Drinks", value: "cold-drinks" },
    { label: "Food & Pastries", value: "pastries" },
]
