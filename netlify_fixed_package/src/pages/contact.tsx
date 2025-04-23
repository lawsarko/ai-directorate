import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Contact Us | AI Directorate</title>
        <meta name="description" content="Get in touch with the AI Directorate team. We'd love to hear from you!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-card p-6 rounded-card text-center">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Email Us</h2>
              <p className="text-text-secondary mb-4">For general inquiries and support</p>
              <a href="mailto:hello@aidirectorate.com" className="text-accent-primary hover:underline">hello@aidirectorate.com</a>
            </div>
            
            <div className="bg-primary-card p-6 rounded-card text-center">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Community</h2>
              <p className="text-text-secondary mb-4">Join our Discord community</p>
              <a href="https://discord.gg/aidirectorate" className="text-accent-primary hover:underline">discord.gg/aidirectorate</a>
            </div>
            
            <div className="bg-primary-card p-6 rounded-card text-center">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Business Inquiries</h2>
              <p className="text-text-secondary mb-4">For partnerships and business opportunities</p>
              <a href="mailto:business@aidirectorate.com" className="text-accent-primary hover:underline">business@aidirectorate.com</a>
            </div>
          </div>
          
          <div className="bg-primary-card p-8 rounded-card">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            {formStatus === 'success' ? (
              <div className="bg-status-success/10 border border-status-success text-status-success p-4 rounded-md mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We've received your inquiry and will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-primary mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-secondary border border-primary-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-primary mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-primary-secondary border border-primary-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-text-primary mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary-secondary border border-primary-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="tool-suggestion">Tool Suggestion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-text-primary mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-primary-secondary border border-primary-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="bg-accent-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="mt-12 bg-primary-card p-8 rounded-card">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2">How do you select AI tools for the directory?</h3>
                <p className="text-text-secondary">
                  We evaluate AI tools based on functionality, user experience, innovation, and reliability. Our team tests each tool before adding it to the directory, and we regularly update listings to ensure information remains current.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Can I suggest a tool to be added to the directory?</h3>
                <p className="text-text-secondary">
                  Absolutely! We welcome tool suggestions from our community. You can submit a tool for consideration using our contact form above or by emailing suggestions@aidirectorate.com with details about the tool.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">How can I partner with AI Directorate?</h3>
                <p className="text-text-secondary">
                  We're open to partnerships that align with our mission of making AI tools more accessible. Please contact us at business@aidirectorate.com with details about your organization and partnership ideas.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Do you offer advertising opportunities?</h3>
                <p className="text-text-secondary">
                  Yes, we offer sponsored listings and featured tool placements. However, we maintain strict editorial independence, and all sponsored content is clearly labeled. Contact advertising@aidirectorate.com for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
