import { Industry } from '../lib/types';

export function updateToolTypes() {
  return `
export type Industry = {
  id: string;
  name: string;
  icon: string;
  description: string;
  toolCount: number;
};

export type Tool = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  website: string;
  categories: string[];
  industries?: string[];
  features: string[];
  pricing: 'free' | 'freemium' | 'paid';
  pricingDetails?: {
    free?: boolean;
    freeTrial?: boolean;
    freeTrialDays?: number;
    startingPrice?: number;
    hasTiers?: boolean;
  };
  rating: number;
  reviewCount: number;
  featured?: boolean;
  new?: boolean;
  logoUrl?: string;
  screenshotUrls?: string[];
  lastUpdated: string;
  companyName?: string;
  yearFounded?: number;
  headquarters?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
};

export type Review = {
  id: string;
  toolId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  date: string;
  helpfulCount: number;
  verified: boolean;
  ratingBreakdown?: {
    easeOfUse: number;
    features: number;
    valueForMoney: number;
    customerSupport: number;
    performance: number;
  };
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  date: string;
  categories: string[];
  tags: string[];
  featuredImage?: string;
  readTime: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  toolCount: number;
  featured?: boolean;
};
`;
}
