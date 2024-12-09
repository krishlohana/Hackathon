"use client"

import { motion } from 'framer-motion'
import { Coffee, UtensilsCrossed, Users } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee",
    description: "Experience our signature coffee blends made from the finest beans around the world."
  },
  {
    icon: UtensilsCrossed,
    title: "Fine Dining",
    description: "Savor exquisite dishes crafted by our world-class chefs using premium ingredients."
  },
  {
    icon: Users,
    title: "Private Events",
    description: "Host your special occasions in our elegant private dining spaces."
  }
]

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on providing an exceptional dining experience with attention to every detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}