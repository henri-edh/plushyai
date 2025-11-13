"use client";

import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

interface SignInButtonProps {
  className?: string;
}

export function SignInButton({ className }: SignInButtonProps = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      setError(null); // Clear any previous errors
      await signIn.social({
        provider: "google",
        callbackURL: "/dashboard", // Explicitly set callback URL
      });
      // Note: If successful, user will be redirected, so loading state persists
    } catch (error) {
      console.error("Sign in error:", error);

      // Show error to user
      const errorMessage = error instanceof Error
        ? error.message
        : "Failed to sign in with Google. Please try again.";
      setError(errorMessage);

      // Only reset loading on error (successful sign-in redirects)
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Button onClick={handleSignIn} disabled={isLoading} className={className}>
        {isLoading ? "Signing in..." : "Sign In"}
      </Button>
      {error && (
        <p className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
