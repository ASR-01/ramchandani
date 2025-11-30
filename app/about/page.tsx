import React from 'react'
import PageHero from '@/components/About/PageHero'
import OurStory from '@/components/About/OurStory'
import VisionMission from '@/components/About/VisionMission'
import CoreValues from '@/components/About/CoreValues'
import CoreTeam from '@/components/About/CoreTeam'
import OurApproach from '@/components/About/OurApproach'
import OurAchievements from '@/components/About/OurAchievements'
import WhyDubai from '@/components/About/WhyDubai'
import AboutCta from '@/components/About/AboutCta'

const AboutPage = () => {
  return (
    <div className="w-full h-fit">
      <PageHero />
      <OurStory />
      <VisionMission />
      <CoreValues />
      <CoreTeam />
      <OurApproach />
      <OurAchievements />
      <WhyDubai />
      <AboutCta />
    </div>
  )
}

export default AboutPage