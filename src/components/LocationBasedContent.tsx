import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';

const LocationBasedContent = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const locations = [
    {
      city: "Toronto",
      title: "AI Automation Services Toronto",
      description: "Leading AI business automation provider serving Toronto businesses with intelligent automation solutions."
    },
    {
      city: "Vancouver",
      title: "AI Automation Services Vancouver",
      description: "Vancouver's premier AI transformation partner helping businesses scale with automation technology."
    },
    {
      city: "New York",
      title: "AI Automation Services New York",
      description: "Transforming New York businesses with cutting-edge AI automation systems and intelligent workflows."
    },
    {
      city: "Los Angeles",
      title: "AI Automation Services Los Angeles",
      description: "Los Angeles businesses trust Source X for comprehensive AI business transformation and automation solutions."
    }
  ];

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
            <span className="text-white">AI Automation Services</span>{' '}
            <span className="gradient-blue">Across North America</span>
          </h2>
          <p className="enhanced-subheading section-subheading">
            Delivering world-class AI business automation solutions to major cities across the US and Canada
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {locations.map((location, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="service-title-subheading text-white">{location.title}</h3>
              </div>
              <p className="enhanced-subheading-small text-gray-400">{location.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationBasedContent;