import Link from "next/link";
import { DocsNav } from "@/components/docs/docs-nav";
import { DocsSearch } from "@/components/docs/docs-search";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  HelpCircle,
  Lightbulb,
  PlayCircle,
  Wrench,
  MessageCircle,
} from "lucide-react";

const docSections = [
  {
    title: "Getting Started",
    description: "Learn the basics and create your first plushie in minutes",
    href: "/docs/getting-started",
    icon: PlayCircle,
    color: "text-blue-500",
  },
  {
    title: "How to Use",
    description: "Comprehensive guide to all Plushify features and capabilities",
    href: "/docs/how-to-use",
    icon: BookOpen,
    color: "text-purple-500",
  },
  {
    title: "FAQ",
    description: "Quick answers to the most frequently asked questions",
    href: "/docs/faq",
    icon: HelpCircle,
    color: "text-green-500",
  },
  {
    title: "Tips & Best Practices",
    description: "Pro tips for getting the best results from your generations",
    href: "/docs/tips",
    icon: Lightbulb,
    color: "text-yellow-500",
  },
  {
    title: "Troubleshooting",
    description: "Solutions to common issues and technical problems",
    href: "/docs/troubleshooting",
    icon: Wrench,
    color: "text-red-500",
  },
  {
    title: "Contact Support",
    description: "Can't find what you're looking for? Get in touch with us",
    href: "#contact",
    icon: MessageCircle,
    color: "text-pink-500",
  },
];

export default function DocsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Navigation */}
        <aside className="md:w-64 lg:w-72">
          <DocsNav />
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-8">
            <Badge className="mb-4">Documentation Hub</Badge>
            <h1 className="mb-4 text-4xl font-bold tracking-tight">
              Documentation Overview
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about creating adorable plushies with AI.
              Choose a topic below to get started.
            </p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <DocsSearch />
          </div>

          {/* Navigation Cards */}
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-semibold">Browse Documentation</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {docSections.map((section) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group transition-transform hover:scale-105"
                  >
                    <Card className="h-full border-2 transition-colors hover:border-primary">
                      <CardHeader>
                        <div className="mb-4 flex items-center gap-3">
                          <div className="rounded-lg bg-muted p-2">
                            <Icon className={`h-6 w-6 ${section.color}`} />
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          {section.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {section.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="rounded-lg border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center">
            <h3 className="mb-3 text-2xl font-bold">
              Need Help Getting Started?
            </h3>
            <p className="mb-6 text-muted-foreground">
              Check out these popular resources to get up and running quickly
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quick Start Guide
              </Link>
              <Link
                href="/docs/faq"
                className="inline-flex items-center rounded-full border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                View FAQ
              </Link>
              <Link
                href="/docs/tips"
                className="inline-flex items-center rounded-full border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent"
              >
                Best Practices
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
