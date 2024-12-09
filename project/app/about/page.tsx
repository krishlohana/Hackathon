import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-gray-600 mb-6">
              Founded in 1990, Elite Restaurant has been serving exceptional cuisine and creating memorable dining experiences for over three decades. Our commitment to quality ingredients, masterful preparation, and impeccable service has made us a beloved destination for food enthusiasts.
            </p>
            <p className="text-gray-600">
              Every dish we serve is crafted with passion and precision by our team of expert chefs, using only the finest locally-sourced ingredients. We take pride in offering an atmosphere that combines elegant comfort with warm hospitality.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="Restaurant interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}