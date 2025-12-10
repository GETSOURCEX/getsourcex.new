import React from 'react';
import { ArrowRight, FileText, TrendingDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function ResourcesPage() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Free Resources for GTA Med-Spas | Clinic Revenue Leak Report"
        description="Learn where clinics lose $25,000–$45,000/month and how to stop it. Free clinic revenue leak report and AI transformation blueprint from Source X."
        keywords="clinic revenue leak, clinic profit analysis, hidden clinic revenue, free clinic resources"
      />

      <div className="min-h-screen bg-[#0B0B0D] text-white pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Free Resources for GTA Med-Spas
                </h1>
              </div>

              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl mb-6">
                  <FileText className="w-10 h-10" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  The Clinic Revenue Leak Report
                </h2>

                <p className="text-2xl text-gray-300 mb-8">
                  Learn where clinics lose $25,000–$45,000/month, and how to stop it.
                </p>

                <button
                  onClick={() => navigate('/clinic-fix')}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-10 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2 text-lg"
                >
                  See My Leak Report
                  <ArrowRight size={20} />
                </button>
              </div>

              <div className="bg-[#111111] rounded-3xl p-12 border border-white/10 mb-12">
                <div className="flex items-start gap-4 mb-6">
                  <TrendingDown className="text-red-500 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold mb-4">Your Clinic Is Losing Money Every Day</h2>
                    <p className="text-xl text-gray-300">
                      Not because your care isn't good. Because your systems are broken.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="border-l-4 border-[#3B82F6] pl-6">
                    <h3 className="text-2xl font-bold mb-2">Missed Calls</h3>
                    <p className="text-gray-400 text-lg">
                      Every 10 missed calls = $4,000 in lost revenue. Most clinics miss 30 to 50 calls per month.
                    </p>
                    <div className="text-2xl font-bold text-red-500 mt-2">$12,000 to $20,000/month lost</div>
                  </div>

                  <div className="border-l-4 border-[#3B82F6] pl-6">
                    <h3 className="text-2xl font-bold mb-2">No-Shows</h3>
                    <p className="text-gray-400 text-lg">
                      25 to 40% of booked appointments never show up. Empty slots you can't fill at the last minute.
                    </p>
                    <div className="text-2xl font-bold text-red-500 mt-2">$8,000 to $15,000/month lost</div>
                  </div>

                  <div className="border-l-4 border-[#3B82F6] pl-6">
                    <h3 className="text-2xl font-bold mb-2">Slow Replies</h3>
                    <p className="text-gray-400 text-lg">
                      78% of patients book with the first clinic that responds. If you're slow, they're gone.
                    </p>
                    <div className="text-2xl font-bold text-red-500 mt-2">$5,000 to $10,000/month lost</div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">Total Hidden Revenue Loss:</span>
                      <span className="text-4xl font-bold text-red-500">$25,000 to $45,000/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl p-12 border border-white/10 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">What's Included in Your Free Report</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Call Tracking Analysis</h3>
                      <p className="text-gray-300">
                        See exactly how many calls you're missing and what it's costing you.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">No-Show Pattern Identification</h3>
                      <p className="text-gray-300">
                        Discover when and why patients aren't showing up.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Website Conversion Audit</h3>
                      <p className="text-gray-300">
                        Find out why website visitors aren't booking appointments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Revenue Recovery Roadmap</h3>
                      <p className="text-gray-300">
                        A personalized plan showing exactly how to fix each leak and recover lost revenue.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">ROI Projection</h3>
                      <p className="text-gray-300">
                        See the expected return on investment within 30, 60, and 90 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Stop the Bleed?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get your free revenue leak report in 48 hours.
                </p>
                <button
                  onClick={() => navigate('/clinic-fix')}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-10 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2 text-lg"
                >
                  Claim My Free $10K Clinic Fix
                  <ArrowRight size={20} />
                </button>

                <p className="text-sm text-gray-500 mt-6">
                  No credit card required. Report delivered within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
