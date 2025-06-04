// src/components/dashboard-header.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bell, Search, User } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

export default function DashboardHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
              E
            </div>
            <span className="text-lg font-semibold">EduLearn</span>
          </Link>
          {isHome && (
            <div className="hidden md:flex items-center gap-1">
              <Input placeholder="Search courses..." className="w-[200px] lg:w-[300px]" />
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
          )}
        </div>
        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/my-courses">My Courses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}