import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, CheckCircle } from 'lucide-react';

const BeforeAfterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const beforeItems = [
    "Manually chasing leads (losing opportunities to automated competitors)",
    "Missing calls = losing $1,000+ revenue opportunities daily",
    "Answering repetitive customer support questions (wasting valuable time)",
    "Scheduling conflicts and no-shows (operational chaos)",
    "Working 60+ hours without business process automation (inevitable burnout)"
  ];

  const afterItems = [
    "AI lead generation nurtures prospects automatically (wake up to qualified sales)",
    "Never miss revenue opportunities with AI phone automation (every call captured)",
    "24/7 intelligent customer support that scales (happy customers always)",
    "Optimized scheduling with AI appointment automation (zero no-shows)",
    "Business runs profitably on AI autopilot (true business freedom)"
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-white">Real AI Business Transformation Results</span>{' '}
            <span className="gradient-blue">See What Happens When AI Automation Takes Over Your Manual Tasks</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Before Column */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <h3 className="value-proposition-subheading text-white mb-6 flex items-center">
                <span className="text-red-500 mr-3">BEFORE</span> AI Business Automation:
              </h3>
              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="enhanced-subheading-small text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Column */}
            <div className="bg-[#0a0a0a] p-8 rounded-xl border border-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <h3 className="value-proposition-subheading text-white mb-6 flex items-center">
                <span className="text-green-500 mr-3">AFTER</span> Source X AI Automation:
              </h3>
              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="enhanced-subheading-small text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;