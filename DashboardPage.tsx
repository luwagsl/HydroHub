import React from 'react';
import { Hero } from '../components/Hero';
import { GlobalGarden, GrowLog } from '../components/Sections';
import { HowItWorks } from '../components/Footer';

export function LandingPage() {
  return (
    <>
      <Hero />
      <GlobalGarden />
      <GrowLog />
      <HowItWorks />
    </>
  );
}
