import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ReviewsProps {
  isDark: boolean;
}

type Review = {
  id?: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

const MAX_COMMENT_LENGTH = 120;

const Reviews: React.FC<ReviewsProps> = ({ isDark }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [nameError, setNameError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const lastSubmissionTime = React.useRef(0);

  const displayRating = hoverRating || rating;

  // Load reviews from Supabase on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleStarLeave = () => {
    setHoverRating(0);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (nameError) setNameError('');
  };

  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmissionTime.current < 2000) {
      console.log('Submission blocked - too soon');
      return;
    }
    
    if (!name.trim()) {
      setNameError('Name is required');
      return;
    }
    
    if (rating <= 0) {
      alert('Please select a rating before submitting!');
      return;
    }

    lastSubmissionTime.current = now;
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('reviews')
        .insert([{
          name: name.trim(),
          rating,
          comment: comment.trim(),
        }]);

      if (error) throw error;

      await fetchReviews();
      
      setName('');
      setComment('');
      setRating(0);
      setHoverRating(0);
      setNameError('');
      
      alert('Thank you for your review! 🎉');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Failed to submit review. Please try again.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'lg', interactive = false) => {
    const starSize = size === 'lg' ? 'w-8 h-8' : 'w-4 h-4';
    
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const fillPercentage = Math.max(0, Math.min(100, (rating - starIndex + 1) * 100));
          
          return (
            <div key={starIndex} className="relative">
              {interactive ? (
                <div className="flex">
                  <button
                    type="button"
                    className={`${size === 'lg' ? 'w-6 h-12' : 'w-2 h-4'} transition-all duration-200 transform hover:scale-110 focus:outline-none relative overflow-hidden`}
                    onClick={() => handleStarClick(starIndex - 0.5)}
                    onMouseEnter={() => handleStarHover(starIndex - 0.5)}
                  >
                    <svg
                      className={`absolute left-0 top-0 ${starSize} transition-colors duration-200 ${
                        (starIndex - 0.5) <= displayRating 
                          ? 'text-yellow-400 drop-shadow-lg' 
                          : isDark 
                            ? 'text-gray-600 hover:text-gray-500' 
                            : 'text-gray-300 hover:text-gray-400'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ clipPath: 'inset(0 50% 0 0)' }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={`${size === 'lg' ? 'w-6 h-12' : 'w-2 h-4'} transition-all duration-200 transform hover:scale-110 focus:outline-none relative overflow-hidden`}
                    onClick={() => handleStarClick(starIndex)}
                    onMouseEnter={() => handleStarHover(starIndex)}
                  >
                    <svg
                      className={`absolute right-0 top-0 ${starSize} transition-colors duration-200 ${
                        starIndex <= displayRating 
                          ? 'text-yellow-400 drop-shadow-lg' 
                          : isDark 
                            ? 'text-gray-600 hover:text-gray-500' 
                            : 'text-gray-300 hover:text-gray-400'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ clipPath: 'inset(0 0 0 50%)' }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                  <svg
                    className={`absolute inset-0 ${starSize} pointer-events-none ${
                      starIndex <= displayRating 
                        ? 'text-transparent' 
                        : isDark 
                          ? 'text-gray-600' 
                          : 'text-gray-300'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              ) : (
                <div className="relative">
                  <svg
                    className={`${starSize} ${isDark ? 'text-gray-600' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  
                  {fillPercentage > 0 && (
                    <div 
                      className="absolute top-0 left-0 overflow-hidden"
                      style={{ width: `${fillPercentage}%` }}
                    >
                      <svg
                        className={`${starSize} text-yellow-400`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="reviews" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Share Your Feedback
          </h2>
          <div className={`w-24 h-1 ${isDark ? 'bg-blue-500' : 'bg-blue-500'} mx-auto rounded-full`}></div>
          <p className={`mt-4 text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Rate this portfolio and leave your thoughts!
          </p>
        </div>

        <form onSubmit={submitReview} className={`p-8 rounded-xl shadow-lg mb-12 ${
          isDark ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <div className="text-center mb-8">
            <p className={`text-lg font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              How would you rate this portfolio?
            </p>
            <div 
              className="flex justify-center gap-2 mb-4"
              onMouseLeave={handleStarLeave}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`w-12 h-12 transition-all duration-200 transform hover:scale-110 focus:outline-none ${
                    star <= displayRating ? 'scale-110' : ''
                  }`}
                  onClick={() => handleStarClick(star)}
                  onMouseEnter={() => handleStarHover(star)}
                >
                  <svg
                    className={`w-full h-full transition-colors duration-200 ${
                      star <= displayRating 
                        ? 'text-yellow-400 drop-shadow-lg' 
                        : isDark 
                          ? 'text-gray-600 hover:text-gray-500' 
                          : 'text-gray-300 hover:text-gray-400'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              ))}
            </div>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {rating > 0 ? `You rated: ${rating} star${rating > 1 ? 's' : ''}` : 'Click to rate'}
            </p>
          </div>

          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 ${
                nameError 
                  ? 'border-red-500 focus:ring-red-500' 
                  : isDark 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
              }`}
              placeholder="Enter your name"
              required
            />
            {nameError && (
              <p className="mt-1 text-sm text-red-500">{nameError}</p>
            )}
          </div>

          <div className="mb-8">
            <label className={`block text-sm font-medium mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Your Feedback (Optional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => {
                if (e.target.value.length <= MAX_COMMENT_LENGTH) {
                  setComment(e.target.value);
                }
              }}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:ring-2 focus:ring-offset-2 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-blue-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500'
              }`}
              placeholder="Share your thoughts about this portfolio..."
            />
            <div className={`text-xs mt-1 text-right ${
              comment.length >= MAX_COMMENT_LENGTH 
                ? 'text-red-500' 
                : isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {comment.length}/{MAX_COMMENT_LENGTH} characters
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={rating === 0 || !name.trim() || isSubmitting}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600' 
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </div>
        </form>

        {isLoading ? (
          <div className="text-center py-12">
            <div className={`inline-block animate-spin rounded-full h-12 w-12 border-b-2 ${
              isDark ? 'border-blue-400' : 'border-blue-600'
            }`}></div>
            <p className={`mt-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Loading reviews...
            </p>
          </div>
        ) : reviews.length > 0 ? (
          <div>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Recent Reviews ({reviews.length})
            </h3>
            
            <div className="relative overflow-hidden">
                <div className={`absolute left-0 top-0 w-20 h-full z-10 pointer-events-none ${
                  isDark ? 'bg-gradient-to-r from-gray-900 to-transparent' : 'bg-gradient-to-r from-white to-transparent'
                }`}></div>
                <div className={`absolute right-0 top-0 w-20 h-full z-10 pointer-events-none ${
                  isDark ? 'bg-gradient-to-l from-gray-900 to-transparent' : 'bg-gradient-to-l from-white to-transparent'
                }`}></div>
                
                <div className="flex gap-6 animate-marquee-ltr" style={{ width: 'max-content' }}>
                  {reviews.concat(reviews).map((review, index) => (
                    <div 
                      key={index} 
                      className={`flex-shrink-0 w-80 p-6 rounded-xl shadow-lg ${
                        isDark ? 'bg-gray-800' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {review.name}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            {renderStars(review.rating, 'sm')}
                            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              {review.rating}/5 stars
                            </span>
                          </div>
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      
                      {review.comment && (
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} line-clamp-3`}>
                          "{review.comment}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              No reviews yet. Be the first to share your feedback! 🌟
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;