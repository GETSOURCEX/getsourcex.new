import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Settings, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const phases = [
  {
    icon: Search,
    number: '1',
    title: 'Measure the Leaks',
    description: 'Free AI Audit + ROI Snapshot. We analyze missed calls, no-shows, slow replies, and revenue drop-off.',
    color: 'blue'
  },
  {
    icon: Settings,
    number: '2',
    title: 'Patch the Leaks',
    description: 'We deploy your custom AI operations system to fix the highest-profit leaks first.',
    color: 'purple'
  },
  {
    icon: TrendingUp,
    number: '3',
    title: 'Multiply Your Revenue',
    description: 'Once your operations stop leaking money, we help you scale responsibly.',
    color: 'green'
  }
];

const TransformationFramework = () => {
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
            <span className="text-white">The 3-Step</span>{' '}
            <span className="gradient-blue">Source X Process</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-${phase.color}-500/20 rounded-full flex items-center justify-center mb-4`}>
                  <span className={`text-2xl font-bold text-${phase.color}-500`}>{phase.number}</span>
                </div>
                <h3 className="service-title-subheading text-white mb-4">{`Step ${phase.number} — ${phase.title}`}</h3>
                <p className="enhanced-subheading-small text-gray-400 leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => navigate('/clinic-fix')}
            className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="Get Started Now"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationFramework;