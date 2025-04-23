import { Tool, Category, Review, BlogPost } from '../lib/types';
import toolsData from '../data/tools.json';
import categoriesData from '../data/categories.json';
import reviewsData from '../data/reviews.json';
import blogPostsData from '../data/blog-posts.json';

// Type assertions to ensure data matches our types
const tools: Tool[] = toolsData as Tool[];
const categories: Category[] = categoriesData as Category[];
const reviews: Review[] = reviewsData as Review[];
const blogPosts: BlogPost[] = blogPostsData as BlogPost[];

// Get all tools
export function getAllTools(): Tool[] {
  return tools;
}

// Get featured tools
export function getFeaturedTools(): Tool[] {
  return tools.filter(tool => tool.isFeatured);
}

// Get trending tools
export function getTrendingTools(): Tool[] {
  return tools.filter(tool => tool.isTrending);
}

// Get tool by slug
export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug);
}

// Get tools by category
export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.categoryIds.includes(categoryId));
}

// Get all categories
export function getAllCategories(): Category[] {
  return categories;
}

// Get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}

// Get reviews by tool ID
export function getReviewsByToolId(toolId: string): Review[] {
  return reviews.filter(review => review.toolId === toolId);
}

// Get all blog posts
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

// Get featured blog posts
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.isFeatured);
}

// Get blog post by slug
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Search tools by query
export function searchTools(query: string): Tool[] {
  const lowercaseQuery = query.toLowerCase();
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseQuery) || 
    tool.description.toLowerCase().includes(lowercaseQuery) ||
    tool.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}

// Filter tools by multiple criteria
export interface FilterOptions {
  categoryIds?: string[];
  pricingModels?: ('free' | 'freemium' | 'paid' | 'subscription')[];
  features?: string[];
  minRating?: number;
}

export function filterTools(options: FilterOptions): Tool[] {
  return tools.filter(tool => {
    // Filter by categories
    if (options.categoryIds && options.categoryIds.length > 0) {
      if (!options.categoryIds.some(catId => tool.categoryIds.includes(catId))) {
        return false;
      }
    }
    
    // Filter by pricing model
    if (options.pricingModels && options.pricingModels.length > 0) {
      if (!options.pricingModels.includes(tool.pricing.model)) {
        return false;
      }
    }
    
    // Filter by features
    if (options.features && options.features.length > 0) {
      if (!options.features.every(feature => tool.features.includes(feature))) {
        return false;
      }
    }
    
    // Filter by minimum rating
    if (options.minRating !== undefined) {
      if (tool.averageRating < options.minRating) {
        return false;
      }
    }
    
    return true;
  });
}

// Compare tools
export function compareTools(toolIds: string[]): Tool[] {
  return tools.filter(tool => toolIds.includes(tool.id));
}
