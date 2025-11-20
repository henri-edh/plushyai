"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Loader2 } from "lucide-react";
import { customer } from "@/lib/auth-client";
import { toast } from "sonner";

interface PolarPortalButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  className?: string;
}

/**
 * Button component that redirects users to their Polar customer portal.
 * Users can view orders, subscriptions, invoices, and manage their account.
 */
export function PolarPortalButton({
  variant = "outline",
  size = "default",
  className,
}: PolarPortalButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePortalAccess = async () => {
    try {
      setIsLoading(true);
      // Redirect to Polar customer portal
      await customer.portal();
    } catch (error) {
      console.error("Error accessing Polar portal:", error);
      toast.error("Failed to access customer portal. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePortalAccess}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Opening Portal...
        </>
      ) : (
        <>
          <ExternalLink className="mr-2 h-4 w-4" />
          Manage Billing
        </>
      )}
    </Button>
  );
}
