import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AdminPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Redirect to sign-in if not authenticated
  if (!session) {
    redirect("/sign-in");
  }

  // Check if user has admin role
  if (session.user.platformRole !== "admin") {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">
          Platform administration and management
        </p>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome, Administrator</CardTitle>
              <CardDescription>
                You have access to the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a placeholder admin page. Administrative features will
                be added here in future updates.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">Your Info:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Name: {session.user.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Email: {session.user.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  Role: {session.user.platformRole}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Admin Features</CardTitle>
              <CardDescription>Coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• User management</li>
                <li>• System analytics</li>
                <li>• Configuration settings</li>
                <li>• Content moderation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
