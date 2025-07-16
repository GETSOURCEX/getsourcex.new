import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Users, Headphones, Target } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'AI Business Transformation Guarantee',
    description: 'We don\'t get paid until you see measurable results from our AI automation services—your business transformation success is literally our business model.',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Proven AI Automation Framework',
    description: '100+ businesses already scaling with our intelligent automation method—you\'re joining a community of AI-powered winners across Canada and beyond.',
    color: 'purple'
  },
  {
    icon: Headphones,
    title: 'Complete AI Implementation Support',
    description: 'From AI system setup to business scaling, we handle every aspect of your automation transformation—you focus on what you do best while AI handles the rest.',
    color: 'orange'
  },
  {
    icon: Target,
    title: 'Industry-Specific AI Solutions',
    description: 'Custom AI automation solutions for your specific business model and industry—no generic templates, only tailored intelligent automation systems that deliver ROI.',
    color: 'green'
  }
];

const WhyChooseSection = () => {
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
            <span className="text-white">Why Smart Business Owners Choose</span>{' '}
            <span className="gradient-blue">Source X AI Automation Over Everyone Else</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
      </div>
    </section>
  );
};

export default WhyChooseSection;