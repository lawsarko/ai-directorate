import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Privacy Policy | AI Directorate</title>
        <meta name="description" content="Privacy Policy for AI Directorate - Learn how we collect, use, and protect your personal information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-primary-card p-8 rounded-card">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last Updated: April 23, 2025
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
            <p className="text-text-secondary mb-4">
              Welcome to AI Directorate ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aidirectorate.com (the "Site").
            </p>
            <p className="text-text-secondary mb-4">
              Please read this Privacy Policy carefully. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the Site.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-bold mt-6 mb-3">2.1 Personal Information</h3>
            <p className="text-text-secondary mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>Register for an account</li>
              <li>Sign up for our newsletter</li>
              <li>Submit reviews or ratings for AI tools</li>
              <li>Participate in community challenges</li>
              <li>Contact us through our contact form</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-text-secondary mb-4">
              This information may include your name, email address, profile picture, and any other information you choose to provide.
            </p>

            <h3 className="text-lg font-bold mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-text-secondary mb-4">
              When you visit our Site, we may automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent on those pages</li>
              <li>Referring website addresses</li>
              <li>Search terms used to reach our Site</li>
            </ul>
            <p className="text-text-secondary mb-4">
              We collect this information using cookies, web beacons, and similar technologies. For more information about our use of cookies, please see our Cookie Policy.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-text-secondary mb-4">
              We may use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>Provide, maintain, and improve our Site and services</li>
              <li>Create and manage your account</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Personalize your experience and deliver content relevant to your interests</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Site</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">4. How We Share Your Information</h2>
            <p className="text-text-secondary mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              <li><strong>With Your Consent:</strong> We may share your information with your consent or at your direction.</li>
            </ul>
            <p className="text-text-secondary mb-4">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Your Rights and Choices</h2>
            <p className="text-text-secondary mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
            </ul>
            <p className="text-text-secondary mb-4">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">6. Data Security</h2>
            <p className="text-text-secondary mb-4">
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
            <p className="text-text-secondary mb-4">
              Our Site is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our systems.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-text-secondary mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Contact Us</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-text-secondary mb-4">
              Email: privacy@aidirectorate.com<br />
              Address: 123 AI Avenue, Tech City, TC 12345
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
