import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useForm } from '../context/FormContext';
import SEO from '../components/SEO';

export default function HowItWorksPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsThankYouOpen(true);
  };

  return (
    <>
      <SEO
        title="The $10K Clinic Fix Process | Source X Toronto"
        description="See how Source X recovers $10,000+ in hidden clinic revenue through our proven 3-step process: AI Audit, System Installation, and ROI Tracking."
        keywords="clinic automation process, AI clinic setup, clinic revenue recovery process"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                The $10K Clinic Fix Process
              </h1>
              <p className="text-xl text-gray-300">
                From revenue leak to fully-booked clinic in 30 days
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-24">
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] transform md:-translate-x-1/2" />

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="md:text-right">
                    <div className="inline-block bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white px-6 py-2 rounded-full font-bold mb-4">
                      Days 1 to 2
                    </div>
                    <h2 className="text-4xl font-bold mb-4">AI Audit + ROI Snapshot Delivered</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      We analyze your clinic's current systems, missed opportunities, and revenue leaks. You receive a personalized ROI snapshot showing exactly where you're losing money.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Call tracking and analysis</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>No-show pattern identification</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Website conversion audit</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Detailed revenue opportunity report</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-2xl z-10">
                      1
                    </div>
                    <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 ml-8 md:ml-0">
                      <div className="text-5xl mb-4">📊</div>
                      <h3 className="text-2xl font-bold mb-2">What You Get</h3>
                      <p className="text-gray-400">
                        A complete breakdown of where your clinic is losing money, with specific dollar amounts and actionable recommendations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="relative md:order-2">
                    <div className="absolute -left-6 md:-right-12 md:left-auto top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-2xl z-10">
                      2
                    </div>
                    <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 ml-8 md:mr-8">
                      <div className="text-5xl mb-4">⚙️</div>
                      <h3 className="text-2xl font-bold mb-2">What Happens</h3>
                      <p className="text-gray-400">
                        Our team installs and configures your custom AI automation system. No disruption to your current operations.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-1">
                    <div className="inline-block bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white px-6 py-2 rounded-full font-bold mb-4">
                      Days 3 to 7
                    </div>
                    <h2 className="text-4xl font-bold mb-4">System Installed</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      We build and deploy your custom automation system. Everything is handled by our team, with zero technical work required from you.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>AI phone answering setup</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Automated appointment reminders</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Patient reactivation campaigns</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Website booking automation</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="md:text-right">
                    <div className="inline-block bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white px-6 py-2 rounded-full font-bold mb-4">
                      Days 8 to 30
                    </div>
                    <h2 className="text-4xl font-bold mb-4">ROI Tracked and Optimized</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      We monitor performance daily and optimize for maximum results. You receive weekly reports showing booked consults, recovered revenue, and system performance.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Daily performance monitoring</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Weekly ROI reports</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Continuous optimization</span>
                      </li>
                      <li className="flex items-center gap-3 md:justify-end">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>25 consult guarantee tracked</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-2xl z-10">
                      3
                    </div>
                    <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 ml-8 md:ml-0">
                      <div className="text-5xl mb-4">📈</div>
                      <h3 className="text-2xl font-bold mb-2">The Result</h3>
                      <p className="text-gray-400">
                        A fully-booked clinic with predictable revenue, freed up staff time, and systems that run themselves.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-32 text-center">
              <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Fix Your Clinic's Revenue Leaks?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get your free ROI snapshot and see exactly where your clinic is losing money.
                </p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-10 py-5 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
                >
                  Book My Free Audit
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <FormModal
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSuccess={handleFormSuccess}
        />

        <ThankYouPopup
          isOpen={isThankYouOpen}
          onClose={() => setIsThankYouOpen(false)}
        />
      </div>
    </>
  );
}
