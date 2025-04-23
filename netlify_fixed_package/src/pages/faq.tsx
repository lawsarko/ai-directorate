import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Frequently Asked Questions | AI Directorate</title>
        <meta name="description" content="Find answers to common questions about AI Directorate and AI tools." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-primary-card p-8 rounded-card">
          <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">About AI Directorate</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">What is AI Directorate?</h3>
                  <p className="text-text-secondary">
                    AI Directorate is a comprehensive directory of artificial intelligence tools designed to help users discover, compare, and learn about the most innovative AI solutions available today. We categorize tools by use case, features, and industry to make finding the right AI tool for your needs simple and efficient.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">Is AI Directorate free to use?</h3>
                  <p className="text-text-secondary">
                    Yes, AI Directorate is completely free for users to browse, search, and compare AI tools. We maintain our platform through partnerships with AI tool providers and carefully selected advertisements that don't interfere with the user experience.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How do you select AI tools for the directory?</h3>
                  <p className="text-text-secondary">
                    We evaluate AI tools based on functionality, user experience, innovation, and reliability. Our team tests each tool before adding it to the directory, and we regularly update listings to ensure information remains current. We prioritize tools that offer genuine value to users and maintain a high standard of quality.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Using the Platform</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How do I find the right AI tool for my needs?</h3>
                  <p className="text-text-secondary">
                    You can find AI tools in several ways:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Browse by category (Writing, Image Generation, Productivity, etc.)</li>
                    <li>Filter by industry (Medical, Legal, Finance, etc.)</li>
                    <li>Use the search function to find tools by name or keyword</li>
                    <li>Use the advanced filtering system to narrow down tools by specific features, pricing models, or ratings</li>
                    <li>Check out our comparison dashboard to see side-by-side evaluations of similar tools</li>
                  </ul>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How do I use the comparison dashboard?</h3>
                  <p className="text-text-secondary">
                    Our comparison dashboard allows you to select multiple AI tools and compare them side-by-side across various metrics. To use it:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-text-secondary">
                    <li>Navigate to the Tools page and select the tools you want to compare</li>
                    <li>Click the "Compare Selected" button</li>
                    <li>View the detailed comparison chart showing features, pricing, ratings, and more</li>
                    <li>Customize the comparison by selecting which metrics matter most to you</li>
                  </ol>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">Can I save my favorite tools?</h3>
                  <p className="text-text-secondary">
                    Yes! Create a free account to save your favorite tools, track tools you've used, and receive personalized recommendations based on your interests and usage patterns. You can also set reminders for free trial expirations and receive updates when tools you're interested in release new features.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Reviews and Ratings</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How are AI tools rated?</h3>
                  <p className="text-text-secondary">
                    AI tools on our platform are rated through a combination of:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Expert evaluations by our team of AI specialists</li>
                    <li>User reviews and ratings from our community</li>
                    <li>Performance metrics across key categories like ease of use, output quality, and value for money</li>
                  </ul>
                  <p className="text-text-secondary mt-2">
                    We use a 5-star rating system with detailed breakdowns for specific aspects of each tool.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">Can I submit my own reviews?</h3>
                  <p className="text-text-secondary">
                    Absolutely! We encourage users to share their experiences with AI tools. To submit a review:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-text-secondary">
                    <li>Create or log into your account</li>
                    <li>Navigate to the tool's page</li>
                    <li>Click "Write a Review"</li>
                    <li>Rate the tool across various categories and share your experience</li>
                  </ol>
                  <p className="text-text-secondary mt-2">
                    Your reviews help other users make informed decisions and contribute to our community knowledge base.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How do you ensure reviews are authentic?</h3>
                  <p className="text-text-secondary">
                    We take review authenticity seriously and employ several measures to maintain integrity:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Account verification requirements for reviewers</li>
                    <li>AI-powered detection of suspicious review patterns</li>
                    <li>Manual review of flagged content</li>
                    <li>Clear disclosure of any sponsored or affiliate relationships</li>
                    <li>Community reporting system for questionable reviews</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">For AI Tool Providers</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How can I add my AI tool to the directory?</h3>
                  <p className="text-text-secondary">
                    If you've developed an AI tool that you'd like to list in our directory, you can submit it for consideration through our "Submit" page. Our team will review your submission based on our quality criteria and reach out with next steps. Basic listings are free, while premium listings with enhanced visibility and features are available for a fee.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">What are the benefits of a premium listing?</h3>
                  <p className="text-text-secondary">
                    Premium listings offer several advantages:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Featured placement in search results and category pages</li>
                    <li>Enhanced listing with additional media, videos, and detailed specifications</li>
                    <li>Access to user engagement analytics and review insights</li>
                    <li>Ability to respond officially to user reviews</li>
                    <li>Promotional opportunities in our newsletter and social media</li>
                  </ul>
                  <p className="text-text-secondary mt-2">
                    Contact our partnerships team at business@aidirectorate.com for pricing and details.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How can I update information about my tool?</h3>
                  <p className="text-text-secondary">
                    To update information about your listed tool, please contact us at listings@aidirectorate.com with your tool name and the changes you'd like to make. For premium listings, you can access a self-service dashboard to make updates directly.
                  </p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Community and Support</h2>
              
              <div className="space-y-6">
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How can I participate in community challenges?</h3>
                  <p className="text-text-secondary">
                    Our monthly community challenges are open to all registered users. To participate:
                  </p>
                  <ol className="list-decimal pl-6 mt-2 text-text-secondary">
                    <li>Create or log into your account</li>
                    <li>Visit the "Community Challenges" section</li>
                    <li>Browse active challenges and click "Join Challenge" on the one you want to participate in</li>
                    <li>Follow the challenge guidelines and submit your entry before the deadline</li>
                    <li>Share your process and results with the community</li>
                  </ol>
                  <p className="text-text-secondary mt-2">
                    Challenges are a great way to explore new AI tools, learn from others, and showcase your creativity.
                  </p>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">Where can I get help if I have questions?</h3>
                  <p className="text-text-secondary">
                    We offer several support channels:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Check our comprehensive FAQ section (you're here now!)</li>
                    <li>Visit our Help Center for detailed guides and tutorials</li>
                    <li>Join our Discord community to connect with other users and our team</li>
                    <li>Contact us directly through our Contact page</li>
                    <li>Email support@aidirectorate.com for specific issues</li>
                  </ul>
                </div>
                
                <div className="bg-primary-secondary p-6 rounded-card">
                  <h3 className="text-lg font-bold mb-2">How can I stay updated on new AI tools and features?</h3>
                  <p className="text-text-secondary">
                    To stay informed about the latest in AI tools and platform updates:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-text-secondary">
                    <li>Subscribe to our weekly newsletter</li>
                    <li>Follow us on social media (Twitter, LinkedIn, Instagram)</li>
                    <li>Enable notifications in your account settings</li>
                    <li>Check our Blog for in-depth articles and news</li>
                    <li>Visit the "What's New" section on our homepage</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <div className="bg-primary-secondary p-6 rounded-card">
              <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
              <p className="text-text-secondary mb-4">
                If you couldn't find the answer you were looking for, please don't hesitate to reach out to us.
              </p>
              <a href="/contact" className="bg-accent-primary text-white px-6 py-3 rounded-md font-medium hover:bg-accent-primary/90 transition-colors inline-block">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
