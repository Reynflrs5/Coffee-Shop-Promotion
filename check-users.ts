import { db } from "./src/lib/db";

async function main() {
    const users = await db.user.findMany();
    console.log("=== USERS IN DATABASE ===");
    console.log(JSON.stringify(users, null, 2));
    console.log("=========================");
}

main()
    .catch(console.error)
    .finally(() => db.$disconnect());
