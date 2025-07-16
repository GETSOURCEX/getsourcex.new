import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0e0e16] py-20">
      <SEO 
        title="Privacy Policy | Source X"
        description="Learn about how Source X collects, uses, and protects your personal information. Read our detailed privacy policy."
        path="/privacy-policy"
      />
      
      <div className="container mx-auto px-6">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1>PRIVACY POLICY</h1>
          <p>Last Updated: May 25, 2025</p>

          <h2>1. INTRODUCTION</h2>
          <p>Source X ("we," "our," or "us"), a Canada-based AI automation agency founded by Vatsal Raval, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://getsourcex.com/ or use our AI automation services.</p>
          <p>Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by all terms of this Privacy Policy. If you do not agree with our policies, please do not access or use our website or services.</p>

          <h2>2. INFORMATION WE COLLECT</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us when you:</p>
          <ul>
            <li>Request a consultation</li>
            <li>Register for an account</li>
            <li>Subscribe to our newsletter</li>
            <li>Contact us through our website</li>
            <li>Use our AI automation services</li>
          </ul>
          <p>This information may include:</p>
          <ul>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name and information</li>
            <li>Payment information</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>When you visit our website or use our services, we may automatically collect certain information, including:</p>
          <ul>
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Usage patterns</li>
            <li>Referring website</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Other technical information</li>
          </ul>

          <h3>2.3 AI Service Data</h3>
          <p>When using our AI automation solutions (Lead Generation AI, Customer Support AI, Appointment-Setting AI, Phone Call AI, Email Automation AI, and E-commerce Personalization), we may collect and process data necessary for providing these services, including:</p>
          <ul>
            <li>Customer interaction data</li>
            <li>Voice recordings (for Phone Call AI)</li>
            <li>Email content and engagement metrics</li>
            <li>Appointment and scheduling information</li>
            <li>E-commerce behavior and preferences</li>
            <li>Lead information and engagement history</li>
          </ul>

          <h2>3. HOW WE USE YOUR INFORMATION</h2>
          <p>We use the information we collect for various business purposes, including to:</p>
          <ul>
            <li>Provide, operate, and maintain our services</li>
            <li>Improve, personalize, and expand our services</li>
            <li>Understand and analyze how you use our services</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you about our services, updates, and promotions</li>
            <li>Process transactions and send related information</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>For any other purpose with your consent</li>
          </ul>

          <h2>4. DISCLOSURE OF YOUR INFORMATION</h2>
          <p>We may share your information in the following situations:</p>
          <ul>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, judicial proceedings, court orders, or legal processes.</li>
          </ul>

          <h2>5. DATA SECURITY</h2>
          <p>We implement appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet.</p>

          <h2>6. DATA RETENTION</h2>
          <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>

          <h2>7. YOUR PRIVACY RIGHTS</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul>
            <li>The right to access the personal information we have about you</li>
            <li>The right to request that we correct or update any personal information we have about you</li>
            <li>The right to request that we delete any personal information we have about you</li>
            <li>The right to object to processing of your personal information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>To exercise any of these rights, please contact us at workwithsourcex@gmail.com.</p>

          <h2>8. THIRD-PARTY WEBSITES</h2>
          <p>Our website may contain links to third-party websites and applications. We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read the privacy policy of every website you visit.</p>

          <h2>9. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2>10. CONTACT US</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>Source X<br />
          Email: info@getsourcex.com<br />
          Phone: +1 548-577-2426</p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;