"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { creditTransactions } from "@/lib/schema";
import { eq, and } from "drizzle-orm";

/**
 * Creates a signup bonus transaction for a user if they don't have one yet.
 * This should be called once when a user first logs in after signup.
 *
 * @returns Success status and message
 */
export async function createSignupBonus(): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session?.user) {
      return { success: false, error: "Unauthorized" };
    }

    const userId = session.user.id;

    // Check if user already has a signup bonus transaction
    const existingBonus = await db
      .select()
      .from(creditTransactions)
      .where(
        and(
          eq(creditTransactions.userId, userId),
          eq(creditTransactions.type, "adjustment"),
          eq(creditTransactions.description, "Welcome bonus - Free credit for new users")
        )
      )
      .limit(1);

    if (existingBonus.length > 0) {
      return {
        success: true,
        message: "Signup bonus already claimed",
      };
    }

    // Create the signup bonus transaction
    await db.insert(creditTransactions).values({
      userId,
      type: "adjustment",
      amount: 1,
      balanceAfter: 1,
      description: "Welcome bonus - Free credit for new users",
      metadata: {
        reason: "signup_bonus",
        automatic: true,
      },
    });

    console.log(`[Signup Bonus] Created transaction for user ${userId}`);

    return {
      success: true,
      message: "Signup bonus created successfully",
    };
  } catch (error) {
    console.error("[Signup Bonus] Error creating transaction:", error);
    return {
      success: false,
      error: "Failed to create signup bonus",
    };
  }
}
