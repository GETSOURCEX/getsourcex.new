import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, UserX, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GlobalAuthoritySection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const leaks = [
    {
      icon: Phone,
      title: "Missed Calls",
      description: "Every 10 missed calls = $4,000 lost.",
      color: "blue"
    },
    {
      icon: UserX,
      title: "No-Shows",
      description: "25–40% of consults vanish with no recovery.",
      color: "red"
    },
    {
      icon: Clock,
      title: "Slow Replies",
      description: "78% of patients book with whoever replies first.",
      color: "yellow"
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
            <span className="text-white">Your Clinic's</span>{' '}
            <span className="gradient-blue">Hidden Revenue Leaks</span>
          </h2>
          <p className="enhanced-subheading text-[#cccccc] leading-relaxed">
            Most med-spas across the GTA lose thousands each month without realizing it. Here are the three biggest culprits:
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {leaks.map((leak, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
            >
              <leak.icon className={`w-12 h-12 text-${leak.color}-500 mx-auto mb-4`} />
              <h3 className="service-title-subheading text-white mb-3">{`Leak ${index + 1} — ${leak.title}`}</h3>
              <p className="enhanced-subheading-small text-gray-400">{leak.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => navigate('/clinic-fix')}
            className="px-8 py-4 bg-[#3B82F6] text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:scale-105 transition-all duration-300 cursor-pointer"
            aria-label="See My Leak Report"
          >
            See My Leak Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalAuthoritySection;