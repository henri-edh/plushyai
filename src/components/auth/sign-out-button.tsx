"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export function SignOutButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      setError(null); // Clear any previous errors
      await signOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);

      // Show error to user
      const errorMessage = error instanceof Error
        ? error.message
        : "Failed to sign out. Please try again.";
      setError(errorMessage);

      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleSignOut} disabled={isLoading} variant="ghost">
        {isLoading ? "Signing out..." : "Sign Out"}
      </Button>
      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
