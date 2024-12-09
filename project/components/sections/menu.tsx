"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const menuItems = [
  {
    name: "Signature Coffee",
    price: "$4.50",
    description: "Our house blend coffee made from premium arabica beans",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  {
    name: "Eggs Benedict",
    price: "$16.00",
    description: "Poached eggs, hollandaise sauce, English muffin",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7"
  },
  {
    name: "Grilled Salmon",
    price: "$28.00",
    description: "Fresh Atlantic salmon with seasonal vegetables",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
  }
]

export function Menu() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
            Our Special Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated menu featuring both classic favorites and innovative creations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-playfair text-xl font-bold">{item.name}</h3>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  )
}