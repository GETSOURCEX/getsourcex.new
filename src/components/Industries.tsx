import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart,
  Briefcase,
  Store,
  Cloud,
  Building2,
  ShoppingBag
} from 'lucide-react';
import IndustryFormModal from './IndustryFormModal';

const industries = [
  {
    icon: Heart,
    name: "Healthcare AI Automation",
    description: "Turn Your Medical Practice Into a Patient Magnet - Automated appointment scheduling, patient follow-ups, and care coordination AI that keeps your calendar full and patients satisfied. Perfect for clinics, dental practices, and healthcare providers seeking intelligent automation.",
    painPoints: "Administrative burden reducing time for patient care, high no-show rates impacting revenue, rising patient acquisition costs, staff burnout from repetitive tasks.",
    solution: "We transform healthcare operations with AI automation that reduces administrative burden while enhancing patient experience. Our HIPAA-compliant solutions streamline everything from appointment scheduling to patient follow-up.",
    recommendedServices: [
      "Intelligent patient scheduling with automated reminders",
      "24/7 patient support for appointments and triage",
      "Automated follow-up communications",
      "Smart patient acquisition",
      "Personalized health product recommendations"
    ],
    cta: "Transform My Clinic"
  },
  {
    icon: Briefcase,
    name: "Professional Services AI Automation",
    description: "Scale to 6-Figures Without Hiring More Staff - Automated client management, lead nurturing AI, and business process automation that grows your practice while you focus on delivering exceptional results to clients.",
    painPoints: "Billable hours lost to administrative tasks, inconsistent client communication, difficulty scaling personalized service, high client acquisition costs.",
    solution: "We help professional service providers maximize billable time while delivering exceptional client experiences. Our AI solutions handle routine tasks and communications.",
    recommendedServices: [
      "Intelligent lead qualification",
      "Automated appointment scheduling",
      "Smart follow-up systems",
      "24/7 client support",
      "Personalized service recommendations"
    ],
    cta: "Scale Without More Staff"
  },
  {
    icon: Store,
    name: "Retail AI Automation",
    description: "Transform Browsers Into Buyers Automatically - Intelligent customer engagement, loyalty program automation, and sales optimization systems that increase revenue and repeat purchases through AI-powered retail automation.",
    painPoints: "Staffing constraints limiting service quality, inconsistent customer experiences, difficulty competing with e-commerce, lost sales from limited support.",
    solution: "We help retailers create seamless, personalized shopping experiences across all channels. Our AI solutions enhance customer service and drive additional revenue.",
    recommendedServices: [
      "24/7 customer support",
      "Intelligent appointment scheduling",
      "Personalized product recommendations",
      "Automated follow-up communications",
      "Smart inventory management"
    ],
    cta: "Automate My Customer Experience"
  },
  {
    icon: Cloud,
    name: "SaaS & Tech AI Automation",
    description: "Scale Your Tech Business Smarter - Automated client management, lead nurturing AI, and business process automation that grows your practice while you focus on delivering results. Essential for SaaS companies and tech startups seeking intelligent automation.",
    painPoints: "High customer acquisition costs, churn from inadequate support, scaling support operations, limited user adoption of features.",
    solution: "We help technology companies accelerate growth while controlling costs through intelligent automation. Our AI solutions streamline customer acquisition and enhance user onboarding.",
    recommendedServices: [
      "Intelligent lead qualification",
      "Automated demo scheduling",
      "24/7 technical support",
      "Usage-based communication",
      "Smart customer success monitoring"
    ],
    cta: "Streamline My Operations"
  },
  {
    icon: Building2,
    name: "Corporate Enterprise AI Automation",
    description: "Transform Your Enterprise Efficiency - Automated internal communications, smart document processing, and cross-departmental process automation that eliminates bottlenecks and increases productivity across large organizations.",
    painPoints: "Complex manual processes, departmental silos, inconsistent service quality, high administrative costs, limited process visibility.",
    solution: "We help large organizations streamline operations and enhance efficiency through intelligent automation. Our enterprise-grade AI solutions integrate with your existing systems.",
    recommendedServices: [
      "Intelligent meeting coordination",
      "Automated internal communications",
      "Smart document processing",
      "24/7 employee and customer support",
      "Cross-departmental process automation"
    ],
    cta: "Scale My Enterprise"
  },
  {
    icon: ShoppingBag,
    name: "E-commerce AI Automation",
    description: "Double Online Revenue Without More Website Traffic - AI-powered personalization, cart recovery automation, and customer behavior analysis that transforms browsers into loyal buyers automatically. Essential for online retailers and e-commerce businesses.",
    painPoints: "High cart abandonment rates, exceeding service demands, difficulty with personalization, inconsistent follow-up, limited customer re-engagement.",
    solution: "We help online retailers compete with e-commerce giants by delivering personalized, responsive shopping experiences that convert browsers into buyers.",
    recommendedServices: [
      "Hyper-personalized recommendations",
      "Intelligent cart abandonment recovery",
      "24/7 customer support",
      "Automated email sequences",
      "Smart inventory management"
    ],
    cta: "Double My Online Revenue"
  }
];

const Industries = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a]" id="industries">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">
          <span className="text-white">AI Business Automation Transforming</span>{' '}
          <span className="gradient-blue">Every Industry</span>
        </h2>
        <p className="enhanced-subheading section-subheading">Tailored AI automation solutions for various sectors</p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:border-blue-500/40"
                onClick={() => setSelectedIndustry(index)}
              >
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="service-title-subheading text-white mb-2">{industry.name}</h3>
                  <p className="industry-description-subheading text-gray-400 mb-4">{industry.description}</p>
                  <div className="enhanced-subheading-small text-white/70 flex items-center">
                    <span>{industry.cta}</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {selectedIndustry !== null && (
          <IndustryFormModal
            isOpen={selectedIndustry !== null}
            onClose={() => setSelectedIndustry(null)}
            industryName={industries[selectedIndustry].name}
          />
        )}
      </div>
    </section>
  );
};

export default Industries;