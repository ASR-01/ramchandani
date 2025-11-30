import React from 'react'
import WebAppHero from '@/components/WebApp/WebAppHero'
import DesignPhilosophy from '@/components/WebApp/DesignPhilosophy'
import WhatWeDesign from '@/components/WebApp/WhatWeDesign'
import DesignProcess from '@/components/WebApp/DesignProcess'
import DesignFeatures from '@/components/WebApp/DesignFeatures'
import Technologies from '@/components/WebApp/Technologies'
import DesignPackages from '@/components/WebApp/DesignPackages'
import WebAppCta from '@/components/WebApp/WebAppCta'

const WebappPage = () => {
  return (
    <div className="w-full h-fit">
      <WebAppHero />
      <DesignPhilosophy />
      <WhatWeDesign />
      <DesignProcess />
      <DesignFeatures />
      <Technologies />
      <DesignPackages />
      <WebAppCta />
    </div>
  )
}

export default WebappPage