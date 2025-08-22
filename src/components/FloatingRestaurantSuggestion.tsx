"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Send, MapPin } from 'lucide-react';

export default function FloatingRestaurantSuggestion() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasTriggeredScroll, setHasTriggeredScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Check if user has scrolled to the second section
      if (scrollPosition > viewportHeight * 0.5) {
        // If this is the first time reaching this scroll position
        if (!hasTriggeredScroll) {
          setHasTriggeredScroll(true);

          // Start 15 second delay
          setTimeout(() => {
            setIsVisible(true);
          }, 15000); // 15 seconds delay
        }
      } else {
        // Hide button and reset when scrolling back to top
        if (scrollPosition < viewportHeight * 0.2) {
          setIsVisible(false);
          setIsOpen(false);
          setHasTriggeredScroll(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggeredScroll]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurantName.trim()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/restaurant-suggestion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          restaurantName: restaurantName.trim()
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Reset form
        setRestaurantName('');
        setIsOpen(false);

        // Show success feedback with count info
        const countMessage = result.isNew
          ? 'This is a new suggestion!'
          : `This venue has been suggested ${result.count} times.`;

        alert(`Thank you for your suggestion! ${countMessage} We'll review it and may contact the venue about our acoustic solutions.`);
      } else {
        throw new Error(result.error || 'Failed to submit suggestion');
      }
    } catch (error) {
      console.error('Error submitting suggestion:', error);
      alert('Sorry, there was an error submitting your suggestion. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl rounded-full px-8 py-4 text-base font-medium transition-all duration-300 transform hover:scale-105 max-w-sm"
        >
          <MapPin className="w-5 h-5 mr-2" />
          Suggest a restaurant that needs our help
        </Button>
      ) : (
        <div className="bg-card border border-border rounded-xl shadow-2xl p-8 w-96 transition-all duration-300 transform animate-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-xl font-bold text-foreground">
                Suggest a Restaurant
              </h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0 hover:bg-muted"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Know a restaurant or venue that could benefit from professional acoustic treatment?
              Help us connect with businesses that need our soundproofing expertise.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="restaurant-name" className="block text-sm font-medium text-foreground mb-2">
                Restaurant or Venue Name
              </label>
              <Input
                id="restaurant-name"
                type="text"
                placeholder="Enter the name of the restaurant or venue..."
                value={restaurantName}
                onChange={(e) => setRestaurantName(e.target.value)}
                className="w-full h-12 text-base"
                disabled={isSubmitting}
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="submit"
                disabled={!restaurantName.trim() || isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 h-12 text-base font-medium"
              >
                {isSubmitting ? (
                  'Sending Suggestion...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Suggestion
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="h-12 px-6"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>

          <div className="mt-4 text-xs text-muted-foreground">
            Your suggestion helps us identify venues that could benefit from our acoustic solutions.
          </div>
        </div>
      )}
    </div>
  );
}
