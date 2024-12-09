import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Experience Fine Dining
          <br />
          at Its Best
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Indulge in an extraordinary culinary journey with our masterfully crafted dishes
          and exceptional service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            View Menu
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Book a Table
          </Button>
        </div>
      </div>
    </div>
  )
}