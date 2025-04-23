import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>AI Directorate - Discover the Best AI Tools</title>
        <meta name="description" content="Explore the top AI tools for various use cases. Compare features and find the right solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-text-primary">AIDIRECTORATE</div>
        <nav className="hidden md:flex space-x-8">
          <Link href="/categories" className="text-text-primary hover:text-accent-primary transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-text-primary hover:text-accent-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-text-primary hover:text-accent-primary transition-colors">
            Blog
          </Link>
          <Link href="/submit" className="btn-primary">
            Submit
          </Link>
        </nav>
        <button className="md:hidden text-text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-text-primary">
            Discover the <br className="md:hidden" />
            Best AI Tools
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Explore the top AI tools for various use cases. Compare features and find the right solutions.
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search tools..."
              className="search-input"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </section>

        {/* Top AI Tools Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="section-title">Top AI Tools</h2>
            <Link href="/tools" className="text-accent-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* ChatGPT Card */}
            <div className="card">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">ChatGPT</h3>
                  <p className="text-text-secondary mb-2">ConversationalAI chatbot</p>
                  <div className="flex items-center">
                    <span className="bg-primary-secondary text-sm px-3 py-1 rounded-full">Chatbot</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* DALL-E Card */}
            <div className="card">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">DALL-E</h3>
                  <p className="text-text-secondary mb-2">AI image generation tool</p>
                  <div className="flex items-center">
                    <span className="bg-primary-secondary text-sm px-3 py-1 rounded-full">Image Generation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Notion Card */}
            <div className="card">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Notion</h3>
                  <p className="text-text-secondary mb-2">App for notes, tasks, and more</p>
                  <div className="flex items-center">
                    <span className="bg-primary-secondary text-sm px-3 py-1 rounded-full">Productivity</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copy.ai Card */}
            <div className="card">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Copy.ai</h3>
                  <p className="text-text-secondary mb-2">AI-powered copywriting assistant</p>
                  <div className="flex items-center">
                    <span className="bg-primary-secondary text-sm px-3 py-1 rounded-full">Writing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Category Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="section-title">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Chatbots Category */}
            <div className="card text-center py-8">
              <div className="category-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-medium">Chatbots</h3>
            </div>
            
            {/* Image Generation Category */}
            <div className="card text-center py-8">
              <div className="category-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium">Image Generation</h3>
            </div>
            
            {/* Productivity Category */}
            <div className="card text-center py-8">
              <div className="category-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-medium">Productivity</h3>
            </div>
            
            {/* Writing Category */}
            <div className="card text-center py-8">
              <div className="category-icon mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="font-medium">Writing</h3>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary-secondary mt-20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/privacy-policy" className="text-text-secondary hover:text-text-primary mr-6">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-text-secondary hover:text-text-primary">
                Terms of Service
              </Link>
            </div>
            <div className="text-text-secondary">
              © 2025 AIDirectorate
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
