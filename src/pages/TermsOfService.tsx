import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#0e0e16] py-20">
      <SEO 
        title="Terms of Service | Source X"
        description="Read our terms of service to understand the rules and guidelines for using Source X's AI automation services."
        path="/terms-of-service"
      />
      
      <div className="container mx-auto px-6">
        <Link to="/" className="text-blue-500 hover:text-blue-400 mb-8 inline-block">
          ← Back to Home
        </Link>
        
        <article className="prose prose-invert max-w-4xl mx-auto">
          <h1>TERMS OF SERVICE</h1>
          <p>Last Updated: May 25, 2025</p>

          <h2>1. ACCEPTANCE OF TERMS</h2>
          <p>These Terms of Service ("Terms") constitute a legally binding agreement between you and Source X ("we," "our," or "us") regarding your use of our website https://getsourcex.com/ and AI automation services (collectively, the "Services").</p>
          <p>By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not access or use our Services.</p>

          <h2>2. DESCRIPTION OF SERVICES</h2>
          <p>Source X provides AI automation solutions for businesses, including but not limited to:</p>
          <ul>
            <li>Lead Generation AI</li>
            <li>Customer Support AI</li>
            <li>Appointment-Setting AI</li>
            <li>Phone Call AI</li>
            <li>Email Automation AI</li>
            <li>E-commerce Personalization</li>
          </ul>
          <p>Our Services are designed to help businesses streamline operations, enhance customer experiences, and drive growth through intelligent automation.</p>

          <h2>3. USER ACCOUNTS</h2>
          <h3>3.1 Account Creation</h3>
          <p>To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>

          <h3>3.2 Account Responsibilities</h3>
          <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>

          <h2>4. FEES AND PAYMENT</h2>
          <h3>4.1 Pricing</h3>
          <p>Our pricing structure includes setup fees and monthly support fees, which vary depending on the specific AI solutions and packages selected. Current pricing information is available upon request and may be subject to change.</p>

          <h3>4.2 Payment Terms</h3>
          <p>Payment terms will be specified in your service agreement. All fees are non-refundable unless otherwise specified in writing. You agree to provide accurate and complete billing information and to pay all charges incurred in connection with your account.</p>

          <h3>4.3 Late Payments</h3>
          <p>If your payment is not received by the due date, we may suspend or terminate your access to the Services. Late payments may be subject to late fees or interest charges as permitted by law.</p>

          <h2>5. INTELLECTUAL PROPERTY RIGHTS</h2>
          <h3>5.1 Our Intellectual Property</h3>
          <p>The Services, including all content, features, and functionality, are owned by Source X or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our express written consent.</p>

          <h3>5.2 Your Content</h3>
          <p>You retain all rights to any content you submit, post, or display on or through the Services ("Your Content"). By providing Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute Your Content in connection with providing and improving our Services.</p>

          <h2>6. USER CONDUCT</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Services in any way that violates any applicable law or regulation</li>
            <li>Use the Services for any harmful, fraudulent, or deceptive purpose</li>
            <li>Attempt to gain unauthorized access to any part of the Services</li>
            <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services</li>
            <li>Use any robot, spider, or other automatic device to access the Services</li>
            <li>Introduce any viruses, Trojan horses, worms, or other harmful material</li>
            <li>Collect or track personal information of other users</li>
          </ul>

          <h2>7. DISCLAIMER OF WARRANTIES</h2>
          <p>THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.</p>
          <p>We do not warrant that the Services will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected.</p>

          <h2>8. LIMITATION OF LIABILITY</h2>
          <p>IN NO EVENT SHALL SOURCE X, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:</p>
          <ul>
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES</li>
            <li>ANY CONTENT OBTAINED FROM THE SERVICES</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>

          <h2>9. INDEMNIFICATION</h2>
          <p>You agree to defend, indemnify, and hold harmless Source X and its licensors, service providers, employees, agents, officers, and directors from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.</p>

          <h2>10. TERM AND TERMINATION</h2>
          <h3>10.1 Term</h3>
          <p>These Terms shall remain in full force and effect while you use the Services.</p>

          <h3>10.2 Termination</h3>
          <p>We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including, without limitation, if you breach these Terms. Upon termination, your right to use the Services will immediately cease.</p>

          <h2>11. CHANGES TO TERMS</h2>
          <p>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>12. GOVERNING LAW</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of Canada, without regard to its conflict of law provisions.</p>

          <h2>13. DISPUTE RESOLUTION</h2>
          <p>Any dispute arising from or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the Canadian Arbitration Association. The arbitration shall be conducted in Ontario, Canada.</p>

          <h2>14. SEVERABILITY</h2>
          <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.</p>

          <h2>15. ENTIRE AGREEMENT</h2>
          <p>These Terms constitute the entire agreement between you and Source X regarding our Services and supersede all prior and contemporaneous agreements, proposals, or representations, written or oral, concerning the subject matter.</p>

          <h2>16. CONTACT INFORMATION</h2>
          <p>If you have questions about these Terms, please contact us at:</p>
          <p>Source X<br />
          Email: info@getsourcex.com<br />
          Phone: +1 548-577-2426</p>
        </article>
      </div>
    </div>
  );
};

export default TermsOfService;