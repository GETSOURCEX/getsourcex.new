import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle, Shield, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import FormModal from '../components/FormModal';
import ThankYouPopup from '../components/ThankYouPopup';
import SEO from '../components/SEO';

export default function NewHomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsThankYouOpen(true);
  };

  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [leaksRef, leaksInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [whyRef, whyInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [processRef, processInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [trustRef, trustInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [guaranteeRef, guaranteeInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [localRef, localInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [finalRef, finalInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <SEO
        title="Clinic Automation Toronto | Source X"
        description="Your Clinic Is Leaking $10,000+ Every Month. We Fix It in 10 Days or You Don't Pay. Find and recover hidden profit in your clinic with invisible AI."
        keywords="clinic automation Toronto, AI clinic automation Ontario, medical clinic revenue recovery GTA"
      />

      <div className="min-h-screen bg-[#0B0B0D] text-white">

        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#0B0B0D] to-[#6366F1]/20" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className={`max-w-5xl mx-auto transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Your Clinic Is Leaking $10,000+ Every Month.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]">
                  We Fix It in 10 Days or You Don't Pay.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Find and recover hidden profit in your clinic with invisible AI that books patients, cuts no-shows, and proves ROI within 48 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg animate-pulse-slow"
                >
                  Get My Free ROI Snapshot
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="/how-it-works"
                  className="border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg"
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

        <section ref={leaksRef} className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${leaksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Your Clinic's Hidden Revenue Leaks
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { emoji: '📞', title: 'Missed Calls', desc: 'Every 10 missed calls = $4,000 lost.', delay: 0 },
                { emoji: '❌', title: 'No-Shows', desc: '25 to 40% of booked patients never show.', delay: 200 },
                { emoji: '⏰', title: 'Slow Replies', desc: '78% of new patients book the first clinic that answers.', delay: 400 }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group bg-[#0B0B0D] p-8 rounded-3xl border border-white/10 hover:border-[#3B82F6]/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:scale-105 ${leaksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                See Your Leak Report
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section ref={whyRef} className="py-24">
          <div className="container mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-6 transition-all duration-700 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Why Clinics Choose Source X
            </h2>

            <p className={`text-xl text-center text-gray-400 mb-16 transition-all duration-700 delay-100 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Born Inside Clinics. Built for Intelligent Growth.
            </p>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { num: '3', title: 'Done-for-You Setup in 3 Days', desc: 'We handle everything. You focus on patients.', delay: 0 },
                { num: '48', title: 'ROI Snapshot in 48 Hours', desc: 'See exactly where your clinic is losing money.', delay: 200 },
                { num: '25', title: '25 Booked Consults in 30 Days Guaranteed', desc: 'Or you don\'t pay. No fine print.', delay: 400 }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`group text-center transition-all duration-700 ${whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="relative bg-gradient-to-br from-[#3B82F6] to-[#6366F1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300">
                    <span className="text-4xl font-bold">{item.num}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400 text-lg">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2 animate-pulse-slow"
              >
                Book My Free Audit
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section ref={processRef} className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              The 3-Step Source X Process
            </h2>

            <div className="max-w-5xl mx-auto relative">
              <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#3B82F6] via-[#6366F1] to-[#3B82F6] transform -translate-y-1/2" style={{ top: '120px' }} />

              <div className="grid md:grid-cols-3 gap-8 relative">
                {[
                  { num: 1, title: 'Diagnose', desc: 'Free AI Audit + ROI Snapshot delivered in 48 hours', delay: 0 },
                  { num: 2, title: 'Deploy', desc: 'Automation installed in 7 days', delay: 200 },
                  { num: 3, title: 'Deliver', desc: 'ROI tracked and optimized over 30 days', delay: 400 }
                ].map((step) => (
                  <div
                    key={step.num}
                    className={`relative text-center transition-all duration-700 ${processInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${step.delay}ms` }}
                  >
                    <div className="relative inline-block">
                      <div className="group bg-gradient-to-br from-[#3B82F6] to-[#6366F1] w-24 h-24 rounded-full flex items-center justify-center mb-6 mx-auto hover:scale-110 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 relative z-10">
                        <span className="text-3xl font-bold">{step.num}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-lg">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2"
              >
                Get Started Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section ref={trustRef} className="py-24">
          <div className="container mx-auto px-6">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${trustInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Prove ROI Before You Pay.
              </h2>

              <p className="text-xl text-gray-300 mb-12">
                We install your system, show your results, and earn your trust in that order.
              </p>

              <div className="flex flex-wrap justify-center gap-12 mb-12">
                {[
                  { emoji: '💡', label: 'Audit' },
                  { emoji: '⚙️', label: 'Deploy' },
                  { emoji: '📈', label: 'ROI Proof' }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-6xl mb-3 animate-bounce" style={{ animationDelay: `${i * 200}ms`, animationDuration: '2s' }}>
                      {item.emoji}
                    </div>
                    <div className="text-lg font-semibold text-gray-400">{item.label}</div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-10 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 inline-flex items-center gap-2 text-lg"
              >
                Claim My Free ROI Snapshot
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        <section ref={guaranteeRef} className="py-24 bg-[#111111]">
          <div className="container mx-auto px-6 text-center">
            <div className={`max-w-3xl mx-auto transition-all duration-700 ${guaranteeInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <Shield className="w-20 h-20 text-[#3B82F6] mx-auto mb-6 animate-pulse" style={{ animationDuration: '3s' }} />

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

        <section ref={localRef} className="py-24">
          <div className="container mx-auto px-6 text-center">
            <div className={`transition-all duration-700 ${localInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
          </div>
        </section>

        <section ref={finalRef} className="py-32 bg-gradient-to-br from-[#3B82F6]/20 via-[#0B0B0D] to-[#6366F1]/20">
          <div className="container mx-auto px-6 text-center">
            <div className={`max-w-4xl mx-auto transition-all duration-700 ${finalInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Your Next 30 Days Could Redefine How Your Clinic Grows
              </h2>

              <p className="text-xl text-gray-300 mb-10">
                In 10 days, your clinic can go from missed calls and no-shows to a fully-booked, self-running system.
              </p>

              <button
                onClick={() => setIsFormOpen(true)}
                className="group bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold px-12 py-5 rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 inline-flex items-center gap-2 text-xl animate-pulse-slow"
              >
                Get My Free ROI Snapshot
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
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
