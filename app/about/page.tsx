import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Hammer, Heart } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rachel Kim",
      title: "Co-Founder & Design Director",
      image: "/placeholder.svg?height=300&width=300&text=Rachel+Kim",
      bio: "With over 20 years in architectural design, Rachel brings artistic vision and contemporary aesthetics to every project.",
    },
    {
      name: "Kevin Roberts",
      title: "Co-Founder & Master Craftsman",
      image: "/placeholder.svg?height=300&width=300&text=Kevin+Roberts",
      bio: "Kevin's expertise in traditional woodworking techniques ensures every door meets the highest standards of quality and craftsmanship.",
    },
    {
      name: "Marcus Rodriguez",
      title: "Production Manager",
      image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
      bio: "Marcus oversees our production process, ensuring every door meets our exacting standards for quality and precision.",
    },
    {
      name: "Emily Thompson",
      title: "Customer Relations",
      image: "/placeholder.svg?height=300&width=300&text=Emily+Thompson",
      bio: "Emily works closely with clients to understand their vision and guide them through the custom door creation process.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl font-bold bg-gradient-to-r from-dark-brown to-coffee bg-clip-text text-transparent mb-8 animate-fade-in-up">
              About RK Doors
            </h1>
            <p className="text-xl text-coffee max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Crafting elegant door solutions with traditional craftsmanship, premium materials, and timeless design
              since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="/placeholder.svg?height=600&width=800&text=Our+Workshop"
                alt="Our workshop"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="font-heading text-5xl font-bold text-dark-brown mb-8 animate-fade-in-up">Our Story</h2>
              <div className="space-y-6 text-coffee text-lg leading-relaxed">
                <p className="animate-fade-in-up animate-delay-200">
                  Founded in 2010 by Rachel Kim and Kevin Roberts, RK Doors emerged from a shared passion for combining
                  traditional craftsmanship with contemporary design. We saw an opportunity to create doors that are not
                  just functional, but true works of art.
                </p>
                <p className="animate-fade-in-up animate-delay-300">
                  What began as a small workshop has evolved into a premier manufacturer of handcrafted doors. We
                  believe that every door tells a story and should reflect the unique character of the space it graces.
                </p>
                <p className="animate-fade-in-up animate-delay-400">
                  Today, we continue to honor time-tested techniques while embracing innovative design, creating doors
                  that embody both timeless elegance and modern sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl font-bold text-dark-brown mb-6">Our Values</h2>
            <p className="text-xl text-coffee max-w-3xl mx-auto leading-relaxed">
              These core principles guide everything we do, from design conception to final installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", delay: "100" },
              { icon: Hammer, title: "Craftsmanship", delay: "200" },
              { icon: Heart, title: "Sustainability", delay: "300" },
              { icon: Users, title: "Partnership", delay: "400" },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift animate-zoom-in animate-delay-${item.delay}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-warm-brown to-chocolate rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-glow">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark-brown mb-4">{item.title}</h3>
                  <p className="text-coffee leading-relaxed">
                    We never compromise on quality, ensuring every door meets the highest standards of craftsmanship and
                    beauty.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl font-bold text-dark-brown mb-6">Meet the Team</h2>
            <p className="text-xl text-coffee max-w-3xl mx-auto leading-relaxed">
              The passionate artisans and designers who bring expertise and creativity to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift animate-zoom-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg hover:animate-pulse-glow transition-all-smooth"
                  />
                  <h3 className="font-heading text-xl font-bold text-dark-brown mb-2">{member.name}</h3>
                  <p className="text-warm-brown font-semibold mb-4">{member.title}</p>
                  <p className="text-coffee text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-5xl font-bold mb-8">Ready to Work with Us?</h2>
          <p className="text-xl text-cream mb-10 leading-relaxed">
            Let's discuss your project and create something extraordinary together
          </p>
          <Button className="bg-gradient-to-r from-warm-brown to-chocolate hover:from-chocolate hover:to-warm-brown text-white px-10 py-4 rounded-2xl font-medium transition-all duration-300 text-lg shadow-xl hover:shadow-2xl">
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  )
}
