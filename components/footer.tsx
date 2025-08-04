import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-dark-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-warm-brown to-chocolate rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">RK</span>
              </div>
              <span className="font-heading text-2xl font-semibold text-white">RK Doors</span>
            </div>
            <p className="text-cream text-sm leading-relaxed">
              Elegant door solutions with exceptional craftsmanship and timeless design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-cream hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-cream text-sm">
              <p>
                123 Craftsman Lane
                <br />
                Woodville, CA 90210
              </p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@rkdoors.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-cream hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-cream hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-cream hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-coffee mt-8 pt-8 text-center">
          <p className="text-cream text-sm">© 2024 RK Doors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
