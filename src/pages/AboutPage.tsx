import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Target, Users, Award } from 'lucide-react';
import FormModal from '../components/FormModal';
import ThankYouPopup from '../components/ThankYouPopup';
import SEO from '../components/SEO';

export default function AboutPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsThankYouOpen(true);
  };

  return (
    <>
      <SEO
        title="About Source X | Toronto's Clinic Automation Partner"
        description="Built from real problems. Designed to print real profit. Learn how Source X helps Canadian clinics grow profitably with AI automation."
        keywords="about source x, clinic automation toronto, vatsal raval"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Built From Real Problems.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
                    Designed to Print Real Profit.
                  </span>
                </h1>
              </div>

              <div className="bg-[#111111] rounded-3xl p-12 border border-white/10 mb-12">
                <h2 className="text-3xl font-bold mb-6">The Story</h2>

                <div className="space-y-6 text-lg text-gray-300">
                  <p>
                    I'm <span className="text-white font-semibold">Vatsal Raval</span>.
                  </p>

                  <p>
                    Before Source X, I watched clinics lose thousands every month, not because their care was bad, but because their systems were broken.
                  </p>

                  <p>
                    Missed calls. No-shows. Lost leads.
                  </p>

                  <p>
                    They weren't losing patients, they were leaking profit.
                  </p>

                  <p>
                    So I built Source X to fix that.
                  </p>

                  <p>
                    Now we install AI systems that recover hidden revenue and make clinics run themselves.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 text-center">
                  <Target className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Mission</h3>
                  <p className="text-gray-400">
                    To help every Canadian clinic grow profitably without hiring, stress, or wasted time.
                  </p>
                </div>

                <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 text-center">
                  <Users className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Approach</h3>
                  <p className="text-gray-400">
                    We prove ROI first. You decide after seeing real results.
                  </p>
                </div>

                <div className="bg-[#111111] rounded-3xl p-8 border border-white/10 text-center">
                  <Award className="w-12 h-12 text-[#3B82F6] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Promise</h3>
                  <p className="text-gray-400">
                    25 booked consults in 30 days or you don't pay.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl p-12 border border-white/10 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">What We Believe</h2>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold text-sm">1</span>
                    </div>
                    <div>
                      <p className="text-lg text-gray-300">
                        You don't need more leads, you need to stop losing the ones you already have.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold text-sm">2</span>
                    </div>
                    <div>
                      <p className="text-lg text-gray-300">
                        AI should feel human, fast, real, and respectful.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-bold text-sm">3</span>
                    </div>
                    <div>
                      <p className="text-lg text-gray-300">
                        We prove ROI first, you decide after.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-3xl p-12 border border-white/10 mb-12">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Phone</div>
                      <a href="tel:+14375240276" className="text-xl text-white hover:text-[#3B82F6] transition-colors">
                        (437) 524-0276
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a href="mailto:info@getsourcex.com" className="text-xl text-white hover:text-[#3B82F6] transition-colors">
                        info@getsourcex.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Location</div>
                      <div className="text-xl text-white">
                        Based in Toronto, Canada (Remote)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-3xl p-12 border border-white/10">
                <h2 className="text-3xl font-bold mb-4">
                  Your Clinic Can Run Without You.
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's prove it together.
                </p>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-semibold px-10 py-5 rounded-xl hover:opacity-90 transition-opacity inline-flex items-center gap-2 text-lg"
                >
                  Get My Free ROI Snapshot
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
