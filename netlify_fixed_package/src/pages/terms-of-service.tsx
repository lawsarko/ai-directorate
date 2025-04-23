import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Terms of Service | AI Directorate</title>
        <meta name="description" content="Terms of Service for AI Directorate - The terms and conditions governing your use of our platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-primary-card p-8 rounded-card">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary mb-6">
              Last Updated: April 23, 2025
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-text-secondary mb-4">
              Welcome to AI Directorate. These Terms of Service ("Terms") govern your access to and use of the AI Directorate website, including any content, functionality, and services offered on or through aidirectorate.com (the "Site").
            </p>
            <p className="text-text-secondary mb-4">
              Please read these Terms carefully before using our Site. By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Site.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Changes to the Terms</h2>
            <p className="text-text-secondary mb-4">
              We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them, and apply to all access to and use of the Site thereafter.
            </p>
            <p className="text-text-secondary mb-4">
              Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Accessing the Site and Account Security</h2>
            <p className="text-text-secondary mb-4">
              We reserve the right to withdraw or amend this Site, and any service or material we provide on the Site, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Site is unavailable at any time or for any period.
            </p>
            <p className="text-text-secondary mb-4">
              To access certain features of the Site, you may be asked to provide certain registration details or other information. It is a condition of your use of the Site that all the information you provide is correct, current, and complete.
            </p>
            <p className="text-text-secondary mb-4">
              If you choose, or are provided with, a username, password, or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You are responsible for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Intellectual Property Rights</h2>
            <p className="text-text-secondary mb-4">
              The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AI Directorate, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p className="text-text-secondary mb-4">
              These Terms permit you to use the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site, except as follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.</li>
              <li>You may store files that are automatically cached by your Web browser for display enhancement purposes.</li>
              <li>You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution.</li>
              <li>If we provide social media features with certain content, you may take such actions as are enabled by such features.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Prohibited Uses</h2>
            <p className="text-text-secondary mb-4">
              You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate AI Directorate, an AI Directorate employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which may harm AI Directorate or users of the Site, or expose them to liability.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">6. User Contributions</h2>
            <p className="text-text-secondary mb-4">
              The Site may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, review sections, and other interactive features (collectively, "Interactive Services") that allow users to post, submit, publish, display, or transmit to other users or other persons (hereinafter, "post") content or materials (collectively, "User Contributions") on or through the Site.
            </p>
            <p className="text-text-secondary mb-4">
              All User Contributions must comply with the Content Standards set out in these Terms. Any User Contribution you post to the site will be considered non-confidential and non-proprietary. By providing any User Contribution on the Site, you grant us and our affiliates and service providers, and each of their and our respective licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">7. Monitoring and Enforcement; Termination</h2>
            <p className="text-text-secondary mb-4">
              We have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-text-secondary">
              <li>Remove or refuse to post any User Contributions for any or no reason in our sole discretion.</li>
              <li>Take any action with respect to any User Contribution that we deem necessary or appropriate in our sole discretion.</li>
              <li>Terminate or suspend your access to all or part of the Site for any or no reason, including without limitation, any violation of these Terms.</li>
            </ul>

            <h2 className="text-xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
            <p className="text-text-secondary mb-4">
              THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER AI DIRECTORATE NOR ANY PERSON ASSOCIATED WITH AI DIRECTORATE MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SITE.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">9. Limitation on Liability</h2>
            <p className="text-text-secondary mb-4">
              IN NO EVENT WILL AI DIRECTORATE, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE SITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
            <p className="text-text-secondary mb-4">
              These Terms and any dispute or claim arising out of, or related to, them, their subject matter or their formation shall be governed by and construed in accordance with the laws of the State of California, without giving effect to any choice or conflict of law provisions.
            </p>
            <p className="text-text-secondary mb-4">
              Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be instituted exclusively in the federal courts of the United States or the courts of the State of California, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant country.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">11. Contact Information</h2>
            <p className="text-text-secondary mb-4">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-text-secondary mb-4">
              Email: terms@aidirectorate.com<br />
              Address: 123 AI Avenue, Tech City, TC 12345
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
