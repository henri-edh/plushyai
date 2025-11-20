"use client";

import { ReactNode } from "react";
import { SignupBonusHandler } from "@/components/auth/signup-bonus-handler";

interface DashboardClientWrapperProps {
  children: ReactNode;
}

/**
 * Client wrapper for the dashboard that handles client-side initialization tasks
 * like creating signup bonus transactions for new users.
 */
export function DashboardClientWrapper({ children }: DashboardClientWrapperProps) {
  return (
    <>
      <SignupBonusHandler />
      {children}
    </>
  );
}
