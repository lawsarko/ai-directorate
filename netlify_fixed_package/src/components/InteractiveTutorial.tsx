import React, { useState } from 'react';
import { Tool } from '../lib/types';

type InteractiveTutorialProps = {
  tool: Tool;
  tutorial?: {
    title: string;
    description: string;
    steps: {
      title: string;
      content: string;
      imageUrl?: string;
    }[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime: string;
  };
};

// Mock tutorial data - in a real implementation, this would come from a database
const mockTutorial = {
  title: 'Getting Started with ChatGPT',
  description: 'Learn how to use ChatGPT effectively for various tasks including content creation, research, and problem-solving.',
  steps: [
    {
      title: 'Setting Up Your Account',
      content: 'Create an account on OpenAI\'s platform to access ChatGPT. Navigate to chat.openai.com and follow the registration process. You can use the free tier to start, or subscribe to ChatGPT Plus for additional features.',
      imageUrl: '/images/tutorials/chatgpt-signup.jpg'
    },
    {
      title: 'Understanding the Interface',
      content: 'The ChatGPT interface is straightforward. You type your prompts in the input field at the bottom of the screen. Previous messages appear above, creating a conversation thread. You can start a new conversation by clicking the "New Chat" button.',
      imageUrl: '/images/tutorials/chatgpt-interface.jpg'
    },
    {
      title: 'Crafting Effective Prompts',
      content: 'The key to getting good results from ChatGPT is writing clear, specific prompts. Be explicit about what you want, provide context, and specify the format you need. For example, instead of asking "Tell me about AI," try "Explain the concept of artificial intelligence in simple terms, focusing on how it\'s used in everyday applications. Include 3-4 examples."',
      imageUrl: '/images/tutorials/chatgpt-prompts.jpg'
    },
    {
      title: 'Using ChatGPT for Content Creation',
      content: 'ChatGPT excels at generating various types of content. You can ask it to write blog posts, social media updates, email templates, or creative stories. For best results, specify your target audience, tone, and key points you want to include.',
      imageUrl: '/images/tutorials/chatgpt-content.jpg'
    },
    {
      title: 'Research and Information Gathering',
      content: 'While ChatGPT isn\'t connected to the internet for real-time information, it can help with general research questions based on its training data. Use it to explain concepts, summarize topics, or generate ideas for further research.',
      imageUrl: '/images/tutorials/chatgpt-research.jpg'
    }
  ],
  difficulty: 'beginner',
  estimatedTime: '15 minutes'
};

export default function InteractiveTutorial({ 
  tool,
  tutorial = mockTutorial
}: InteractiveTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showTutorial, setShowTutorial] = useState(false);
  
  const handleNextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    } else {
      // Mark last step as completed if it's not already
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };
  
  const isStepCompleted = (index: number) => {
    return completedSteps.includes(index);
  };
  
  const progress = Math.round((completedSteps.length / tutorial.steps.length) * 100);
  
  return (
    <div className="bg-primary-card p-6 rounded-card">
      {!showTutorial ? (
        <div className="text-center">
          <h2 className="text-xl font-bold mb-3">Learn How to Use {tool.name}</h2>
          <p className="text-text-secondary mb-6">
            Follow our step-by-step tutorial to get the most out of {tool.name}.
          </p>
          <div className="bg-primary-secondary p-4 rounded-card mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold">{tutorial.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${
                tutorial.difficulty === 'beginner' ? 'bg-accent-secondary/20 text-accent-secondary' :
                tutorial.difficulty === 'intermediate' ? 'bg-status-warning/20 text-status-warning' :
                'bg-status-error/20 text-status-error'
              }`}>
                {tutorial.difficulty.charAt(0).toUpperCase() + tutorial.difficulty.slice(1)}
              </span>
            </div>
            <p className="text-text-secondary text-sm mb-3">{tutorial.description}</p>
            <div className="flex items-center text-sm text-text-secondary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tutorial.estimatedTime}</span>
              <span className="mx-2">•</span>
              <span>{tutorial.steps.length} steps</span>
            </div>
            <button 
              className="btn-primary w-full"
              onClick={() => setShowTutorial(true)}
            >
              Start Tutorial
            </button>
          </div>
          <a 
            href={`/tutorials?tool=${tool.id}`}
            className="text-accent-primary hover:underline"
          >
            View all tutorials for {tool.name} →
          </a>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{tutorial.title}</h2>
            <button 
              className="text-text-secondary hover:text-text-primary"
              onClick={() => setShowTutorial(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-text-secondary mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-accent-primary h-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          
          {/* Step navigation */}
          <div className="flex overflow-x-auto pb-2 mb-6">
            {tutorial.steps.map((step, index) => (
              <button
                key={index}
                className={`flex items-center px-3 py-2 mr-2 rounded-md text-sm whitespace-nowrap ${
                  currentStep === index 
                    ? 'bg-accent-primary text-white' 
                    : isStepCompleted(index)
                    ? 'bg-primary-secondary text-accent-primary'
                    : 'bg-primary-secondary text-text-secondary hover:text-text-primary'
                }`}
                onClick={() => handleStepClick(index)}
              >
                {isStepCompleted(index) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                )}
                <span>Step {index + 1}</span>
              </button>
            ))}
          </div>
          
          {/* Current step content */}
          <div className="bg-primary-secondary p-6 rounded-card mb-6">
            <h3 className="text-lg font-bold mb-3">
              {currentStep + 1}. {tutorial.steps[currentStep].title}
            </h3>
            <p className="text-text-secondary mb-4 whitespace-pre-line">
              {tutorial.steps[currentStep].content}
            </p>
            {tutorial.steps[currentStep].imageUrl && (
              <div className="rounded-md overflow-hidden mb-4">
                <img 
                  src={tutorial.steps[currentStep].imageUrl} 
                  alt={tutorial.steps[currentStep].title}
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-between">
            <button 
              className="btn-secondary"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
            >
              Previous Step
            </button>
            <button 
              className="btn-primary"
              onClick={handleNextStep}
            >
              {currentStep < tutorial.steps.length - 1 ? 'Next Step' : 'Complete Tutorial'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
