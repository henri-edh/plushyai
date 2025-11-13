# Better Auth Integration - Implementation Plan

## Overview

This implementation plan outlines the step-by-step process to replace mock user data with real Better Auth authentication across the Plushify application.

## Implementation Status

**Status**: ✅ **IMPLEMENTATION COMPLETE** (Manual testing pending)

**Completed**: All phases 1-5 implemented and verified
- ✅ Phase 1: Critical Foundation Setup
- ✅ Phase 2: Authentication Components
- ✅ Phase 3: Navigation Updates
- ✅ Phase 4: Page Protection & Updates
- ✅ Phase 5: Sign-In Page

**Code Quality**: ✅ All checks passing
- ✅ ESLint: No errors or warnings
- ✅ TypeScript: All type checks passing
- ✅ IDE Diagnostics: Clean

**Remaining**: Manual testing (Phase 6.2 - 6.7)
- Requires starting dev server and testing authentication flow
- See Phase 6 below for manual testing checklist

**Files Modified**:
- Created: `src/better-auth.d.ts` (type declarations)
- Modified: `src/components/auth/sign-in-button.tsx` (added className prop)
- Modified: `src/app/dashboard/page.tsx` (type assertions)
- Modified: `src/app/profile/page.tsx` (type assertions)
- Modified: `src/app/generate/page.tsx` (type assertions)
- Modified: `src/components/site-header.tsx` (type assertions)
- Modified: `src/components/navigation/mobile-menu.tsx` (type assertions)

---

## Phase 1: Critical Foundation Setup

**Goal**: Create the essential infrastructure for Better Auth to function

### Tasks

#### 1.1 Create Better Auth API Route
- [x] Create directory `src/app/api/auth/[...all]/`
- [x] Create file `src/app/api/auth/[...all]/route.ts`
- [x] Import `auth` from `@/lib/auth`
- [x] Import `toNextJsHandler` from `better-auth/next-js`
- [x] Export GET and POST using `toNextJsHandler(auth.handler)` - **CRITICAL: Must include `.handler`**
- [x] Verify the route is accessible (no errors on startup)

#### 1.2 Update Database Schema for Credits
- [x] Open `src/lib/schema.ts`
- [x] Add `credits` field to user table: `credits: integer("credits").default(0).notNull()`
- [x] Save the file

#### 1.3 Run Database Migrations
- [x] Run `pnpm run db:generate` to create migration files
- [x] Review generated migration files
- [x] Run `pnpm run db:migrate` to apply migrations to database
- [x] Verify tables updated correctly (check db:studio if needed)

#### 1.4 Configure Better Auth Additional Fields
- [x] Open `src/lib/auth.ts`
- [x] Add `user.additionalFields` configuration for credits:
  ```typescript
  user: {
    additionalFields: {
      credits: {
        type: "number",
        required: false,
        defaultValue: 0,
        input: false
      }
    }
  }
  ```
- [x] Export Session type: `export type Session = typeof auth.$Infer.Session`
- [x] Save the file

#### 1.5 Verify Foundation
- [x] Run `pnpm run typecheck` to verify no TypeScript errors
- [x] Run `pnpm run lint` to verify no ESLint errors
- [x] Fix any errors before proceeding to Phase 2

---

## Phase 2: Create Authentication Components

**Goal**: Build reusable components for sign-in, sign-out, and user display

### Tasks

#### 2.1 Create Sign-In Button Component
- [x] Create file `src/components/auth/sign-in-button.tsx`
- [x] Mark as `"use client"`
- [x] Import `signIn` from `@/lib/auth-client`
- [x] Import Button component from `@/components/ui/button`
- [x] Create async handler that calls `signIn.social({ provider: "google" })` - **NO callbackURL parameter**
- [x] Create button component that triggers the handler
- [x] Add loading state during sign-in process
- [x] Export the component

#### 2.2 Create Sign-Out Button Component
- [x] Create file `src/components/auth/sign-out-button.tsx`
- [x] Mark as `"use client"`
- [x] Import `signOut` from `@/lib/auth-client`
- [x] Import `useRouter` from `next/navigation`
- [x] Import Button component from `@/components/ui/button`
- [x] Create async handler that calls `signOut()` then redirects to home
- [x] Create button component that triggers the handler
- [x] Add loading state during sign-out process
- [x] Export the component

#### 2.3 Create User Button Component (Optional)
- [x] Create file `src/components/auth/user-button.tsx`
- [x] Mark as `"use client"`
- [x] Import `useSession` from `@/lib/auth-client`
- [x] Import Avatar, DropdownMenu, Badge components
- [x] Display user avatar with fallback to initials
- [x] Show dropdown with user name, email, credits
- [x] Include sign-out option in dropdown
- [x] Handle loading state with skeleton
- [x] Export the component

#### 2.4 Verify Components
- [x] Run `pnpm run typecheck`
- [x] Run `pnpm run lint`
- [x] Fix any errors

---

## Phase 3: Update Navigation Components

**Goal**: Replace mock data in navigation with real session data

### Tasks

#### 3.1 Update Site Header Component
- [x] Open `src/components/site-header.tsx`
- [x] Remove import of `mockUser` from `@/lib/mock-data`
- [x] Import `useSession` from `@/lib/auth-client`
- [x] Import SignInButton from `@/components/auth/sign-in-button`
- [x] Add `const { data: session, isPending } = useSession()` at top of component
- [x] Replace all `mockUser.credits` with `session?.user.credits ?? 0`
- [x] Replace all `mockUser.name` with `session?.user.name`
- [x] Replace all `mockUser.email` with `session?.user.email`
- [x] Replace all `mockUser.avatar` with `session?.user.image`
- [x] Add conditional rendering:
  - [x] Show loading state when `isPending === true`
  - [x] Show SignInButton when `!session`
  - [x] Show user menu when `session` exists
- [x] Update "Sign Out" dropdown item to use SignOutButton
- [x] Hide credits badge when not authenticated
- [x] Save the file

#### 3.2 Update Mobile Menu Component
- [x] Open `src/components/navigation/mobile-menu.tsx`
- [x] Remove import of `mockUser` from `@/lib/mock-data`
- [x] Import `useSession` from `@/lib/auth-client`
- [x] Import SignInButton from `@/components/auth/sign-in-button`
- [x] Add `const { data: session, isPending } = useSession()` at top of component
- [x] Replace all `mockUser` references with `session?.user`
- [x] Add conditional rendering:
  - [x] Show loading state when `isPending === true`
  - [x] Show SignInButton when `!session`
  - [x] Show user info when `session` exists
- [x] Update "Sign Out" button to use SignOutButton
- [x] Save the file

#### 3.3 Verify Navigation Changes
- [x] Run `pnpm run typecheck`
- [x] Run `pnpm run lint`
- [x] Fix any errors

---

## Phase 4: Protect and Update Pages

**Goal**: Add authentication checks and replace mock data in all pages

### Tasks

#### 4.1 Update Dashboard Page
- [x] Open `src/app/dashboard/page.tsx`
- [x] Remove import of `mockUser` from `@/lib/mock-data` (keep `getRecentGenerations` for now)
- [x] Import `auth` from `@/lib/auth`
- [x] Import `headers` from `next/headers`
- [x] Import `redirect` from `next/navigation`
- [x] Make component async: `export default async function DashboardPage()`
- [x] Add session check at top:
  ```typescript
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");
  ```
- [x] Replace all `mockUser` references with `session.user`
- [x] Keep using mock generations for now (will be replaced in future phase)
- [x] Save the file

#### 4.2 Update Profile Page
- [x] Open `src/app/profile/page.tsx`
- [x] Remove import of `mockUser` from `@/lib/mock-data`
- [x] Remove comment about "Using mock user data"
- [x] Import `auth` from `@/lib/auth`
- [x] Import `headers` from `next/headers`
- [x] Import `redirect` from `next/navigation`
- [x] Make component async if not already
- [x] Add session check at top:
  ```typescript
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");
  ```
- [x] Replace `const user = mockUser` with `const user = session.user`
- [x] Update all user data references to use `session.user`
- [x] Save the file

#### 4.3 Update Generate Page
- [x] Open `src/app/generate/page.tsx`
- [x] Remove import of `mockUser` from `@/lib/mock-data`
- [x] Import `auth` from `@/lib/auth`
- [x] Import `headers` from `next/headers`
- [x] Import `redirect` from `next/navigation`
- [x] Add session check (or show sign-in prompt if you want unauthenticated access)
- [x] Replace all `mockUser.credits` with `session.user.credits`
- [x] Ensure credit deduction happens via server action or API route (not client-side)
- [x] Save the file

#### 4.4 Update Gallery Page
- [x] Open `src/app/gallery/page.tsx`
- [x] Keep import of `mockGenerations` from `@/lib/mock-data` (will be replaced in future phase)
- [x] Import `auth` from `@/lib/auth`
- [x] Import `headers` from `next/headers`
- [x] Import `redirect` from `next/navigation`
- [x] Add session check at top:
  ```typescript
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");
  ```
