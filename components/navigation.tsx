"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-light-gray/50 sticky top-0 z-50 modern-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Modern Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 gradient-warm rounded-2xl flex items-center justify-center modern-shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">RK</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-warm-brown rounded-full flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <div>
              <span className="font-heading text-2xl font-bold text-deep-black">RK Doors</span>
              <div className="text-xs text-charcoal/60 font-medium">Premium Craftsmanship</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-warm-brown relative group ${
                  pathname === item.href ? "text-warm-brown" : "text-charcoal"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-brown transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
            <button className="btn-modern text-sm px-6 py-3">Request Quote</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-12 h-12 rounded-xl hover:bg-warm-brown/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-light-gray/50 rounded-b-2xl modern-shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-4 py-3 text-base font-medium transition-all duration-300 hover:text-warm-brown hover:bg-warm-brown/5 rounded-xl ${
                    pathname === item.href ? "text-warm-brown bg-warm-brown/10" : "text-charcoal"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <button className="btn-modern w-full text-sm px-6 py-3">Request Quote</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
