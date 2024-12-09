"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export default function ReservationsPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8">
            Make a Reservation
          </h1>

          {submitted ? (
            <div className="text-center bg-green-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Reservation Request Received
              </h2>
              <p className="text-green-700 mb-6">
                Thank you for your reservation request. We will contact you shortly to confirm your booking.
              </p>
              <Button onClick={() => setSubmitted(false)}>
                Make Another Reservation
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Name" required />
                <Input type="email" placeholder="Email" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="tel" placeholder="Phone" required />
                <Input type="date" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="time" required />
                <Input 
                  type="number" 
                  placeholder="Number of Guests" 
                  min="1" 
                  max="20"
                  required 
                />
              </div>
              <Textarea 
                placeholder="Special Requests or Dietary Requirements" 
                className="h-32"
              />
              <Button type="submit" size="lg" className="w-full">
                Submit Reservation
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}