import React, { useState, useEffect } from 'react';
import { Bot, MessageSquare, Calendar, Phone, Mail, ShoppingCart } from 'lucide-react';
import ArsenalFormModal from './ArsenalFormModal';

const transformationPillars = [
  {
    title: "AI Revenue Intelligence Hub",
    description: "AI lead generation & revenue automation systems that turn every website visitor into a qualified, nurtured prospect with automated lead generation AI. Our intelligent systems find leads, make sales calls, and send follow-up emails while you focus on closing deals. Wake up to a sales pipeline full of ready-to-buy customers through our AI business automation.",
    services: [
      {
        icon: Bot,
        title: "Never Run Out of Qualified Leads Again",
        description: "Our AI lead generation system finds, qualifies, and nurtures prospects 24/7 using intelligent automation. Advanced lead scoring, automated outreach campaigns, and data-driven targeting ensure your sales team focuses only on high-value opportunities. Perfect for B2B companies, real estate agencies, and digital marketing businesses seeking automated lead generation solutions.",
        color: "blue",
        overview: "Struggling with unqualified leads?",
        painPoint: "Our AI-driven system identifies and delivers high-intent prospects directly to your pipeline, reducing acquisition costs and accelerating sales.",
        benefits: [
          "Intelligent lead scoring based on 20+ behavioral signals",
          "Automated multi-channel outreach customized to prospect preferences",
          "Smart conversation flows that adapt to prospect responses",
          "Seamless CRM integration for complete visibility",
          "Performance analytics that improve over time"
        ],
        buttonText: "Fill My Pipeline Now"
      },
      {
        icon: Phone,
        title: "Never Miss Another $1,000 Phone Call",
        description: "Never miss another $1,000 phone call with our AI phone automation system. Intelligent call handling, appointment booking, and lead qualification—even when you're sleeping. Our AI phone system includes multilingual support, reservation booking for restaurants and healthcare, and seamless CRM integration.",
        color: "green",
        overview: "High call volumes draining resources?",
        painPoint: "Our AI handles inbound and outbound calls, delivering consistent, human-like conversations that enhance customer satisfaction.",
        benefits: [
          "Natural-sounding voice with conversational intelligence",
          "Custom call flows tailored to your business processes",
          "Seamless transfer to human staff when needed",
          "Multilingual capabilities for global accessibility",
          "Call recording and analytics for continuous improvement"
        ],
        buttonText: "Never Miss Revenue Again"
      },
      {
        icon: Mail,
        title: "Turn Cold Leads Into Hot Buyers on Autopilot",
        description: "Email sequences that sell while you sleep and nurture prospects into paying customers. Your inbox becomes a money-making machine with AI-powered email automation that includes behavior-triggered sequences, personalized content generation, and smart A/B testing for maximum conversion rates.",
        color: "red",
        overview: "Emails not reaching the right audience?",
        painPoint: "Leverage AI to craft personalized, behavior-triggered email campaigns that increase engagement and drive conversions.",
        benefits: [
          "Behavior-triggered email sequences that respond to recipient actions",
          "AI-generated content personalized to individual preferences",
          "Smart A/B testing that continuously improves performance",
          "Engagement analytics with actionable insights",
          "Seamless integration with your CRM and marketing tools"
        ],
        buttonText: "Automate My Sales Emails"
      }
    ]
  },
  {
    title: "AI Customer Experience Engine",
    description: "24/7 AI customer support & appointment automation that delivers 5-star customer experiences around the clock without hiring additional staff. Our AI customer support never sleeps, never gets tired, and never loses patience. Your customers get instant answers, you get 5-star reviews and increased customer satisfaction.",
    services: [
      {
        icon: MessageSquare,
        title: "Turn Every Customer Into a Raving Fan",
        description: "AI-powered customer support with multilingual capabilities, sentiment analysis, and seamless handoff to human agents. Perfect for e-commerce businesses, SaaS companies, healthcare providers, and hospitality businesses. Reduce response times, improve customer satisfaction, and lower support costs with intelligent automation.",
        color: "purple",
        overview: "Overwhelmed by support inquiries?",
        painPoint: "Provide instant, 24/7 multilingual assistance with our AI-powered chat agents, ensuring consistent and efficient customer service.",
        benefits: [
          "Natural language processing that understands customer intent",
          "Multilingual support in 100+ languages",
          "Sentiment analysis to prioritize urgent or negative interactions",
          "Seamless handoff to human agents for complex issues",
          "Continuous learning from every interaction"
        ],
        buttonText: "Get 5-Star Reviews 24/7"
      },
      {
        icon: Calendar,
        title: "End Scheduling Chaos and No-Shows Forever",
        description: "Smart booking system that fills your calendar with qualified appointments automatically. No more scheduling conflicts, no more no-shows. Our AI appointment automation includes smart calendar optimization, automated reminders, and intelligent rescheduling for maximum efficiency.",
        color: "orange",
        overview: "Missed appointments affecting your business?",
        painPoint: "Automate scheduling with our AI bots, reducing no-shows and optimizing your calendar management.",
        benefits: [
          "Smart calendar optimization that maximizes productive time",
          "Automated reminders via email, SMS, and voice",
          "Client self-scheduling with custom booking rules",
          "Intelligent rescheduling that maintains calendar efficiency",
          "Resource allocation for rooms, equipment, or team members"
        ],
        buttonText: "End Scheduling Chaos Now"
      }
    ]
  },
  {
    title: "E-commerce AI Growth Accelerator",
    description: "AI e-commerce personalization that transforms browsers into buyers with AI that knows what your customers want before they do. Double revenue without more traffic through intelligent personalization, cart recovery automation, and customer behavior analysis.",
    services: [
      {
        icon: ShoppingCart,
        title: "Double Your E-commerce Revenue Without More Traffic",
        description: "AI that knows what your customers want before they do. Transform casual browsers into loyal customers with intelligent personalization. Our e-commerce AI includes real-time personalization, product recommendations, and dynamic content that adapts to customer preferences automatically.",
        color: "cyan",
        overview: "Generic shopping experiences leading to cart abandonment?",
        painPoint: "Our AI personalizes product recommendations and bundles in real-time, enhancing customer experience and boosting sales.",
        benefits: [
          "Real-time personalization based on browsing behavior",
          "Product recommendations powered by sophisticated algorithms",
          "Dynamic content that adapts to customer preferences",
          "Personalized search results that improve findability",
          "Cross-sell and upsell suggestions based on purchase patterns"
        ],
        buttonText: "Double My Revenue Now"
      }
    ]
  }
];

