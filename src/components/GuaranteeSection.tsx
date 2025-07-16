import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield } from 'lucide-react';

const GuaranteeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="section-heading">
            <span className="text-white">The Source X 90-Day</span>{' '}
            <span className="gradient-blue">AI Business Transformation Promise</span>
          </h2>
          
          <div className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-shadow duration-300">
            <Shield className="w-12 h-12 text-blue-500 mx-auto mb-6" />
            <p className="enhanced-subheading text-[#cccccc] leading-relaxed">
              If our <strong>AI automation systems</strong> don't save you 20+ hours per week AND increase revenue by 25% within 90 days, we'll refine them until they do—at no extra cost. That's not just a <strong>business automation guarantee</strong>, that's our obsession with your AI transformation success.
            </p>
            <p className="enhanced-subheading-small text-white/70 mt-4">
              ⏰ Your competitors are already using AI business automation - don't get left behind
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;