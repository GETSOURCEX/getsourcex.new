import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function HowItWorksPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="How Source X Fixes Your Revenue Leaks | $10K Clinic Fix Process"
        description="A simple, transparent, diagnostic-first process. Measure the leaks, patch the leaks, and multiply your revenue. Learn how Source X recovers $10,000+ in hidden clinic revenue."
        keywords="clinic revenue recovery process, clinic automation process, how AI clinic fix works"
      />

      <div className="min-h-screen bg-[#0B0B0D] text-white pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How Source X Fixes Your Revenue Leaks
              </h1>
              <p className="text-xl text-gray-300">
                A simple, transparent, diagnostic-first process.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-24">
              <div className="relative">
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] transform md:-translate-x-1/2" />

                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                  <div className="md:text-right">
                    <h2 className="text-4xl font-bold mb-4">Step 1: Measure the Leaks</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      We audit your missed calls, no-shows, reply delays, and conversion drop-offs. You receive a complete ROI Snapshot within 48 hours.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-2xl z-10">
                      1
                    </div>
                    <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 ml-8 md:ml-0">
                      <div className="text-5xl mb-4">📊</div>
                      <h3 className="text-2xl font-bold mb-2">What Happens</h3>
                      <p className="text-gray-400">
                        We analyze your call data and workflow to identify your top revenue leaks and quantify the impact.
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
                        Our team deploys AI call response, booking optimization, and follow-up automations to recover lost revenue quickly.
                      </p>
                    </div>
                  </div>
                  <div className="md:order-1">
                    <h2 className="text-4xl font-bold mb-4">Step 2: Patch the Leaks</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      We deploy AI call response, booking optimization, and follow-up automations to recover lost revenue quickly.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="md:text-right">
                    <h2 className="text-4xl font-bold mb-4">Step 3: Multiply Your Revenue</h2>
                    <p className="text-lg text-gray-300 mb-6">
                      With your operations fixed, you can finally scale without waste. We discuss next steps only after you see ROI from Stage 1.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 md:-left-12 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-full flex items-center justify-center font-bold text-2xl z-10">
                      3
                    </div>
                    <div className="bg-[#111111] p-8 rounded-3xl border border-white/10 ml-8 md:ml-0">
                      <div className="text-5xl mb-4">📈</div>
                      <h3 className="text-2xl font-bold mb-2">What Happens</h3>
                      <p className="text-gray-400">
                        Your clinic operates efficiently with recovered revenue and systems that support growth without overwhelming your team.
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
                  onClick={() => navigate('/clinic-fix')}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-10 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2 text-lg"
                >
                  Claim My Free $10K Clinic Fix
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
