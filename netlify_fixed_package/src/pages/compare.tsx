import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ComparisonTable from '../components/ComparisonTable';

// Mock data for demonstration
const mockTools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    features: {
      'Natural language understanding': true,
      'Multi-turn conversations': true,
      'Code generation': true,
      'Multiple languages support': true,
      'API access': true,
      'Custom training': false,
      'Offline usage': false,
      'Voice interface': 'Limited',
    },
    pricing: 'Freemium',
    rating: 4.8,
  },
  {
    id: 'claude',
    name: 'Claude',
    features: {
      'Natural language understanding': true,
      'Multi-turn conversations': true,
      'Code generation': true,
      'Multiple languages support': true,
      'API access': true,
      'Custom training': false,
      'Offline usage': false,
      'Voice interface': false,
    },
    pricing: 'Freemium',
    rating: 4.6,
  },
  {
    id: 'bard',
    name: 'Bard',
    features: {
      'Natural language understanding': true,
      'Multi-turn conversations': true,
      'Code generation': true,
      'Multiple languages support': true,
      'API access': true,
      'Custom training': false,
      'Offline usage': false,
      'Voice interface': true,
    },
    pricing: 'Free',
    rating: 4.3,
  }
];

const mockFeatureCategories = [
  {
    name: 'Core Capabilities',
    features: [
      'Natural language understanding',
      'Multi-turn conversations',
      'Code generation',
      'Multiple languages support',
    ],
  },
  {
    name: 'Access & Integration',
    features: [
      'API access',
      'Custom training',
      'Offline usage',
      'Voice interface',
    ],
  },
];

export default function Compare() {
  const [selectedTools, setSelectedTools] = React.useState(mockTools);

  return (
    <div className="min-h-screen bg-primary-background">
      <Head>
        <title>Compare AI Tools | AI Directorate</title>
        <meta name="description" content="Compare features, pricing, and ratings of the best AI tools side by side." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Compare AI Tools</h1>
          <p className="text-text-secondary max-w-3xl">
            Compare features, pricing, and ratings of different AI tools side by side to find the perfect solution for your needs.
          </p>
        </div>

        <div className="bg-primary-card p-6 rounded-card mb-8">
          <h2 className="text-xl font-bold mb-4">Currently Comparing</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            {selectedTools.map((tool) => (
              <div key={tool.id} className="flex items-center bg-primary-secondary px-3 py-2 rounded-full">
                <span>{tool.name}</span>
                <button className="ml-2 text-text-secondary hover:text-status-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            <button className="flex items-center bg-primary-secondary px-3 py-2 rounded-full text-accent-primary hover:bg-opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Tool
            </button>
          </div>
          
          <div className="mb-6">
            <h3 className="font-medium mb-2">Quick Add</h3>
            <div className="flex flex-wrap gap-2">
              <button className="bg-primary-secondary px-3 py-1 rounded-md text-sm hover:bg-opacity-80">
                Midjourney
              </button>
              <button className="bg-primary-secondary px-3 py-1 rounded-md text-sm hover:bg-opacity-80">
                DALL-E
              </button>
              <button className="bg-primary-secondary px-3 py-1 rounded-md text-sm hover:bg-opacity-80">
                Stable Diffusion
              </button>
              <button className="bg-primary-secondary px-3 py-1 rounded-md text-sm hover:bg-opacity-80">
                Jasper
              </button>
            </div>
          </div>
        </div>

        <div className="bg-primary-card p-6 rounded-card mb-8">
          <ComparisonTable 
            tools={selectedTools}
            featureCategories={mockFeatureCategories}
          />
        </div>

        <div className="bg-primary-card p-6 rounded-card mb-8">
          <h2 className="text-xl font-bold mb-4">Pricing Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary-secondary">
                  <th className="p-4 text-left border-b border-primary-card">Plan</th>
                  {selectedTools.map((tool) => (
                    <th key={tool.id} className="p-4 text-center border-b border-primary-card min-w-[200px]">
                      {tool.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                  <td className="p-4 font-medium">Free</td>
                  <td className="p-4 text-center">Limited usage</td>
                  <td className="p-4 text-center">Limited usage</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                  <td className="p-4 font-medium">Basic</td>
                  <td className="p-4 text-center">$20/month</td>
                  <td className="p-4 text-center">$24/month</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                  <td className="p-4 font-medium">Pro</td>
                  <td className="p-4 text-center">$42/month</td>
                  <td className="p-4 text-center">$48/month</td>
                  <td className="p-4 text-center">-</td>
                </tr>
                <tr className="border-b border-primary-card hover:bg-primary-secondary/50">
                  <td className="p-4 font-medium">Enterprise</td>
                  <td className="p-4 text-center">Custom</td>
                  <td className="p-4 text-center">Custom</td>
                  <td className="p-4 text-center">Custom</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button className="btn-primary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg>
            Save Comparison
          </button>
          <button className="btn-secondary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export as PDF
          </button>
          <button className="btn-secondary flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>
      </main>

      <Footer className="mt-20" />
    </div>
  );
}
