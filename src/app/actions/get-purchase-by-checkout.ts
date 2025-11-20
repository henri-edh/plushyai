"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/lib/db";
import { purchases } from "@/lib/schema";
import { eq, and } from "drizzle-orm";

/**
 * Get purchase details by Polar checkout ID for the current user.
 *
 * @param checkoutId - Polar checkout ID from the success redirect
 * @returns Success response with purchase data or error
 */
export async function getPurchaseByCheckout(checkoutId: string) {
  // Check authentication
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return {
      success: false,
      error: "Unauthorized",
    };
  }

  try {
    // Fetch purchase by checkout ID for current user
    const [purchase] = await db
      .select()
      .from(purchases)
      .where(
        and(
          eq(purchases.polarCheckoutId, checkoutId),
          eq(purchases.userId, session.user.id)
        )
      )
      .limit(1);

    if (!purchase) {
      return {
        success: false,
        error: "Purchase not found",
      };
    }

    return {
      success: true,
      data: purchase,
    };
  } catch (error) {
    console.error("Error fetching purchase:", error);
    return {
      success: false,
      error: "Failed to fetch purchase",
    };
  }
}
