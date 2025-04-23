import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>About Us | AI Directorate</title>
        <meta name="description" content="Learn about AI Directorate - Your comprehensive guide to the world of artificial intelligence tools." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-primary-card p-8 rounded-card">
          <h1 className="text-3xl font-bold mb-6">About AI Directorate</h1>
          
          <div className="prose prose-invert max-w-none">
            <h2 className="text-xl font-bold mt-8 mb-4">Our Mission</h2>
            <p className="text-text-secondary mb-6">
              At AI Directorate, our mission is to demystify artificial intelligence tools and make them accessible to everyone. We believe that AI has the power to transform how we work, create, and solve problems, but only if people can find the right tools for their specific needs.
            </p>
            <p className="text-text-secondary mb-6">
              We've created a comprehensive, user-friendly platform that helps you discover, compare, and learn about the most innovative AI tools available today. Whether you're a student, professional, creative, or entrepreneur, we're here to guide you through the rapidly evolving AI landscape.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Our Story</h2>
            <p className="text-text-secondary mb-6">
              AI Directorate was founded in 2025 by a team of AI enthusiasts who were frustrated by how difficult it was to find reliable information about AI tools. With new AI solutions launching daily, keeping track of the best options became increasingly challenging.
            </p>
            <p className="text-text-secondary mb-6">
              We started by creating a simple spreadsheet of our favorite AI tools, categorizing them by use case and features. As friends and colleagues began requesting access to our resource, we realized there was a significant need for a dedicated platform that could help people navigate the AI ecosystem.
            </p>
            <p className="text-text-secondary mb-6">
              Today, AI Directorate has grown into a comprehensive directory featuring hundreds of AI tools across multiple categories, with detailed reviews, comparisons, and educational resources to help you make informed decisions.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-secondary p-6 rounded-card">
                <h3 className="text-lg font-bold mb-3">Accessibility</h3>
                <p className="text-text-secondary">
                  We believe AI should be accessible to everyone, regardless of technical background. We explain complex concepts in simple terms and highlight tools that are user-friendly and approachable.
                </p>
              </div>
              <div className="bg-primary-secondary p-6 rounded-card">
                <h3 className="text-lg font-bold mb-3">Transparency</h3>
                <p className="text-text-secondary">
                  We provide honest, unbiased information about AI tools, including their limitations. We clearly disclose any affiliate relationships and never accept payment for favorable reviews.
                </p>
              </div>
              <div className="bg-primary-secondary p-6 rounded-card">
                <h3 className="text-lg font-bold mb-3">Education</h3>
                <p className="text-text-secondary">
                  We're committed to helping people understand how to use AI effectively and ethically. Our tutorials, guides, and community challenges are designed to build AI literacy.
                </p>
              </div>
              <div className="bg-primary-secondary p-6 rounded-card">
                <h3 className="text-lg font-bold mb-3">Community</h3>
                <p className="text-text-secondary">
                  We foster a supportive community where people can share experiences, ask questions, and learn from each other. We believe collective wisdom leads to better AI adoption.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-secondary p-6 rounded-card text-center">
                <div className="w-24 h-24 bg-primary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">Alex Chen</h3>
                <p className="text-accent-primary mb-2">Founder & CEO</p>
                <p className="text-text-secondary text-sm">
                  Former AI researcher with a passion for making technology accessible to everyone.
                </p>
              </div>
              <div className="bg-primary-secondary p-6 rounded-card text-center">
                <div className="w-24 h-24 bg-primary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">Maya Rodriguez</h3>
                <p className="text-accent-primary mb-2">Head of Content</p>
                <p className="text-text-secondary text-sm">
                  Tech journalist specializing in explaining complex technologies in simple terms.
                </p>
              </div>
              <div className="bg-primary-secondary p-6 rounded-card text-center">
                <div className="w-24 h-24 bg-primary-background rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1">Jamal Washington</h3>
                <p className="text-accent-primary mb-2">Technical Director</p>
                <p className="text-text-secondary text-sm">
                  Software engineer with expertise in AI integration and user experience design.
                </p>
              </div>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">Join Our Community</h2>
            <p className="text-text-secondary mb-6">
              AI Directorate is more than just a directory—it's a community of AI enthusiasts, professionals, and curious minds. We invite you to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-text-secondary">
              <li>Share your experiences with AI tools through reviews and ratings</li>
              <li>Participate in our monthly community challenges</li>
              <li>Join discussions about the future of AI</li>
              <li>Suggest new tools and features for our platform</li>
              <li>Follow us on social media for the latest AI news and updates</li>
            </ul>
            <p className="text-text-secondary mb-6">
              Together, we can build a more informed, creative, and productive AI community.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-text-secondary mb-6">
              Have questions, suggestions, or feedback? We'd love to hear from you! Visit our <Link href="/contact" className="text-accent-primary hover:underline">Contact page</Link> to get in touch with our team.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
