import { Hero } from '@/components/sections/hero'
import { Features } from '@/components/sections/features'
import { Menu } from '@/components/sections/menu'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Menu />
      <Testimonials />
      <Contact />
    </>
  )
}