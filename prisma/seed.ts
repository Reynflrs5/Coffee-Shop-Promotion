import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Seed promotions
  await prisma.promotion.createMany({
    data: [
      {
        title: "Morning Rush Combo",
        description: "Any medium coffee and a freshly baked croissant for only ₱199. The perfect way to start your day.",
        badge: "Most Popular",
        tag: "Everyday",
        validUntil: "Valid everyday until 10:00 AM",
        featured: false,
      },
      {
        title: "Weekend Buy 1 Get 1",
        description: "Bring a friend and enjoy our signature Caramel Macchiato. Buy one, get the second at 50% off — all weekend long.",
        badge: "Weekend Special",
        tag: "Sat & Sun",
        validUntil: "Valid Sat & Sun, all day",
        featured: true,
      },
      {
        title: "Happy Hour Chill",
        description: "Beat the afternoon slump. All iced coffees and frappes are 20% off during happy hour, every weekday.",
        badge: "Limited Time",
        tag: "Weekdays",
        validUntil: "Valid 2:00 PM – 5:00 PM",
        featured: false,
      },
    ],
  })

  // Seed menu items
  await prisma.menuItem.createMany({
    data: [
      { name: "Caramel Macchiato", description: "Our signature espresso with vanilla and caramel.", price: 150, category: "Espresso" },
      { name: "Iced Americano", description: "Rich espresso over ice and water.", price: 120, category: "Espresso" },
      { name: "Matcha Latte", description: "Premium green tea matcha with steamed milk.", price: 160, category: "Tea" },
      { name: "Butter Croissant", description: "Freshly baked flaky butter croissant.", price: 80, category: "Pastries" },
    ],
  })

  // Seed branches
  await prisma.branch.createMany({
    data: [
      {
        name: "Daily Grind Angeles City",
        address: "MacArthur Highway, Balibago, Angeles City, Pampanga",
        city: "Angeles City",
        phone: "+63 917 123 4567",
        openHours: "7:00 AM – 11:00 PM",
      },
      {
        name: "Daily Grind Clark Freeport",
        address: "Parade Grounds, Clark Freeport Zone, Pampanga",
        city: "Clark",
        phone: "+63 917 987 6543",
        openHours: "6:00 AM – 12:00 MN",
      },
      {
        name: "Daily Grind San Fernando",
        address: "Jose Abad Santos Ave, San Fernando, Pampanga",
        city: "San Fernando",
        phone: "+63 917 456 7890",
        openHours: "Open 24 Hours",
      },
    ],
  })

  console.log("✅ Database seeded with default Coffee Shop data!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
