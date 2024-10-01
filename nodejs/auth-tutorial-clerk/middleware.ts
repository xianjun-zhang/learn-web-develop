import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const publicRoutes = ["/sign-in*", "/sign-up*", "/", "/public*", "/docs*"];

export default clerkMiddleware((auth, req) => {
  // Protect all routes except sign-in and sign-up
  const isPublicPath = publicRoutes.some((path) => 
    req.nextUrl.pathname.match(new RegExp(`^${path}$`.replace('*', '.*')))
  );

  if (!isPublicPath) {
    auth().protect();
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};