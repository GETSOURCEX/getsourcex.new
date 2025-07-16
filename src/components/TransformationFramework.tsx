import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Settings, Zap, TrendingUp } from 'lucide-react';

const phases = [
  {
    icon: Search,
    title: 'Revenue Leak Detection with AI Business Analysis',
    phase: 'PHASE 1: AI Business Automation Audit (Week 1)',
    description: 'We identify hidden automation opportunities worth $10K+ annually in your current business processes. Our AI business audit reveals automation potential most business owners never discover—from lead generation gaps to customer support inefficiencies.',
    color: 'blue'
  },
  {
    icon: Settings,
    title: 'Custom AI Automation Blueprint for Your Industry',
    phase: 'PHASE 2: Intelligent Business Automation Design (Week 2)',
    description: 'Custom AI automation workflows engineered specifically for your business model and industry requirements. No cookie-cutter business automation solutions—only transformation blueprints that deliver measurable ROI through intelligent automation systems.',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'Zero-Disruption AI System Deployment',
    phase: 'PHASE 3: Seamless Integration (Week 3-4)',
    description: 'Deploy advanced AI business automation systems without disrupting a single customer interaction or workflow. Your team won\'t even notice the change—but your bank account will see the business process automation results.',
    color: 'orange'
  },
  {
    icon: TrendingUp,
    title: 'Continuous AI-Powered Profit Optimization',
    phase: 'PHASE 4: Growth Optimization (Ongoing)',
    description: 'Continuous refinement and scaling support to maximize your ROI and business growth through intelligent automation. We don\'t just set it and forget it—we optimize your AI business automation until you\'re unstoppable.',
    color: 'green'
  }
];

const TransformationFramework = () => {
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
            <span className="text-white">The Source X AI Business</span>{' '}
            <span className="gradient-blue">Transformation Framework™</span>
          </h2>
          <p className="enhanced-subheading section-subheading">
            From business chaos to AI-powered profit machine in 30 days
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <div className="relative z-10">
                <phase.icon className={`w-8 h-8 text-${phase.color}-500 mb-4`} />
                <p className="enhanced-subheading-small text-blue-400 font-semibold mb-2">{phase.phase}</p>
                <h3 className="service-title-subheading text-white mb-4">{phase.title}</h3>
                <p className="enhanced-subheading-small text-gray-400 leading-relaxed">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationFramework;