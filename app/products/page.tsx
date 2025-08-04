"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Interior Doors", "Exterior Doors", "Sliding Doors", "Custom"]

  const products = [
    {
      name: "Classic Oak",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Classic+Oak",
      badge: "Best Seller",
    },
    {
      name: "Elegant Walnut",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Elegant+Walnut",
      badge: "Premium",
    },
    {
      name: "Mahogany Royal",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Mahogany+Royal",
      badge: "Luxury",
    },
    {
      name: "Cherry Blossom",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Cherry+Blossom",
      badge: "Popular",
    },
    {
      name: "Teak Elegance",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Teak+Elegance",
      badge: "Modern",
    },
    {
      name: "Rustic Barn",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Rustic+Barn",
      badge: "Rustic",
    },
    {
      name: "Premium Mahogany",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Premium+Mahogany",
      badge: "Luxury",
    },
    {
      name: "Glass & Wood",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Glass+Wood",
      badge: "Designer",
    },
    {
      name: "Traditional Panel",
      category: "Interior Doors",
      image: "/placeholder.svg?height=400&width=300&text=Traditional+Panel",
      badge: "Classic",
    },
    {
      name: "Artisan Custom",
      category: "Custom",
      image: "/placeholder.svg?height=400&width=300&text=Artisan+Custom",
      badge: "Handcrafted",
    },
    {
      name: "Space Saver",
      category: "Sliding Doors",
      image: "/placeholder.svg?height=400&width=300&text=Space+Saver",
      badge: "Compact",
    },
    {
      name: "French Elegance",
      category: "Exterior Doors",
      image: "/placeholder.svg?height=400&width=300&text=French+Elegance",
      badge: "Elegant",
    },
  ]

  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-cream">
      {/* Enhanced Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl font-bold bg-gradient-to-r from-dark-brown to-coffee bg-clip-text text-transparent mb-8 animate-zoom-in-scale animate-text-glow">
              Our Collections
            </h1>
            <p className="text-xl text-coffee max-w-4xl mx-auto leading-relaxed animate-float-up animate-delay-300">
              Explore our complete range of handcrafted doors, from timeless classics to contemporary elegance
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Filter Menu */}
      <section className="bg-white border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all-smooth hover-zoom-glow animate-bounce-in animate-delay-${index * 100} ${
                  selectedCategory === category
                    ? "bg-warm-brown hover:bg-chocolate text-white rounded-2xl px-6 py-2 animate-glow-pulse"
                    : "border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white rounded-2xl px-6 py-2 bg-white hover-text-glow"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all-smooth bg-white rounded-3xl overflow-hidden border-0 shadow-lg hover-zoom-glow animate-zoom-in-rotate"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-warm-brown to-chocolate text-white border-0 rounded-full px-3 py-1 animate-glow-pulse hover-rotate">
                    {product.badge}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-dark-brown mb-2 hover-text-glow">
                    {product.name}
                  </h3>
                  <p className="text-coffee text-sm mb-4">{product.category}</p>
                  <Button
                    variant="outline"
                    className="w-full border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white bg-white rounded-xl transition-all-smooth hover-zoom-glow"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-coffee text-lg animate-float-up">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-dark-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 animate-zoom-in-scale animate-text-glow">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-cream mb-8 animate-float-up animate-delay-200">
            We specialize in custom designs tailored to your exact specifications and style preferences
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-warm-brown to-chocolate hover:from-chocolate hover:to-warm-brown text-white rounded-2xl px-8 py-3 hover-zoom-glow animate-glow-pulse animate-bounce-in animate-delay-400"
          >
            Request Custom Quote
          </Button>
        </div>
      </section>
    </div>
  )
}
