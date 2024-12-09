import { Contact as ContactSection } from '@/components/sections/contact'

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <ContactSection />
      </div>
    </div>
  )
}