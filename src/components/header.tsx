"use client";
import Link from "next/link";
import { Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 grid place-items-center">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-lg"
              >
                <Package2 className="h-6 w-6" />
                <span className="">MediCare Pharmacy</span>
              </Link>
              <Link href="/" className="block py-2 text-lg font-medium">
                Home
              </Link>
              <Link href="/products" className="block py-2 text-lg font-medium">
                Products
              </Link>
              <Link
                href="/prescriptions"
                className="block py-2 text-lg font-medium"
              >
                Prescriptions
              </Link>
              <Link href="/about" className="block py-2 text-lg font-medium">
                About Us
              </Link>
              <Link href="/contact" className="block py-2 text-lg font-medium">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 font-semibold mr-6">
          <Package2 className="h-6 w-6" />
          <span className="hidden md:inline-block">MediCare Pharmacy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="font-medium transition-colors hover:text-foreground/80"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="font-medium transition-colors hover:text-foreground/80"
          >
            Products
          </Link>
          <Link
            href="/prescriptions"
            className="font-medium transition-colors hover:text-foreground/80"
          >
            Prescriptions
          </Link>
          <Link
            href="/about"
            className="font-medium transition-colors hover:text-foreground/80"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="font-medium transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center ml-auto">
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
