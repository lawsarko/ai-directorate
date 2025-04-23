import React from 'react';
import { Review } from '../lib/types';

type ReviewCardProps = {
  review: Review;
  userName?: string;
  userAvatar?: string;
  onHelpfulClick?: (reviewId: string) => void;
};

export default function ReviewCard({ 
  review, 
  userName = 'Anonymous User', 
  userAvatar,
  onHelpfulClick
}: ReviewCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="bg-primary-card p-6 rounded-card mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary-secondary flex items-center justify-center mr-3">
            {userAvatar ? (
              <img src={userAvatar} alt={userName} className="w-10 h-10 rounded-full" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            )}
          </div>
          <div>
            <div className="font-medium">{userName}</div>
            <div className="text-sm text-text-secondary">{formatDate(review.createdAt)}</div>
          </div>
        </div>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg 
              key={star}
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${star <= review.rating ? 'text-accent-primary' : 'text-primary-secondary'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      
      {review.verifiedPurchase && (
        <div className="inline-block bg-accent-secondary/20 text-accent-secondary text-xs px-2 py-1 rounded-full mb-3">
          Verified User
        </div>
      )}
      
      <h3 className="text-lg font-bold mb-2">{review.title}</h3>
      <p className="text-text-secondary mb-4">{review.content}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {review.pros.length > 0 && (
          <div>
            <h4 className="font-medium text-accent-secondary mb-2">Pros</h4>
            <ul className="space-y-1">
              {review.pros.map((pro, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-secondary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {review.cons.length > 0 && (
          <div>
            <h4 className="font-medium text-status-error mb-2">Cons</h4>
            <ul className="space-y-1">
              {review.cons.map((con, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-status-error mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center">
        <button 
          className="flex items-center text-text-secondary hover:text-accent-primary"
          onClick={() => onHelpfulClick && onHelpfulClick(review.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span>Helpful ({review.helpfulCount})</span>
        </button>
        
        <div className="flex space-x-4">
          <div className="text-sm">
            <span className="text-text-secondary">Ease of Use:</span> {review.featureRatings.easeOfUse.toFixed(1)}
          </div>
          <div className="text-sm">
            <span className="text-text-secondary">Value:</span> {review.featureRatings.valueForMoney.toFixed(1)}
          </div>
        </div>
      </div>
    </div>
  );
}
