import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CoreValues from './CoreValues';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading">
            <span className="text-white">About</span>{' '}
            <span className="gradient-blue">Source X</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] mb-6 leading-relaxed">
            Founded by Vatsal Raval, Source X is built on a mission to empower organizations of all sizes with the tools and strategies they need to thrive in an AI-driven world. We specialize in delivering cutting-edge <strong>AI business automation</strong> solutions tailored for businesses aiming to streamline operations and accelerate growth through <strong>intelligent automation systems</strong>.
          </p>
          <p className="enhanced-subheading text-[#cccccc] mb-12 leading-relaxed">
            To empower organizations of all sizes with the tools and strategies they need to thrive in an AI-driven world. Our expertise encompasses <strong>AI-powered lead generation</strong>, <strong>automated customer support</strong>, and smart scheduling systems. By leveraging the latest in <strong>business process automation</strong> technology, we ensure that businesses not only keep pace with industry advancements but also set new standards in operational excellence.
          </p>

          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow duration-300">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Meet Our</span>{' '}
                <span className="gradient-blue">AI Business Transformation Expert</span>
              </h3>
              <h4 className="service-title-subheading text-white mb-4">
                Vatsal Raval - Founder & AI Automation Strategist
              </h4>
              <p className="enhanced-subheading-small text-[#cccccc] leading-relaxed">
                Meet Vatsal Raval, the visionary founder behind Source X's revolutionary AI business automation approach. As a leading AI automation strategist in Canada, Vatsal has dedicated his career to transforming how businesses operate through intelligent automation systems that eliminate manual work and accelerate growth.
              </p>
              <p className="enhanced-subheading-small text-[#cccccc] leading-relaxed mt-4">
                Vatsal's unique approach to business transformation AI combines deep technical knowledge with real-world business acumen, helping companies across healthcare, e-commerce, and professional services industries implement AI automation solutions that save 20+ hours weekly while increasing revenue by 25% or more. Under his leadership, Source X has become the go-to AI transformation partner for businesses ready to scale with intelligent automation.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="value-proposition-subheading text-white mb-2">
              Transform Your Business Into an AI-Powered Profit Machine That Runs Itself.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24"
        >
          <h3 className="section-heading">
            <span className="text-white">Our</span>{' '}
            <span className="gradient-blue">Core Values</span>
          </h3>
          <CoreValues />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;