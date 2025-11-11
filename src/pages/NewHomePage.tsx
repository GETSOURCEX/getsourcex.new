import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import FormModal from '../components/FormModal';
import ThankYouPopup from '../components/ThankYouPopup';
import SEO from '../components/SEO';

export default function NewHomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsThankYouOpen(true);
  };

  return (
    <>
      <SEO
        title="Clinic Automation Toronto | Source X"
        description="Your Clinic Is Leaking $10,000+ Every Month. We Fix It in 10 Days or You Don't Pay. Find and recover hidden profit in your clinic with invisible AI."
        keywords="clinic automation Toronto, AI clinic automation Ontario, medical clinic revenue recovery GTA"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white">

        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#0a0a0a] to-[#8B5CF6]/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Clinic Is Leaking $10,000+ Every Month.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
                  We Fix It in 10 Days or You Don't Pay.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find and recover hidden profit in your clinic with invisible AI that books patients, cuts no-shows, and proves ROI within 48 hours.
              </p>

              <p className="text-lg text-[#3B82F6] mb-10 font-semibold">
                Free $995 value, limited to 5 GTA clinics each month.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 text-lg"
                >
                  Get My Free ROI Snapshot
                  <ArrowRight size={20} />
                </button>

                <a
                  href="/how-it-works"
                  className="border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2 text-lg"
                >
                  See How It Works
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-[#3B82F6]" size={20} />
                  <span>$2M+ Revenue Recovered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#3B82F6]" size={20} />
                  <span>25 Consults Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="text-[#3B82F6]" size={20} />
                  <span>3-Day Setup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Your Clinic's Hidden Revenue Leaks
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-4">Missed Calls</h3>
                <p className="text-gray-400 text-lg">
                  Every 10 missed calls = $4,000 lost.
                </p>
              </div>

              <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10">
                <div className="text-5xl mb-4">❌</div>
                <h3 className="text-2xl font-bold mb-4">No-Shows</h3>
                <p className="text-gray-400 text-lg">
                  25 to 40% of booked patients never show.
                </p>
              </div>

              <div className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/10">
                <div className="text-5xl mb-4">⏰</div>
                <h3 className="text-2xl font-bold mb-4">Slow Replies</h3>
                <p className="text-gray-400 text-lg">
                  78% of new patients book the first clinic that answers.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                See Your Leak Report
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Why Clinics Choose Source X
            </h2>

            <p className="text-xl text-center text-gray-400 mb-16">
              Born Inside Clinics. Built for Intelligent Growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Done-for-You Setup in 3 Days</h3>
                <p className="text-gray-400 text-lg">
                  We handle everything. You focus on patients.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold">48</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">ROI Snapshot in 48 Hours</h3>
                <p className="text-gray-400 text-lg">
                  See exactly where your clinic is losing money.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold">25</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">25 Booked Consults in 30 Days Guaranteed</h3>
                <p className="text-gray-400 text-lg">
                  Or you don't pay. No fine print.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Book My Free Audit
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              The 3-Step Source X Process
            </h2>

            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Diagnose</h3>
                  <p className="text-gray-400 text-lg">Free AI Audit + ROI Snapshot delivered in 48 hours</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Deploy</h3>
                  <p className="text-gray-400 text-lg">Automation installed in 7 days</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Deliver</h3>
                  <p className="text-gray-400 text-lg">ROI tracking over 30 days</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Get $995 in Real Value Free for 5 Clinics This Month
            </h2>

            <div className="max-w-3xl mx-auto bg-[#111111] rounded-3xl p-8 border border-white/10">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 text-lg font-bold">Component</th>
                    <th className="text-left py-4 text-lg font-bold">Description</th>
                    <th className="text-right py-4 text-lg font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 text-gray-300">$10K Clinic Fix</td>
                    <td className="py-4 text-gray-400">Find and fix $10K in lost profit</td>
                    <td className="py-4 text-right text-[#3B82F6] font-semibold">$297</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 text-gray-300">AI Audit + ROI Snapshot</td>
                    <td className="py-4 text-gray-400">Personalized 48-hour report</td>
                    <td className="py-4 text-right text-[#3B82F6] font-semibold">$499</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 text-gray-300">Implementation Strategy Call</td>
                    <td className="py-4 text-gray-400">21-day installation plan</td>
                    <td className="py-4 text-right text-[#3B82F6] font-semibold">$199</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-bold text-xl" colSpan={2}>Total Value</td>
                    <td className="py-4 text-right font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
                      $995 Free
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Claim My Free Audit Slot
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <Shield className="w-20 h-20 text-[#3B82F6] mx-auto mb-6" />

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The 25 Show-Up Guarantee
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                If we don't deliver 25 booked consults within 30 days, your install is free.
                <br />
                No fine print.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by Clinics Across Toronto, Mississauga, Vaughan and Hamilton
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Source X helps Canadian clinics grow profitably with full PHIPA and PIPEDA compliance.
              <br />
              We keep your data safe, your patients protected, and your business growing.
            </p>

            <div className="flex flex-wrap justify-center gap-8 items-center mt-12">
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">🇨🇦</span>
                <span>Canadian Owned</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="text-[#3B82F6]" size={24} />
                <span>PHIPA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="text-[#3B82F6]" size={24} />
                <span>Secure Data</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-gradient-to-br from-[#3B82F6]/20 via-[#0a0a0a] to-[#8B5CF6]/20">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Your Next 30 Days Could Redefine How Your Clinic Grows
              </h2>

              <p className="text-xl text-gray-300 mb-10">
                In 10 days, your clinic can go from missed calls and no-shows to a fully-booked, self-running system.
              </p>

              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-12 py-5 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-xl"
              >
                Get My Free ROI Snapshot
                <ArrowRight size={24} />
              </button>
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
