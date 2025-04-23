import React from 'react';
import { Review } from '../lib/types';

type RatingBreakdownProps = {
  reviews: Review[];
};

export default function RatingBreakdown({ reviews }: RatingBreakdownProps) {
  // Calculate average ratings
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  // Calculate feature-specific average ratings
  const calculateFeatureRatings = () => {
    if (reviews.length === 0) return {
      easeOfUse: 0,
      valueForMoney: 0,
      customerSupport: 0,
      features: 0
    };

    const sum = reviews.reduce(
      (acc, review) => ({
        easeOfUse: acc.easeOfUse + review.featureRatings.easeOfUse,
        valueForMoney: acc.valueForMoney + review.featureRatings.valueForMoney,
        customerSupport: acc.customerSupport + review.featureRatings.customerSupport,
        features: acc.features + review.featureRatings.features
      }),
      { easeOfUse: 0, valueForMoney: 0, customerSupport: 0, features: 0 }
    );

    return {
      easeOfUse: sum.easeOfUse / reviews.length,
      valueForMoney: sum.valueForMoney / reviews.length,
      customerSupport: sum.customerSupport / reviews.length,
      features: sum.features / reviews.length
    };
  };

  // Calculate rating distribution (5 star, 4 star, etc.)
  const calculateRatingDistribution = () => {
    const distribution = [0, 0, 0, 0, 0]; // 5, 4, 3, 2, 1 stars
    
    reviews.forEach(review => {
      const ratingIndex = Math.floor(review.rating) - 1;
      if (ratingIndex >= 0 && ratingIndex < 5) {
        distribution[4 - ratingIndex]++;
      }
    });
    
    return distribution;
  };

  const averageRating = calculateAverageRating();
  const featureRatings = calculateFeatureRatings();
  const ratingDistribution = calculateRatingDistribution();
  const totalReviews = reviews.length;

  // Calculate percentage for each rating level
  const getPercentage = (count: number) => {
    if (totalReviews === 0) return 0;
    return (count / totalReviews) * 100;
  };

  return (
    <div className="bg-primary-card p-6 rounded-card">
      <h3 className="text-xl font-bold mb-4">Rating Breakdown</h3>
      
      {/* Overall Rating */}
      <div className="flex items-center mb-6">
        <div className="text-4xl font-bold text-accent-primary mr-4">
          {averageRating.toFixed(1)}
        </div>
        <div>
          <div className="flex items-center mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg 
                key={star}
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ${star <= Math.round(averageRating) ? 'text-accent-primary' : 'text-primary-secondary'}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="text-text-secondary text-sm">
            Based on {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
          </div>
        </div>
      </div>
      
      {/* Rating Distribution */}
      <div className="mb-6">
        <h4 className="font-medium mb-3">Rating Distribution</h4>
        {[5, 4, 3, 2, 1].map((rating, index) => (
          <div key={rating} className="flex items-center mb-2">
            <div className="w-12 text-sm">{rating} stars</div>
            <div className="flex-1 mx-2">
              <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-accent-primary h-full"
                  style={{ width: `${getPercentage(ratingDistribution[index])}%` }}
                ></div>
              </div>
            </div>
            <div className="w-12 text-right text-sm">
              {ratingDistribution[index]} ({getPercentage(ratingDistribution[index]).toFixed(0)}%)
            </div>
          </div>
        ))}
      </div>
      
      {/* Feature Ratings */}
      <div>
        <h4 className="font-medium mb-3">Feature Ratings</h4>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Ease of Use</span>
              <span className="text-sm">{featureRatings.easeOfUse.toFixed(1)}</span>
            </div>
            <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-accent-primary h-full"
                style={{ width: `${(featureRatings.easeOfUse / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Value for Money</span>
              <span className="text-sm">{featureRatings.valueForMoney.toFixed(1)}</span>
            </div>
            <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-accent-primary h-full"
                style={{ width: `${(featureRatings.valueForMoney / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Customer Support</span>
              <span className="text-sm">{featureRatings.customerSupport.toFixed(1)}</span>
            </div>
            <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-accent-primary h-full"
                style={{ width: `${(featureRatings.customerSupport / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Features</span>
              <span className="text-sm">{featureRatings.features.toFixed(1)}</span>
            </div>
            <div className="bg-primary-secondary h-2 rounded-full overflow-hidden">
              <div 
                className="bg-accent-primary h-full"
                style={{ width: `${(featureRatings.features / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
