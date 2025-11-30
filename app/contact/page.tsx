import React from 'react'
import ContactHero from '@/components/Contact/ContactHero'
import ContactInfo from '@/components/Contact/ContactInfo'
import ContactForm from '@/components/Contact/ContactForm'
import GoogleMaps from '@/components/Contact/GoogleMaps'
import ContactCta from '@/components/Contact/ContactCta'

const ContactPage = () => {
  return (
    <div className="w-full h-fit">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <GoogleMaps />
      <ContactCta />
    </div>
  )
}

export default ContactPage