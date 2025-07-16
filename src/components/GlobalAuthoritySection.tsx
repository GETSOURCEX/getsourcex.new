import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Users, Star, DollarSign } from 'lucide-react';

const GlobalAuthoritySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: DollarSign,
      number: "500+",
      label: "Hours Automated Weekly",
      color: "blue"
    },
    {
      icon: Globe,
      number: "15+",
      label: "Countries Served",
      color: "green"
    },
    {
      icon: Star,
      number: "98%",
      label: "Client Satisfaction Rate",
      color: "yellow"
    },
    {
      icon: Users,
      number: "$2M+",
      label: "Revenue Generated for Clients",
      color: "purple"
    }
  ];

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
            <span className="text-white">Global AI Automation</span>{' '}
            <span className="gradient-blue">Authority</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] leading-relaxed mb-8">
            <strong>Trusted by Businesses Across 15+ Countries</strong>
          </p>
          <p className="enhanced-subheading text-[#cccccc] leading-relaxed">
            Source X has become the go-to AI automation partner for businesses from Toronto to New York, Vancouver to Los Angeles. Our proven AI business transformation methods are helping companies worldwide eliminate manual work and scale faster with intelligent automation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 text-center"
            >
              <stat.icon className={`w-12 h-12 text-${stat.color}-500 mx-auto mb-4`} />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="enhanced-subheading-small text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalAuthoritySection;