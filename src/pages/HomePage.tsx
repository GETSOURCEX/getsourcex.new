import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import GlobalAuthoritySection from '../components/GlobalAuthoritySection';
import WhyChooseSection from '../components/WhyChooseSection';
import TransformationFramework from '../components/TransformationFramework';
import GuaranteeSection from '../components/GuaranteeSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import FinalCTA from '../components/FinalCTA';

const HomePage = () => {
  const handleContactClick = () => {
    window.location.href = '/clinic-fix';
  };

  return (
    <>
      <SEO
        title="$10K Clinic Fix | Source X - Stop Losing Revenue to Missed Calls & No-Shows"
        description="Your clinic is leaking $10,000+ every month through missed calls, no-shows, and slow follow-ups. Source X shows you exactly where and fixes it fast with AI-driven operations for GTA med-spas."
        path="/"
      />
      <main>
        <HeroSection onContactClick={handleContactClick} />
        <GlobalAuthoritySection />
        <WhyChooseSection />
        <TransformationFramework />
        <GuaranteeSection />
        <BeforeAfterSection />
        <FinalCTA onContactClick={handleContactClick} />
      </main>
    </>
  );
};

export default HomePage;