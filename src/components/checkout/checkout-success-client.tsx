"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { useCredits } from "@/hooks/use-credits";
import { getPurchaseByCheckout } from "@/app/actions/get-purchase-by-checkout";
import { getSession } from "@/lib/auth-client";

interface CheckoutSuccessClientProps {
  checkoutId?: string;
}

export function CheckoutSuccessClient({
  checkoutId,
}: CheckoutSuccessClientProps) {
  const router = useRouter();
  const { credits, isLoading } = useCredits({ pollingInterval: 3000 }); // Poll every 3 seconds on this page
  const [creditsUpdated, setCreditsUpdated] = useState(false);
  const [addedCredits, setAddedCredits] = useState<number | null>(null);
  const [initialCredits, setInitialCredits] = useState<number | null>(null);

  // Fetch purchase data to get the correct added credits amount
  useEffect(() => {
    if (!checkoutId) return;

    async function fetchPurchase() {
      if (!checkoutId) return; // Type guard for TypeScript
      const result = await getPurchaseByCheckout(checkoutId);
      if (result.success && result.data) {
        setAddedCredits(result.data.credits);
      }
    }

    fetchPurchase();
  }, [checkoutId]);

  // Track initial credits on mount
  useEffect(() => {
    if (!isLoading && initialCredits === null) {
      setInitialCredits(credits);
    }
  }, [credits, isLoading, initialCredits]);

  // Detect when credits have been added
  useEffect(() => {
    if (
      !isLoading &&
      initialCredits !== null &&
      addedCredits !== null &&
      !creditsUpdated
    ) {
      // Check if credits have increased by at least the expected amount
      if (credits >= initialCredits + addedCredits) {
        setCreditsUpdated(true);
        // Refresh session to update header credits
        getSession().then(() => {
          router.refresh();
        });
      }
    }
  }, [credits, isLoading, initialCredits, addedCredits, creditsUpdated, router]);

  return (
    <main className="flex-1 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 md:p-12">
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative bg-primary/10 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Payment Successful!
            </h1>
            {creditsUpdated ? (
              <p className="text-lg text-primary font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5" />
                {addedCredits} credits added to your account!
              </p>
            ) : (
              <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin" />
                {addedCredits
                  ? `Adding ${addedCredits} credits to your account...`
                  : "Adding credits to your account..."}
              </p>
            )}
            {checkoutId && (
              <p className="text-sm text-muted-foreground">
                Order ID: {checkoutId}
              </p>
            )}
          </div>

          {/* Info Box */}
          <Card className="bg-primary/5 border-primary/20 p-6">
            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-left space-y-2">
                <h3 className="font-semibold">What happens next?</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    • {creditsUpdated ? "Your credits are ready to use!" : "Your credits will appear in your account shortly"}
                  </li>
                  <li>• You can start creating plushies right away</li>
                  <li>• Check your email for the receipt</li>
                  <li>
                    • Credits never expire, so use them whenever you want!
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="flex-1">
              <Link href="/generate">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>

          {/* Footer Note */}
          {!creditsUpdated && (
            <p className="text-xs text-muted-foreground pt-4">
              If your credits don&apos;t appear within a few minutes, please
              contact our support team.
            </p>
          )}
        </div>
      </Card>
    </main>
  );
}
