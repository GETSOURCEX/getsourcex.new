import React from 'react';
import { Lightbulb, Heart, Shield, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Leading with cutting-edge AI technology',
    color: 'blue'
  },
  {
    icon: Heart,
    title: 'Client Success',
    description: 'Prioritizing growth-driven automation',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Building trust through transparency and reliability',
    color: 'orange'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Scalable & eco-conscious AI solutions',
    color: 'green'
  }
];

const CoreValues = () => {
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {values.map((value, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className={`value-card glow-${value.color}`}
        >
          <div className="relative z-10">
            <value.icon className={`w-8 h-8 text-${value.color}-500 mb-4 icon-glow-${value.color}`} />
            <h3 className="service-title-subheading text-white mb-2">{value.title}</h3>
            <p className="enhanced-subheading-small text-gray-400">{value.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CoreValues;