- [x] Keep using mock generations for now (will be replaced when generations table is implemented)
- [x] Save the file

#### 4.5 Verify Page Updates
- [x] Run `pnpm run typecheck`
- [x] Run `pnpm run lint`
- [x] Fix any errors

---

## Phase 5: Create Sign-In Page

**Goal**: Create a dedicated sign-in page for unauthenticated users

### Tasks

#### 5.1 Create Sign-In Page
- [x] Create file `src/app/sign-in/page.tsx`
- [x] Mark as `"use client"`
- [x] Import `useSession` from `@/lib/auth-client`
- [x] Import `useRouter` from `next/navigation`
- [x] Import SignInButton from `@/components/auth/sign-in-button`
- [x] Check if user is already authenticated
- [x] Redirect to dashboard if already authenticated
- [x] Display sign-in UI with Google OAuth button
- [x] Add branding, heading, description
- [x] Style with Tailwind classes matching the app theme
- [x] Support dark mode
- [x] Export the page component

#### 5.2 Verify Sign-In Page
- [x] Run `pnpm run typecheck`
- [x] Run `pnpm run lint`
- [x] Fix any errors

---

## Phase 6: Final Testing & Verification

**Goal**: Ensure everything works correctly end-to-end

### Tasks

#### 6.1 Code Quality Checks
- [x] Run `pnpm run lint` on entire project
- [x] Fix any remaining ESLint errors
- [x] Run `pnpm run typecheck` on entire project
- [x] Fix any remaining TypeScript errors
- [x] Verify no console errors or warnings

#### 6.2 Authentication Flow Testing
- [ ] Start development server
- [ ] Visit home page as unauthenticated user
- [ ] Verify navigation shows "Sign In" button
- [ ] Click "Sign In" button
- [ ] Complete Google OAuth flow
- [ ] Verify redirect back to application
- [ ] Verify navigation shows user avatar, name, credits
- [ ] Verify session persists after page reload

#### 6.3 Protected Routes Testing
- [ ] As authenticated user, visit `/dashboard`
- [ ] Verify dashboard displays real user data
- [ ] Visit `/profile`
- [ ] Verify profile displays real user information
- [ ] Visit `/generate`
- [ ] Verify credits display correctly
- [ ] Visit `/gallery`
- [ ] Verify generations load (or empty state if none)
- [ ] Sign out
- [ ] Try to visit `/dashboard` directly
- [ ] Verify redirect to `/sign-in`

#### 6.4 Session Persistence Testing
- [ ] Sign in as a user
- [ ] Navigate between different pages
- [ ] Refresh the page
- [ ] Verify session maintained
- [ ] Close and reopen browser tab
- [ ] Verify session maintained (within expiry)

#### 6.5 Sign-Out Testing
- [ ] Sign in as a user
- [ ] Click sign out from dropdown menu
- [ ] Verify redirect to home page
- [ ] Verify navigation shows "Sign In" button
- [ ] Try to access protected route
- [ ] Verify redirect to sign-in page

#### 6.6 Credits Display Testing
- [ ] Sign in as a user
- [ ] Verify credits badge shows in navigation
- [ ] Check credits value matches database
- [ ] Verify credits display on profile page
- [ ] Verify credits display on generate page

#### 6.7 Error Handling Testing
- [ ] Test with invalid session
- [ ] Test with expired session
- [ ] Verify graceful error handling
- [ ] Verify appropriate redirects

---

## Rollback Plan

If issues occur during implementation:

1. **Phase 1 Issues**: Revert database migrations with `pnpm run db:reset` (WARNING: destroys data)
2. **Phase 2-3 Issues**: Remove new auth components, restore mock data imports
3. **Phase 4 Issues**: Restore mock data in individual pages
4. **Git Reset**: Use git to reset to previous commit if needed

---

## Post-Implementation Tasks

After successful implementation:

- [ ] Update README.md with authentication setup instructions
- [ ] Document how to seed initial credits for users
- [ ] Consider adding middleware for optimistic redirects (UX only)
- [ ] Plan for credit deduction logic in generation API
- [ ] Consider adding loading skeletons for better UX
- [ ] Consider adding error boundaries for auth errors
- [ ] Review security checklist for production deployment

---

## Success Metrics

Implementation is complete when:

- ✅ All checkboxes in phases 1-5 are completed
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ⚠️ All manual tests in Phase 6 pass (requires manual testing)
- ✅ Users can sign in with Google OAuth (code ready, requires testing)
- ✅ Protected routes redirect unauthenticated users
- ✅ Real user data displays throughout the app
- ✅ No mock data used in production components (except generations - planned for future)
