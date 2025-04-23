// Types for the AI tools directory

export type Tool = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  logoUrl?: string;
  websiteUrl: string;
  categoryIds: string[];
  features: string[];
  pricing: {
    model: 'free' | 'freemium' | 'paid' | 'subscription';
    startingPrice?: number;
    hasFreeTier: boolean;
    priceTiers?: PriceTier[];
  };
  screenshots: string[];
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  reviewCount: number;
  integrationCapabilities: string[];
  isFeatured: boolean;
  isTrending: boolean;
  affiliateLink?: string;
};

export type PriceTier = {
  name: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly' | 'one-time';
  features: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  toolCount: number;
  parentCategoryId?: string;
  createdAt: string;
  updatedAt: string;
};

export type Review = {
  id: string;
  toolId: string;
  userId: string;
  rating: number;
  title: string;
  content: string;
  pros: string[];
  cons: string[];
  featureRatings: {
    easeOfUse: number;
    valueForMoney: number;
    customerSupport: number;
    features: number;
  };
  createdAt: string;
  updatedAt: string;
  helpfulCount: number;
  verifiedPurchase: boolean;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
  savedComparisons: SavedComparison[];
  favoriteTools: string[];
  reviews: string[];
  isAdmin: boolean;
};

export type SavedComparison = {
  id: string;
  name: string;
  toolIds: string[];
  createdAt: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  authorId: string;
  featuredImage: string;
  categoryIds: string[];
  toolIds: string[];
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  isFeatured: boolean;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
};
