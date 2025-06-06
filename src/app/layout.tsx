

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import "~/styles/globals.css";    
import { TRPCReactProvider } from "~/trpc/react";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
          <html lang="en" className={`${geist.variable}`}>
            <body>
              <TRPCReactProvider>
                <header className="flex justify-end items-center p-4 gap-4 h-16">
                  <SignedOut>
                    <SignInButton />
                    <SignUpButton />
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </header>
                {children}
              </TRPCReactProvider>
            </body>

    </html>
    </ClerkProvider>

  );
}
