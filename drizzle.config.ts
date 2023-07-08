// drizzle.config.ts
import type { Config } from "drizzle-kit";
import "dotenv/config";
import { env } from "@/env.mjs";

export default {
  schema: "./src/db/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  }
} satisfies Config;

