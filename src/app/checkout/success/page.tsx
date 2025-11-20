import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { CheckoutSuccessClient } from "@/components/checkout/checkout-success-client";

interface CheckoutSuccessPageProps {
  searchParams: Promise<{
    checkout_id?: string;
  }>;
}

export default async function CheckoutSuccessPage({
  searchParams,
}: CheckoutSuccessPageProps) {
  // Check authentication
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/sign-in");
  }

  const params = await searchParams;
  const checkoutId = params.checkout_id;

  return <CheckoutSuccessClient checkoutId={checkoutId} />;
}
