import React from 'react'
import ServicesHero from '@/components/Services/ServicesHero'
import ServicesGrid from '@/components/Services/ServicesGrid'
import ServicesCta from '@/components/Services/ServicesCta'

const ServicesPage = () => {
  return (
    <div className="w-full h-fit">
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </div>
  )
}

export default ServicesPage