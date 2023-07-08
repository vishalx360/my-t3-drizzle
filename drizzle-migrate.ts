import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
dotenv.config();

const sql = postgres(process.env.DATABASE_URL, { max: 1 })
const db = drizzle(sql);

(async () => {
    await migrate(db, { migrationsFolder: "drizzle", });
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
