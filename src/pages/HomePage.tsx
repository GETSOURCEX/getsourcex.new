import React, { useState } from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import GlobalAuthoritySection from '../components/GlobalAuthoritySection';
import AboutSection from '../components/AboutSection';
import TransformationFramework from '../components/TransformationFramework';
import Solutions from '../components/Solutions';
import GuaranteeSection from '../components/GuaranteeSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import WhyChooseSection from '../components/WhyChooseSection';
import LocationBasedContent from '../components/LocationBasedContent';
import Industries from '../components/Industries';
import FinalCTA from '../components/FinalCTA';
import ContactModal from '../components/ContactModal';

const HomePage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <>
      <SEO 
        title="AI Business Automation Services | Source X - North America's Leading AI Transformation Partner"
        description="Source X delivers AI business automation and transformation services for small businesses in Canada and USA. Automated lead generation, customer support AI, and business process automation that scales your revenue across 15+ countries."
        path="/"
      />
      <main>
        <HeroSection onContactClick={handleContactClick} />
        <GlobalAuthoritySection />
        <AboutSection />
        <TransformationFramework />
        <Solutions />
        <GuaranteeSection />
        <BeforeAfterSection />
        <WhyChooseSection />
        <LocationBasedContent />
        <Industries />
        <FinalCTA onContactClick={handleContactClick} />
      </main>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default HomePage;