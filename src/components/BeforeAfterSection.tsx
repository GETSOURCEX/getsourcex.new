import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BeforeAfterSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      number: "1,400+",
      label: "Missed Calls Recovered"
    },
    {
      number: "$200,000+",
      label: "In Recovered ROI"
    },
    {
      number: "48-Hour",
      label: "Average Setup"
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="section-heading mb-4">
            <span className="text-white">Trusted by Clinics</span>{' '}
            <span className="gradient-blue">Across Toronto and the GTA</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] mb-12 max-w-3xl mx-auto">
            From med-spas to laser clinics, our systems help clinics recover real profit without new staff or unnecessary complexity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1] mb-2">
                  {stat.number}
                </div>
                <div className="enhanced-subheading-small text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;