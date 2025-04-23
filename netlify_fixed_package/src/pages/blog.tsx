import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Blog | AI Directorate</title>
        <meta name="description" content="Explore the latest insights, tutorials, and news about AI tools and technology." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">AI Directorate Blog</h1>
          
          <div className="mb-12">
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto bg-primary-secondary">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-tools-students.jpg')" }}></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="text-accent-primary text-sm font-medium">FEATURED</span>
                  <h2 className="text-2xl font-bold mt-2 mb-4">Top 10 AI Tools for Students in 2025</h2>
                  <p className="text-text-secondary mb-6">
                    Discover how artificial intelligence can transform your academic experience with these powerful tools designed specifically for students.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary-secondary flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-text-primary text-sm font-medium">Maya Rodriguez</p>
                        <p className="text-text-secondary text-xs">April 15, 2025</p>
                      </div>
                    </div>
                    <a href="/blog/top-ai-tools-for-students-2025" className="text-accent-primary hover:underline">Read Article →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-image-generators.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">AI Image Generators Compared: DALL-E vs Midjourney vs Stable Diffusion in 2025</h2>
                <p className="text-text-secondary mb-4">
                  A comprehensive comparison of the leading AI image generation tools, examining their strengths, limitations, and ideal use cases.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">April 10, 2025</p>
                  <a href="/blog/ai-image-generators-compared-2025" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/freelance-ai-tools.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">How to Use AI Tools to Boost Your Freelance Business in 2025</h2>
                <p className="text-text-secondary mb-4">
                  Discover how freelancers across various industries can leverage AI tools to enhance productivity, improve deliverables, and scale their businesses.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">April 5, 2025</p>
                  <a href="/blog/how-to-use-ai-tools-boost-freelance-business" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-content-creation.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">The Ultimate Guide to AI Content Creation Tools in 2025</h2>
                <p className="text-text-secondary mb-4">
                  Explore the latest AI-powered tools for creating high-quality content across text, images, video, and audio formats.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">March 28, 2025</p>
                  <a href="/blog/ultimate-guide-ai-content-creation-tools" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-coding-tools.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">10 AI Coding Tools That Will Make You a Better Developer</h2>
                <p className="text-text-secondary mb-4">
                  From code generation to debugging assistance, these AI tools are transforming how developers work and enhancing productivity.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">March 20, 2025</p>
                  <a href="/blog/ai-coding-tools-better-developer" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-marketing-tools.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">AI Marketing Tools That Deliver Real ROI in 2025</h2>
                <p className="text-text-secondary mb-4">
                  Discover which AI marketing tools are delivering measurable results for businesses of all sizes, from startups to enterprises.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">March 15, 2025</p>
                  <a href="/blog/ai-marketing-tools-real-roi" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-card rounded-card overflow-hidden">
              <div className="h-48 bg-primary-secondary">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/blog/ai-ethics.jpg')" }}></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">Ethical Considerations When Using AI Tools: A Practical Guide</h2>
                <p className="text-text-secondary mb-4">
                  Navigate the complex ethical landscape of AI with this comprehensive guide to responsible AI tool usage and implementation.
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-text-secondary text-sm">March 8, 2025</p>
                  <a href="/blog/ethical-considerations-ai-tools" className="text-accent-primary hover:underline">Read Article →</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-accent-primary text-sm font-medium text-white">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                2
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary">
                ...
              </span>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                8
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                9
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                10
              </a>
              <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-primary-border bg-primary-card text-sm font-medium text-text-secondary hover:bg-primary-secondary">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
          
          <div className="mt-16 bg-primary-card p-8 rounded-card">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-text-secondary">
                  Get the latest insights on AI tools, tutorials, and industry trends delivered straight to your inbox.
                </p>
              </div>
              <div className="md:w-1/3">
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-grow bg-primary-secondary border border-primary-border rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                  />
                  <button
                    type="submit"
                    className="bg-accent-primary text-white px-4 py-2 rounded-r-md font-medium hover:bg-accent-primary/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
