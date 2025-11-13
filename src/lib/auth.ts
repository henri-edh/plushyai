import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { db } from "./db"

/**
 * Better Auth configuration for the application.
 *
 * Provides:
 * - Google OAuth authentication
 * - PostgreSQL database persistence via Drizzle ORM
 * - Custom user fields (credits)
 * - Session management with 7-day expiration
 * - Rate limiting for security
 *
 * @see https://www.better-auth.com/docs/installation
 */
export const auth = betterAuth({
  // CRITICAL: Required for session encryption and OAuth callbacks
  secret: process.env.BETTER_AUTH_SECRET as string,
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  database: drizzleAdapter(db, {
    provider: "pg",
  }),

  // Session configuration for security and performance
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days - sessions expire after this
    updateAge: 60 * 60 * 24, // 1 day - update session in DB after this time
    freshAge: 60 * 10, // 10 minutes - session considered "fresh" for this duration
  },

  // Rate limiting to prevent brute force attacks
  rateLimit: {
    enabled: true,
    window: 60, // 60 seconds
    max: 10, // Maximum 10 requests per minute per IP
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      credits: {
        type: "number",
        required: false,
        defaultValue: 0,
        input: false,
      },
      platformRole: {
        type: "string",
        required: false,
        defaultValue: "user",
        input: false,
      },
    },
  },
})

export type Session = typeof auth.$Infer.Session