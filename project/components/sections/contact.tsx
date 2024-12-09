"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Make a Reservation
            </h2>
            <p className="text-gray-600 mb-8">
              Book your table online and enjoy an unforgettable dining experience with us.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Phone" />
                <Input type="date" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="time" />
                <Input type="number" placeholder="Number of Guests" min="1" />
              </div>
              <Textarea placeholder="Special Requests" className="h-32" />
              <Button size="lg" className="w-full">
                Book Now
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-lg p-8"
          >
            <h3 className="font-playfair text-2xl font-bold mb-6">
              Opening Hours
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Monday - Friday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Saturday</span>
                <span>10:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Sunday</span>
                <span>10:00 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-playfair text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <p>123 Restaurant Street</p>
                <p>New York, NY 10001</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@eliterestaurant.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}