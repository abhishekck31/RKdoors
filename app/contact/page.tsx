"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    clientType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-heading text-6xl font-bold bg-gradient-to-r from-dark-brown to-coffee bg-clip-text text-transparent mb-8 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-xl text-coffee max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Ready to start your custom door project? Let's discuss how we can bring your elegant vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-4xl font-bold text-dark-brown mb-6">Contact Information</h2>
                <p className="text-coffee mb-8 text-lg leading-relaxed">
                  Reach out to us through any of these channels. We're here to help with your door project from concept
                  to completion.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Address", delay: "100" },
                  { icon: Phone, title: "Phone", delay: "200" },
                  { icon: Mail, title: "Email", delay: "300" },
                  { icon: Clock, title: "Business Hours", delay: "400" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all-smooth border-0 hover-lift animate-zoom-in animate-delay-${item.delay}`}
                  >
                    <CardContent className="p-8 flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-warm-brown to-chocolate rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse-glow">
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-dark-brown mb-3">{item.title}</h3>
                        {item.title === "Address" && (
                          <p className="text-coffee leading-relaxed">
                            123 Craftsman Lane
                            <br />
                            Woodville, CA 90210
                          </p>
                        )}
                        {item.title === "Phone" && <p className="text-coffee text-lg">(555) 123-4567</p>}
                        {item.title === "Email" && <p className="text-coffee text-lg">info@rkdoors.com</p>}
                        {item.title === "Business Hours" && (
                          <div className="text-coffee space-y-1 leading-relaxed">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-white rounded-3xl shadow-2xl border-0 animate-fade-in-up animate-delay-200 hover-lift transition-all-smooth">
                <CardContent className="p-10">
                  <h2 className="font-heading text-4xl font-bold text-dark-brown mb-8 animate-fade-in-up animate-delay-300">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-dark-brown mb-3">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className="w-full rounded-xl border-warm-brown/20 focus:border-warm-brown focus:ring-warm-brown"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark-brown mb-3">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full rounded-xl border-warm-brown/20 focus:border-warm-brown focus:ring-warm-brown"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark-brown mb-3">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="w-full rounded-xl border-warm-brown/20 focus:border-warm-brown focus:ring-warm-brown"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientType" className="block text-sm font-semibold text-dark-brown mb-3">
                        I am a... *
                      </label>
                      <Select onValueChange={(value) => handleInputChange("clientType", value)}>
                        <SelectTrigger className="w-full rounded-xl border-warm-brown/20 focus:border-warm-brown focus:ring-warm-brown">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="homeowner">Homeowner</SelectItem>
                          <SelectItem value="contractor">Contractor</SelectItem>
                          <SelectItem value="architect">Architect</SelectItem>
                          <SelectItem value="designer">Interior Designer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark-brown mb-3">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, including any specific requirements, timeline, or questions you may have..."
                        className="w-full rounded-xl border-warm-brown/20 focus:border-warm-brown focus:ring-warm-brown"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-warm-brown to-chocolate hover:from-chocolate hover:to-warm-brown text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all-smooth hover-glow"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-dark-brown mb-6">Visit Our Showroom</h2>
            <p className="text-xl text-coffee leading-relaxed">
              Come see our doors in person and meet with our design team
            </p>
          </div>

          <div className="bg-cream rounded-3xl h-96 flex items-center justify-center shadow-lg">
            <div className="text-center text-coffee">
              <MapPin className="h-16 w-16 mx-auto mb-6 text-warm-brown" />
              <p className="text-xl font-semibold text-dark-brown mb-2">Interactive Map</p>
              <p className="text-lg">123 Craftsman Lane, Woodville, CA 90210</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-brown text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-cream mb-10 leading-relaxed">
            Schedule a consultation to discuss your project in detail
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-warm-brown to-chocolate hover:from-chocolate hover:to-warm-brown text-white px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
