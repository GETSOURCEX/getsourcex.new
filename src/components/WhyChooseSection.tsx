import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Clock, Shield, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const reasons = [
  {
    icon: TrendingUp,
    title: '48-Hour ROI Snapshot',
    description: 'See exactly how much profit your clinic is leaking backed by real numbers.',
    color: 'blue'
  },
  {
    icon: Clock,
    title: 'Fast 3-Day Setup',
    description: 'We build and deploy everything for you. No training, no disruption.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Guaranteed Results',
    description: 'If we don\'t produce results, you don\'t pay the install. No fine print.',
    color: 'orange'
  },
  {
    icon: Building,
    title: 'Built for Compliance',
    description: 'PHIPA + PIPEDA compliant. Secure, Canadian-owned infrastructure.',
    color: 'green'
  }
];

const WhyChooseSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-white">Why Clinics Choose</span>{' '}
            <span className="gradient-blue">Source X</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] leading-relaxed">
            Built for Med-Spas. Focused on ROI.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <div className="relative z-10">
                <reason.icon className={`w-8 h-8 text-${reason.color}-500 mb-4`} />
                <h3 className="service-title-subheading text-white mb-4">{reason.title}</h3>
                <p className="enhanced-subheading-small text-gray-400 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => navigate('/clinic-fix')}
            className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Book My Free Audit"
          >
            Book My Free Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;