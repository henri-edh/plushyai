# Better Auth Integration - Requirements

## Overview

Replace all mock user data throughout the Plushify application with real Better Auth authentication. The application currently has Better Auth partially configured but uses mock data in all user-facing components and pages.

## Current State

### What's Already Configured
- ✅ Better Auth server instance (`src/lib/auth.ts`) with Drizzle adapter
- ✅ Better Auth client instance (`src/lib/auth-client.ts`) with React hooks
- ✅ Google OAuth provider configured
- ✅ Database schema with user, session, account, verification tables
- ✅ Environment variables set up for Better Auth

### What's Missing
- ❌ Better Auth API route handler (`/api/auth/[...all]`)
- ❌ Credits field in user database schema
- ❌ Auth components (sign-in, sign-out buttons)
- ❌ Real authentication checks in protected pages
- ❌ Sign-in page

## Objectives

### Primary Goals
1. Create the Better Auth API route handler to enable authentication
2. Update database schema to support credits
3. Replace all mock user data with real session data
4. Implement proper authentication flow (sign-in, sign-out)
5. Protect pages that require authentication

### Secondary Goals
1. Ensure TypeScript types are correct throughout
2. Maintain existing UI/UX design
3. Preserve all existing features while switching to real data
4. Follow Better Auth best practices for Next.js 15

## Files Using Mock Data

The following files currently use mock data and need to be updated:

1. **Navigation Components**
   - `src/components/site-header.tsx` - Header with user avatar, credits badge
   - `src/components/navigation/mobile-menu.tsx` - Mobile navigation menu

2. **Protected Pages**
   - `src/app/dashboard/page.tsx` - User dashboard with stats
   - `src/app/profile/page.tsx` - User profile page
   - `src/app/generate/page.tsx` - Plushie generator (uses credits)
   - `src/app/gallery/page.tsx` - User's generated plushies (will use mock data for now)

3. **Mock Data Source**
   - `src/lib/mock-data.ts` - Contains mock user and generations (keep for testing)

## Technical Requirements

### Authentication Flow
- Users must sign in via Google OAuth
- Session must persist across page navigation
- Users must be redirected to sign-in page when accessing protected routes
- Sign-out must clear session and redirect to home

### Data Requirements
- User credits must be stored in database
- User credits must be displayed in navigation
- Profile page must show real user information
- Dashboard must show real user data

### Security Requirements
- Protected pages must validate session server-side
- Credit deductions must happen server-side only
- No sensitive operations on client-side
- Follow Better Auth security best practices

### Database Schema Requirements
- Add `credits` field to user table (integer, default 0)

## Success Criteria

### Functional Requirements
- ✅ Users can sign in with Google OAuth
- ✅ Users can sign out successfully
- ✅ Protected pages redirect unauthenticated users to sign-in
- ✅ Navigation displays real user data (name, email, avatar, credits)
- ✅ Dashboard shows real user statistics
- ✅ Profile page displays real user information
- ✅ Credits are loaded from database

### Technical Requirements
- ✅ No TypeScript errors
- ✅ No ESLint errors
- ✅ Better Auth API route responds correctly
- ✅ Database migrations run successfully
- ✅ Session persists across page reloads

## Known Issues & Corrections

### Critical Corrections Needed

1. **API Route Handler**
   - Must use `toNextJsHandler(auth.handler)` not `toNextJsHandler(auth)`
   - Missing `.handler` property will cause authentication to fail

2. **Sign-In Implementation**
   - Must NOT include `callbackURL` parameter
   - Correct: `signIn.social({ provider: "google" })`
   - Incorrect: `signIn.social({ provider: "google", callbackURL: "/dashboard" })`

3. **Protected Pages Pattern**
   - Must use Server Component with `auth.api.getSession({ headers: await headers() })`
   - Must redirect with `redirect("/sign-in")` if no session
   - Client-side checks are NOT secure

4. **Navigation Components**
   - Must use Client Component with `useSession()` hook
   - Must handle loading state with `isPending`
   - Must conditionally render sign-in vs user menu

5. **Credits Field**
   - Must be added to database schema
   - Must be configured in Better Auth `additionalFields`
   - Required for TypeScript to recognize `session.user.credits`

## Dependencies

- better-auth v1.3.34 (already installed)
- @better-auth/react (via better-auth)
- drizzle-orm (already installed)
- PostgreSQL database (already configured)

## Environment Variables Required

All already configured:
- `POSTGRES_URL`
- `BETTER_AUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXT_PUBLIC_APP_URL`

## Out of Scope

- Email/password authentication (only Google OAuth)
- Two-factor authentication
- Email verification flow (schema exists but not implemented)
- User registration form (handled by Google OAuth)
- Password reset functionality
- Additional OAuth providers (GitHub, etc.)
- Unit tests and E2E tests
- Role-based access control
- Account deletion functionality
