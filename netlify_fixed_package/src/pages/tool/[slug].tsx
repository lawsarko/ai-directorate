import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tool } from '../lib/types';
import { getToolBySlug, getReviewsByToolId } from '../lib/api';
import RatingBreakdown from '../components/RatingBreakdown';
import ReviewCard from '../components/ReviewCard';
import Link from 'next/link';

type ToolDetailPageProps = {
  tool: Tool;
  similarTools: Tool[];
};

export default function ToolDetail({ tool, similarTools }: ToolDetailPageProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const reviews = getReviewsByToolId(tool.id);
  
  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>{tool.name} - AI Tool | AI Directorate</title>
        <meta name="description" content={tool.description.substring(0, 160)} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-primary-card p-6 rounded-card mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="w-20 h-20 bg-primary-secondary rounded-md mr-6 flex items-center justify-center mb-4 md:mb-0">
              {tool.logoUrl ? (
                <img src={tool.logoUrl} alt={tool.name} className="w-16 h-16" />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )}
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{tool.name}</h1>
              <p className="text-text-secondary mb-3">{tool.shortDescription}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.categoryIds.map(categoryId => (
                  <Link 
                    key={categoryId}
                    href={`/category/${categoryId}`}
                    className="bg-primary-secondary text-sm px-3 py-1 rounded-full hover:bg-opacity-80"
                  >
                    {categoryId.replace(/-/g, ' ')}
                  </Link>
                ))}
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg 
                      key={star}
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-5 w-5 ${star <= Math.round(tool.averageRating) ? 'text-accent-primary' : 'text-primary-secondary'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2">{tool.averageRating.toFixed(1)}</span>
                  <span className="text-text-secondary ml-1">({tool.reviewCount})</span>
                </div>
                
                <div className="text-text-secondary">
                  <span className="capitalize">{tool.pricing.model}</span>
                  {tool.pricing.startingPrice ? (
                    <span> · Starting at ${tool.pricing.startingPrice}</span>
                  ) : null}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-3 mt-4 md:mt-0">
              <a 
                href={tool.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                Visit Website
              </a>
              <Link href={`/compare?tools=${tool.id}`} className="btn-secondary text-center">
                Add to Comparison
              </Link>
            </div>
          </div>
        </div>
        
        {/* Tabs Navigation */}
        <div className="border-b border-primary-secondary mb-8">
          <nav className="flex space-x-8">
            <button
              className={`py-4 font-medium border-b-2 ${
                activeTab === 'overview'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-4 font-medium border-b-2 ${
                activeTab === 'features'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
            <button
              className={`py-4 font-medium border-b-2 ${
                activeTab === 'pricing'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab('pricing')}
            >
              Pricing
            </button>
            <button
              className={`py-4 font-medium border-b-2 ${
                activeTab === 'reviews'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
            <button
              className={`py-4 font-medium border-b-2 ${
                activeTab === 'alternatives'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
              onClick={() => setActiveTab('alternatives')}
            >
              Alternatives
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-12">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">About {tool.name}</h2>
              <p className="text-text-secondary mb-6 whitespace-pre-line">{tool.description}</p>
              
              <h3 className="text-xl font-bold mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {tool.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              {tool.screenshots.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {tool.screenshots.map((screenshot, index) => (
                      <div key={index} className="bg-primary-secondary rounded-md overflow-hidden">
                        <img src={screenshot} alt={`${tool.name} screenshot ${index + 1}`} className="w-full h-auto" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {tool.integrationCapabilities.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold mb-3">Integrations</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.integrationCapabilities.map((integration, index) => (
                      <span key={index} className="bg-primary-secondary text-sm px-3 py-1 rounded-full">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tool.features.map((feature, index) => (
                  <div key={index} className="bg-primary-card p-4 rounded-card">
                    <h3 className="font-bold mb-2">{feature}</h3>
                    <p className="text-text-secondary">
                      {/* In a real implementation, we would have detailed feature descriptions */}
                      Detailed description of how {tool.name} implements this feature and its benefits.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Pricing Tab */}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Pricing</h2>
              <p className="text-text-secondary mb-6">
                {tool.name} offers a {tool.pricing.model} pricing model
                {tool.pricing.hasFreeTier ? ' with a free tier available' : ''}.
              </p>
              
              {tool.pricing.priceTiers && tool.pricing.priceTiers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tool.pricing.priceTiers.map((tier, index) => (
                    <div key={index} className="bg-primary-card p-6 rounded-card">
                      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                      <div className="mb-4">
                        <span className="text-2xl font-bold">${tier.price}</span>
                        <span className="text-text-secondary">
                          {tier.billingPeriod === 'monthly' ? '/month' : 
                           tier.billingPeriod === 'yearly' ? '/year' : 
                           tier.billingPeriod === 'one-time' ? ' one-time' : ''}
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={tool.websiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary w-full text-center"
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-primary-card p-6 rounded-card">
                  <p>Pricing details not available. Please visit the official website for more information.</p>
                  <a 
                    href={tool.websiteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary mt-4 inline-block"
                  >
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          )}
          
          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
                  {reviews.length > 0 ? (
                    <div>
                      {reviews.map(review => (
                        <ReviewCard 
                          key={review.id} 
                          review={review} 
                          userName={`User ${review.userId.slice(-4)}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-primary-card p-6 rounded-card">
                      <p>No reviews yet. Be the first to review {tool.name}!</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <RatingBreakdown reviews={reviews} />
                  
                  <div className="bg-primary-card p-6 rounded-card mt-6">
                    <h3 className="text-xl font-bold mb-4">Write a Review</h3>
                    <p className="text-text-secondary mb-4">
                      Share your experience with {tool.name} to help others make informed decisions.
                    </p>
                    <button className="btn-primary w-full">
                      Write a Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Alternatives Tab */}
          {activeTab === 'alternatives' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Alternatives to {tool.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {similarTools.map(tool => (
                  <div key={tool.id} className="bg-primary-card p-6 rounded-card">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4 flex items-center justify-center">
                        {tool.logoUrl ? (
                          <img src={tool.logoUrl} alt={tool.name} className="w-12 h-12" />
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                        <p className="text-text-secondary mb-2">{tool.shortDescription}</p>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-accent-primary" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1">{tool.averageRating.toFixed(1)}</span>
                          </div>
                          <span className="text-text-secondary text-sm">
                            {tool.pricing.model}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <Link href={`/tool/${tool.slug}`} className="btn-secondary text-sm py-1">
                            View Details
                          </Link>
                          <Link href={`/compare?tools=${tool.id}`} className="btn-secondary text-sm py-1">
                            Compare
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// In a real implementation, this would be a getServerSideProps or getStaticProps function
// that fetches the tool data from an API or database
export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);
  
  if (!tool) {
    return {
      notFound: true,
    };
  }
  
  // Get similar tools (same category)
  const similarTools = tool.categoryIds
    .flatMap(categoryId => getToolsByCategory(categoryId))
    .filter(t => t.id !== tool.id)
    .slice(0, 4);
  
  return {
    props: {
      tool,
      similarTools,
    },
  };
}
