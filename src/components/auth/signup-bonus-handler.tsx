"use client";

import { useEffect, useState } from "react";
import { createSignupBonus } from "@/app/actions/create-signup-bonus";

/**
 * Component that automatically creates a signup bonus transaction
 * for new users on their first login.
 *
 * This component should be included in protected pages (like dashboard)
 * to ensure new users get their free credit transaction logged.
 */
export function SignupBonusHandler() {
  const [processed, setProcessed] = useState(false);

  useEffect(() => {
    if (processed) return;

    const initSignupBonus = async () => {
      try {
        await createSignupBonus();
        setProcessed(true);
      } catch (error) {
        console.error("Failed to initialize signup bonus:", error);
      }
    };

    initSignupBonus();
  }, [processed]);

  // This component doesn't render anything
  return null;
}
