import React, { useState, useEffect } from 'react';
import { Tool } from '../lib/types';

type AINewsCardProps = {
  title: string;
  date: string;
  excerpt: string;
  imageUrl?: string;
  source: string;
  url: string;
};

type AINewsFeedProps = {
  relatedTools?: Tool[];
};

// Mock news data - in a real implementation, this would come from an API
const mockNews = [
  {
    id: 'news1',
    title: 'OpenAI Releases GPT-5 with Enhanced Multimodal Capabilities',
    date: '2025-04-15T00:00:00Z',
    excerpt: 'OpenAI has announced the release of GPT-5, featuring significant improvements in understanding and generating content across text, images, audio, and video.',
    imageUrl: '/images/news/gpt5-release.jpg',
    source: 'TechCrunch',
    url: 'https://techcrunch.com/2025/04/15/openai-gpt5-release/',
    relatedToolIds: ['chatgpt']
  },
  {
    id: 'news2',
    title: 'Midjourney v7 Introduces Real-Time Video Generation',
    date: '2025-04-10T00:00:00Z',
    excerpt: 'Midjourney has launched version 7 of its AI image generator with a groundbreaking feature: the ability to generate short video clips from text prompts in real-time.',
    imageUrl: '/images/news/midjourney-v7.jpg',
    source: 'The Verge',
    url: 'https://www.theverge.com/2025/4/10/midjourney-v7-video-generation',
    relatedToolIds: ['midjourney']
  },
  {
    id: 'news3',
    title: 'AI Writing Tools Now Used by 78% of Content Marketers',
    date: '2025-04-05T00:00:00Z',
    excerpt: 'A new survey reveals that 78% of content marketing professionals now use AI writing tools to assist with content creation, up from 45% in 2023.',
    imageUrl: '/images/news/ai-writing-survey.jpg',
    source: 'Content Marketing Institute',
    url: 'https://contentmarketinginstitute.com/2025/04/ai-writing-tools-survey-2025',
    relatedToolIds: ['copy-ai']
  },
  {
    id: 'news4',
    title: 'Notion AI Gets Major Update with Document Analysis Features',
    date: '2025-03-28T00:00:00Z',
    excerpt: 'Notion has rolled out a significant update to its AI capabilities, introducing advanced document analysis features that can summarize, categorize, and extract insights from large documents.',
    imageUrl: '/images/news/notion-update.jpg',
    source: 'ProductHunt',
    url: 'https://www.producthunt.com/posts/notion-ai-document-analysis',
    relatedToolIds: ['notion']
  },
  {
    id: 'news5',
    title: 'EU Announces New Regulations for AI Tool Transparency',
    date: '2025-03-22T00:00:00Z',
    excerpt: 'The European Union has announced new regulations requiring AI tool providers to increase transparency about how their systems work and what data they use for training.',
    imageUrl: '/images/news/eu-ai-regulations.jpg',
    source: 'Reuters',
    url: 'https://www.reuters.com/technology/eu-announces-new-ai-transparency-regulations-2025-03-22/',
    relatedToolIds: []
  }
];

export default function AINewsFeed({ relatedTools = [] }: AINewsFeedProps) {
  const [news, setNews] = useState<typeof mockNews>([]);
  const [activeTab, setActiveTab] = useState<'all' | 'related'>('all');
  
  useEffect(() => {
    if (activeTab === 'all') {
      setNews(mockNews);
    } else if (activeTab === 'related' && relatedTools.length > 0) {
      const relatedToolIds = relatedTools.map(tool => tool.id);
      const filteredNews = mockNews.filter(newsItem => 
        newsItem.relatedToolIds.some(id => relatedToolIds.includes(id))
      );
      setNews(filteredNews.length > 0 ? filteredNews : mockNews);
    }
  }, [activeTab, relatedTools]);
  
  // Define the formatDate function here to fix the build error
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">AI News & Updates</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === 'all' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('all')}
          >
            All News
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeTab === 'related' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveTab('related')}
            disabled={relatedTools.length === 0}
          >
            Related News
          </button>
        </div>
      </div>
      
      <div className="space-y-6">
        {news.map(item => (
          <AINewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            excerpt={item.excerpt}
            imageUrl={item.imageUrl}
            source={item.source}
            url={item.url}
          />
        ))}
        
        {news.length === 0 && (
          <div className="text-center py-8">
            <p className="text-text-secondary">No related news found. View all news instead.</p>
            <button 
              className="mt-4 btn-secondary"
              onClick={() => setActiveTab('all')}
            >
              View All News
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-6 text-center">
        <a href="/news" className="text-accent-primary hover:underline">
          View all AI news and updates →
        </a>
      </div>
    </div>
  );
}

function AINewsCard({ title, date, excerpt, imageUrl, source, url }: AINewsCardProps) {
  // Define the formatDate function here as well for the component scope
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block bg-primary-secondary rounded-card overflow-hidden hover:translate-y-[-4px] transition-all"
    >
      <div className="flex flex-col md:flex-row">
        {imageUrl && (
          <div className="md:w-1/4 h-48 md:h-auto">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
          </div>
        )}
        <div className={`p-4 ${imageUrl ? 'md:w-3/4' : 'w-full'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-accent-primary">{source}</span>
            <span className="text-xs text-text-secondary">{formatDate(date)}</span>
          </div>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-text-secondary text-sm mb-3">{excerpt}</p>
          <span className="text-accent-primary text-sm">Read more →</span>
        </div>
      </div>
    </a>
  );
}
