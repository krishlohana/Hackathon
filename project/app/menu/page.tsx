import { Menu as MenuSection } from '@/components/sections/menu'

export default function MenuPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8">
          Our Menu
        </h1>
        <MenuSection />
      </div>
    </div>
  )
}