import React, { useState } from 'react';
import { ArrowRight, Phone, Users, Globe, CheckCircle } from 'lucide-react';
import FormModal from '../components/FormModal';
import ThankYouPopup from '../components/ThankYouPopup';
import SEO from '../components/SEO';

export default function NewServicesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsThankYouOpen(true);
  };

  return (
    <>
      <SEO
        title="Clinic Automation Services in Ontario | Source X"
        description="AI-powered clinic automation that pays for itself in 30 days. Phone answering, patient reactivation, and website booking automation for GTA clinics."
        keywords="clinic automation services, AI phone answering, patient reactivation, clinic booking automation"
      />

      <div className="min-h-screen bg-[#0a0a0a] text-white pt-24">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Clinic Automation That
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">
                  Pays for Itself in 30 Days
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Turn missed calls, no-shows, and lost leads into consistent revenue
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-8 mb-20">
              <div className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6">
                      <Phone className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      AI Phone & Scheduling
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      Never miss another $1,000 call.
                    </p>
                    <p className="text-gray-400 mb-6">
                      Our AI answers every call in real-time, books appointments instantly, and follows up automatically. It sounds human, responds in seconds, and works 24/7.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>24/7 call answering</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Instant appointment booking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Automated follow-ups</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Call recording and analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/10">
                    <div className="text-6xl mb-4">📞</div>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="text-gray-400 mb-6">
                      Every 10 missed calls costs your clinic $4,000. Most clinics miss 30 to 50 calls per month.
                    </p>
                    <div className="text-3xl font-bold text-[#3B82F6]">
                      $12,000 to $20,000/month lost
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="md:order-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6">
                      <Users className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Patient Reactivation
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      Fill empty slots automatically.
                    </p>
                    <p className="text-gray-400 mb-6">
                      AI identifies inactive patients and reaches out with personalized messages. Book appointments without lifting a finger.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Automated patient outreach</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Personalized messaging</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Smart scheduling</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Appointment reminders</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/10 md:order-1">
                    <div className="text-6xl mb-4">📅</div>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="text-gray-400 mb-6">
                      25 to 40% of scheduled patients never show up. Empty slots = lost revenue you can't recover.
                    </p>
                    <div className="text-3xl font-bold text-[#3B82F6]">
                      $8,000 to $15,000/month lost
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#111111] rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] rounded-2xl flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Website to Consult Automation
                    </h2>
                    <p className="text-xl text-gray-300 mb-6">
                      Convert browsers into booked patients.
                    </p>
                    <p className="text-gray-400 mb-6">
                      Most website visitors leave without booking. Our AI engages them instantly, answers questions, and books appointments on the spot.
                    </p>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Instant chat engagement</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Real-time booking</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Lead capture and nurture</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="text-[#3B82F6] flex-shrink-0" size={20} />
                        <span>Conversion tracking</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/10">
                    <div className="text-6xl mb-4">🌐</div>
                    <h3 className="text-2xl font-bold mb-4">The Problem</h3>
                    <p className="text-gray-400 mb-6">
                      78% of patients book with the first clinic that responds. Slow replies mean lost patients.
                    </p>
                    <div className="text-3xl font-bold text-[#3B82F6]">
                      $5,000 to $10,000/month lost
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Every Service Includes
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold mb-2">25 Consult Guarantee</h3>
                  <p className="text-gray-400 text-sm">
                    Or your install is free
                  </p>
                </div>

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-lg font-bold mb-2">Weekly ROI Reports</h3>
                  <p className="text-gray-400 text-sm">
                    Know exactly what you're getting
                  </p>
                </div>

                <div className="bg-[#111111] rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="text-lg font-bold mb-2">PHIPA Compliant</h3>
                  <p className="text-gray-400 text-sm">
                    Your patients' data is protected
                  </p>
                </div>
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
