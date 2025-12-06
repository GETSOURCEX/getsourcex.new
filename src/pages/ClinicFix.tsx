import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, ChevronDown, TrendingUp, Clock, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ClinicFix = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    clinicName: '',
    caslConsent: false
  });
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!hasAnimated) {
      const duration = 2000;
      const steps = 60;
      const increment = 10000 / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounter(Math.floor(increment * currentStep));
        } else {
          setCounter(10000);
          clearInterval(timer);
        }
      }, stepDuration);

      setHasAnimated(true);
      return () => clearInterval(timer);
    }
  }, [hasAnimated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.caslConsent) {
      alert('Please agree to the CASL consent to continue.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('clinicName', formData.clinicName);
      formDataToSend.append('caslConsent', 'true');
      formDataToSend.append('_source_page', window.location.href);
      formDataToSend.append('_cta_type', 'clinic_fix');
      formDataToSend.append('_site', 'Source X');

      const response = await fetch('https://formspree.io/f/mldzbjke', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formDataToSend
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          clinicName: '',
          caslConsent: false
        });
      } else {
        alert('Something went wrong. Please try again or contact info@getsourcex.com.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again or contact info@getsourcex.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "What's the catch?",
      answer: "There isn't one. We offer the $10K Clinic Fix free for the first 5 GTA clinics each month because we know once you see the results, you'll want to keep working with us. It's our way of proving value upfront."
    },
    {
      question: "How long does setup take?",
      answer: "Most implementations are completed within 48 hours. We handle everything from analysis to installation, so you can focus on running your clinic while we optimize your revenue recovery systems."
    },
    {
      question: "Does this replace my staff?",
      answer: "Absolutely not. Our AI systems work alongside your team to handle the overflow and ensure no opportunities slip through the cracks. Your staff can focus on high-value interactions while AI handles routine follow-ups and scheduling."
    },
    {
      question: "What if it doesn't work?",
      answer: "We stand behind our 25 Show-Up Guarantee. If we don't deliver at least 25 booked consults in 30 days, your setup is completely free. We only succeed when you succeed."
    }
  ];

  if (showThankYou) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
        <div
          className="relative bg-[#111111] rounded-3xl p-12 max-w-2xl w-full text-center border-2 border-transparent animate-fade-in-up"
          style={{
            backgroundImage: 'linear-gradient(#111111, #111111), linear-gradient(120deg, #3B82F6, #6366F1)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center">
              <CheckCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full blur-2xl opacity-50" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Your $10K Clinic Fix Request Is Confirmed
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              We'll contact you within 24 hours to confirm your details and prepare your ROI Snapshot.
              You can lock in your 15-minute ROI call right now using the link below.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="https://zeeg.me/vatsalsourcex/15-minute-dollar10k-clinic-fix-roi-snapshot-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-bold px-10 py-5 rounded-xl hover:scale-105 transition-transform duration-300 text-lg"
              >
                Book My ROI Snapshot Call
              </a>

              <button
                onClick={() => navigate('/')}
                className="border-2 border-white/20 text-white font-semibold px-10 py-5 rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 text-lg"
              >
                Return to Home
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-8 border-t border-white/10 pt-6">
              Your data is protected under PHIPA and PIPEDA compliance standards.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617]">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b]/20 to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                Recover $10K in 30 Days,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]">
                  Without Ads, Extra Staff, or Guesswork
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Your clinic is leaking thousands every month through missed calls, no-shows, and slow follow-ups.
                The $10K Clinic Fix identifies those leaks and helps you recover the revenue, in days, not months.
              </p>

              <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-2xl border border-[#3B82F6]/30 shadow-2xl">
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]">
                  ${counter.toLocaleString()}
                </div>
                <div className="text-sm font-semibold text-gray-400 mt-2 tracking-wider uppercase">
                  Revenue Recovered
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Claim My Free $10K Clinic Fix
              </h2>
              <p className="text-gray-400 mb-6">
                Normally $297 – free for the first 5 GTA clinics this month
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Dr. Sarah Johnson"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="sarah@clinic.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="(416) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="clinicName" className="block text-sm font-medium text-gray-300 mb-2">
                    Clinic Name *
                  </label>
                  <input
                    type="text"
                    id="clinicName"
                    name="clinicName"
                    required
                    value={formData.clinicName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#020617] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#3B82F6] transition-colors"
                    placeholder="Toronto Wellness Clinic"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="caslConsent"
                    name="caslConsent"
                    checked={formData.caslConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-[#020617] text-[#3B82F6] focus:ring-[#3B82F6] focus:ring-offset-0"
                  />
                  <label htmlFor="caslConsent" className="text-sm text-gray-400">
                    I consent to receive communications from Source X about clinic automation and agree to the privacy policy (CASL compliant). *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-semibold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Claim My Free $10K Clinic Fix'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Clinics Across the GTA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From physiotherapy and Medspas to laser and rehab centers, our systems have helped clinics recover real profit without new ads or staff.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-2xl border border-[#3B82F6]/20 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1] mb-2">
                1,400+
              </div>
              <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Missed Calls Recovered
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-2xl border border-[#3B82F6]/20 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1] mb-2">
                $200K+
              </div>
              <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                In Client ROI
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-2xl border border-[#3B82F6]/20 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1] mb-2">
                48 Hours
              </div>
              <div className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Avg. Setup Time
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#020617]">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500/10 rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-yellow-500" />
          </div>
          <h2 className="text-5xl font-black text-white leading-tight">
            You Don't Need More Leads.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              You Need to Stop Losing the Ones You Already Have.
            </span>
          </h2>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-10 rounded-3xl border border-[#3B82F6]/30 shadow-2xl">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Most clinics spend thousands generating leads and then lose 30–40 percent to missed calls, slow responses, and no-shows.
              <span className="block mt-4 font-semibold text-white">
                It's not a people problem, it's a system problem.
              </span>
            </p>

            <p className="text-lg text-gray-400 mb-8">
              The $10K Clinic Fix plugs those leaks and helps you recover lost revenue automatically.
            </p>

            <div className="bg-[#020617] p-8 rounded-2xl border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="text-6xl font-black text-yellow-400 mb-2">
                    120
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Missed Calls Per Month
                  </div>
                </div>

                <div className="text-4xl text-gray-600">→</div>

                <div className="text-center md:text-right">
                  <div className="text-6xl font-black text-red-500 mb-2">
                    $34,560
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">
                    Annual Revenue Leak
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#020617]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              The $10K Clinic Fix
            </h2>
            <p className="text-xl text-gray-300">
              Your AI-Powered Revenue Recovery System
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-3xl border border-[#3B82F6]/20 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center text-3xl font-black text-white mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Diagnose</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-[#3B82F6] uppercase text-sm">What Happens</span><br />
                We analyze your call data & workflow
              </p>
              <p className="text-white font-semibold">
                → Identify your top 3 revenue leaks
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-3xl border border-[#3B82F6]/20 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center text-3xl font-black text-white mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Design</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-[#3B82F6] uppercase text-sm">What Happens</span><br />
                You receive your AI Transformation Blueprint
              </p>
              <p className="text-white font-semibold">
                → See your 10-day recovery plan
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-8 rounded-3xl border border-[#3B82F6]/20 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center text-3xl font-black text-white mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Deliver</h3>
              <p className="text-gray-400 mb-4">
                <span className="font-semibold text-[#3B82F6] uppercase text-sm">What Happens</span><br />
                We install and test your Fix in 48 hours
              </p>
              <p className="text-white font-semibold">
                → Recover $10K+ in real revenue
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-bold px-12 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 text-lg"
            >
              Claim My Free $10K Clinic Fix
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-300">
              Free for the First 5 Clinics
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] rounded-3xl border border-[#3B82F6]/30 overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#020617] border-b border-white/10">
                  <tr>
                    <th className="text-left p-6 text-white font-bold">Component</th>
                    <th className="text-left p-6 text-white font-bold">Description</th>
                    <th className="text-right p-6 text-white font-bold">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-6 text-white font-semibold">The $10K Clinic Fix</td>
                    <td className="p-6 text-gray-300">Done-for-you system that recovers $10K in lost revenue</td>
                    <td className="p-6 text-right text-[#3B82F6] font-bold">$297</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-white font-semibold">AI Audit + ROI Snapshot</td>
                    <td className="p-6 text-gray-300">Personalized breakdown of your clinic's profit leaks</td>
                    <td className="p-6 text-right text-[#3B82F6] font-bold">$499</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-white font-semibold">Implementation Strategy Call</td>
                    <td className="p-6 text-gray-300">One-on-one consultation with Source X</td>
                    <td className="p-6 text-right text-[#3B82F6] font-bold">$199</td>
                  </tr>
                </tbody>
                <tfoot className="bg-[#020617] border-t-2 border-[#3B82F6]/50">
                  <tr>
                    <td className="p-6 text-white font-bold text-lg">Total Value</td>
                    <td className="p-6"></td>
                    <td className="p-6 text-right text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#6366F1]">
                      $995 in Free Value
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-bold px-12 py-5 rounded-xl hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 text-lg"
            >
              Claim My Free $10K Clinic Fix
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#020617]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white">
              Born Inside Clinics. Built for Results.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-10 rounded-3xl border border-[#3B82F6]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center text-3xl font-black text-white mb-6">
                M
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Source X was built from real front-desk chaos, missed calls, no-shows, and lost revenue.
                We've been there. We understand the frustration of watching opportunities slip away while you're
                busy caring for patients. That's why we created a system that works 24/7 to capture every lead
                and maximize every opportunity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] p-10 rounded-3xl border border-[#3B82F6]/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#6366F1] rounded-full flex items-center justify-center text-3xl font-black text-white mb-6">
                G
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Guarantee</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-[#3B82F6] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-xl font-bold text-white mb-2">
                      25 Show-Up Guarantee
                    </p>
                    <p className="text-gray-300">
                      If we don't deliver 25 booked consults in 30 days, your setup is free.
                      We only succeed when you succeed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0f172a]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about The $10K Clinic Fix.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] rounded-2xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-xl font-semibold text-white pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#3B82F6] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-300 leading-relaxed animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 mt-8">
            For more questions, contact us at{' '}
            <a href="mailto:support@getsourcex.com" className="text-[#3B82F6] hover:underline">
              support@getsourcex.com
            </a>
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#020617]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-6xl font-black text-white mb-6">
            Ready to Recover $10K in 30 Days?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Get your personalized plan, your AI ROI Snapshot, and see the real numbers before you decide.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] px-6 py-3 rounded-full border border-[#3B82F6]/30">
              <TrendingUp className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-white font-semibold">$10K+ Recovery</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] px-6 py-3 rounded-full border border-[#3B82F6]/30">
              <Clock className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-white font-semibold">48-Hour Setup</span>
            </div>
            <div className="flex items-center gap-3 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] px-6 py-3 rounded-full border border-[#3B82F6]/30">
              <Shield className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-white font-semibold">25 Show-Up Guarantee</span>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white font-bold px-16 py-6 rounded-xl hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 text-xl mb-6"
          >
            Claim My Free $10K Clinic Fix
          </button>

          <p className="text-gray-400 text-sm">
            Limited to 5 GTA clinics per month
          </p>
        </div>
      </section>
    </div>
  );
};

export default ClinicFix;
