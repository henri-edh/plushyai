"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Shield,
  FileText,
  Cookie,
  DollarSign,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
    icon: Shield,
  },
  {
    title: "Terms of Service",
    href: "/legal/terms",
    icon: FileText,
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
    icon: Cookie,
  },
  {
    title: "Refund Policy",
    href: "/legal/refund",
    icon: DollarSign,
  },
];

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-24 space-y-1">
      <h3 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        Legal
      </h3>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent hover:text-accent-foreground",
              isActive
                ? "bg-primary text-primary-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