const Solutions = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#0a0a0a] text-white" id="solutions">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-heading">
          <span className="text-white">Your Complete</span>{' '}
          <span className="gradient-blue">AI Business Automation Arsenal</span>
        </h2>
        <p className="enhanced-subheading section-subheading">
          Experience intelligent automation systems tailored for real growth — backed by powerful AI business automation and outcome-driven strategies.
        </p>

        <div className="space-y-16">
          {transformationPillars.map((pillar, pillarIndex) => (
            <div key={pillarIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="value-proposition-subheading text-white mb-4">{pillar.title}</h3>
                <p className="enhanced-subheading text-gray-400 max-w-4xl mx-auto">{pillar.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pillar.services.map((service, serviceIndex) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={serviceIndex}
                      className="bg-[#0a0a0a] p-8 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <Icon className="w-8 h-8 text-blue-500 mr-2" />
                        <h4 className="service-title-subheading text-white">
                          {service.title}
                        </h4>
                      </div>
                      <p className="enhanced-subheading-small mb-4 text-gray-400">{service.description}</p>
                      <button
                        onClick={() => setSelectedService(service.title)}
                        className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 flex items-center justify-center cursor-pointer"
                      >
                        {service.buttonText}
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ArsenalFormModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        serviceType={selectedService || ''}
      />
    </section>
  );
};

export default Solutions;