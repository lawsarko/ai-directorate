import React, { useState } from 'react';

type CommunityChallenge = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  daysRemaining: number;
  participants: number;
  toolsRequired: string[];
  imageUrl?: string;
};

// Mock challenges data - in a real implementation, this would come from a database
const mockChallenges: CommunityChallenge[] = [
  {
    id: 'challenge1',
    title: "Create a Children's Book with AI",
    description: "Use AI tools to create a complete children's book with story, illustrations, and layout. Share your creation with the community!",
    category: 'Creative',
    difficulty: 'intermediate',
    daysRemaining: 12,
    participants: 248,
    toolsRequired: ['chatgpt', 'dall-e', 'midjourney'],
    imageUrl: '/images/challenges/childrens-book.jpg'
  },
  {
    id: 'challenge2',
    title: 'Build a No-Code Website in 24 Hours',
    description: 'Challenge yourself to build a complete website using AI and no-code tools in just 24 hours. Focus on a personal portfolio or small business site.',
    category: 'Development',
    difficulty: 'beginner',
    daysRemaining: 5,
    participants: 173,
    toolsRequired: ['chatgpt', 'copy-ai'],
    imageUrl: '/images/challenges/website-challenge.jpg'
  },
  {
    id: 'challenge3',
    title: 'AI-Powered Content Marketing Strategy',
    description: 'Develop a complete content marketing strategy for a fictional business using AI tools. Include content calendar, social media posts, and blog articles.',
    category: 'Marketing',
    difficulty: 'advanced',
    daysRemaining: 18,
    participants: 126,
    toolsRequired: ['chatgpt', 'copy-ai'],
    imageUrl: '/images/challenges/content-marketing.jpg'
  },
  {
    id: 'challenge4',
    title: 'Create a Short Film with AI',
    description: 'Use AI tools to script, storyboard, and create a 2-3 minute short film or animation. Explore how AI can enhance your creative filmmaking process.',
    category: 'Creative',
    difficulty: 'advanced',
    daysRemaining: 25,
    participants: 87,
    toolsRequired: ['chatgpt', 'dall-e', 'midjourney'],
    imageUrl: '/images/challenges/short-film.jpg'
  }
];

type CommunityChallengesProps = {
  initialChallenges?: CommunityChallenge[];
  userParticipating?: string[];
};

export default function CommunityChallenges({ 
  initialChallenges = mockChallenges,
  userParticipating = []
}: CommunityChallengesProps) {
  const [challenges] = useState<CommunityChallenge[]>(initialChallenges);
  const [participating, setParticipating] = useState<string[]>(userParticipating);
  const [activeFilter, setActiveFilter] = useState<'all' | 'creative' | 'development' | 'marketing'>('all');
  
  const filteredChallenges = activeFilter === 'all' 
    ? challenges 
    : challenges.filter(challenge => 
        challenge.category.toLowerCase() === activeFilter.toLowerCase()
      );
  
  const handleJoinChallenge = (challengeId: string) => {
    if (participating.includes(challengeId)) {
      setParticipating(participating.filter(id => id !== challengeId));
    } else {
      setParticipating([...participating, challengeId]);
    }
  };
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Community Challenges</h2>
        <div className="flex space-x-2">
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === 'all' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === 'creative' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveFilter('creative')}
          >
            Creative
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === 'development' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveFilter('development')}
          >
            Development
          </button>
          <button 
            className={`px-3 py-1 rounded-full text-sm ${
              activeFilter === 'marketing' 
                ? 'bg-accent-primary text-white' 
                : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
            }`}
            onClick={() => setActiveFilter('marketing')}
          >
            Marketing
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredChallenges.map(challenge => (
          <div key={challenge.id} className="bg-primary-secondary rounded-card overflow-hidden">
            {challenge.imageUrl && (
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${challenge.imageUrl})` }}
              ></div>
            )}
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold">{challenge.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  challenge.difficulty === 'beginner' ? 'bg-accent-secondary/20 text-accent-secondary' :
                  challenge.difficulty === 'intermediate' ? 'bg-status-warning/20 text-status-warning' :
                  'bg-status-error/20 text-status-error'
                }`}>
                  {challenge.difficulty.charAt(0).toUpperCase() + challenge.difficulty.slice(1)}
                </span>
              </div>
              
              <p className="text-text-secondary text-sm mb-4">{challenge.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.toolsRequired.map(tool => (
                  <span key={tool} className="text-xs bg-primary-background px-2 py-1 rounded-full">
                    {tool}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between items-center text-sm text-text-secondary mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{challenge.daysRemaining} days left</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>{challenge.participants} participants</span>
                </div>
              </div>
              
              <button 
                className={`w-full py-2 rounded-md text-center ${
                  participating.includes(challenge.id)
                    ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary'
                    : 'bg-accent-primary text-white'
                }`}
                onClick={() => handleJoinChallenge(challenge.id)}
              >
                {participating.includes(challenge.id) ? 'Leave Challenge' : 'Join Challenge'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <a href="/challenges" className="text-accent-primary hover:underline">
          View all community challenges →
        </a>
      </div>
    </div>
  );
}
