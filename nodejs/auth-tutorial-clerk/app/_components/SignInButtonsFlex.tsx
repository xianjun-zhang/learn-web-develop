'use client'

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

// Define an array of path patterns to exclude from showing the sign-in button
// These patterns use wildcards (*) to match multiple paths
// For example, "/sign-in*" will match "/sign-in", "/sign-in/email", etc.
const excludePaths = ["/sign-in*", "/sign-up*"];

function isPathExcluded(pathPattern: string, pathname: string): boolean {
  // Replace all '*' with '.*' to create a proper regex pattern
  const regexPattern = `^${pathPattern.replace(/\*/g, '.*')}$`;
  const regex = new RegExp(regexPattern);
  return regex.test(pathname);
}


export default function SignInButtonFlex({ mode = "modal" }: { mode?: "modal" | "redirect" }) {
  const pathname = usePathname()

  // Check if the current pathname matches any of the excluded paths defined in excludePaths
  if (excludePaths.some(pathPattern => isPathExcluded(pathPattern, pathname))) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <SignedOut>
        <SignInButton mode={mode}>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
              userButtonAvatarBox: "w-10 h-10"
            }
          }}
        />
      </SignedIn>
    </div>
  )
}
