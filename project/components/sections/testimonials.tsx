"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    content: "The best dining experience I've had in years. The attention to detail and service is impeccable.",
    author: "Sarah Johnson",
    role: "Food Critic",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    content: "A perfect blend of ambiance, taste, and service. Their signature coffee is a must-try!",
    author: "Michael Chen",
    role: "Coffee Enthusiast",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
  },
  {
    content: "Elite Restaurant has become our go-to place for special occasions. Simply outstanding!",
    author: "Emily Davis",
    role: "Regular Customer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it – hear what our valued guests have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}