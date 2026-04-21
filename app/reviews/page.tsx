import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2 months ago",
    text: "Dr. Scruggs is amazing! She took the time to explain my condition thoroughly and the treatment plan has worked perfectly. My heel pain is completely gone.",
    source: "Google"
  },
  {
    id: 2,
    name: "Robert L.",
    rating: 5,
    date: "3 months ago",
    text: "I've been seeing Dr. Scruggs for my diabetic foot care for over 5 years. She's professional, knowledgeable, and truly cares about her patients' well-being.",
    source: "Healthgrades"
  },
  {
    id: 3,
    name: "Jennifer K.",
    rating: 5,
    date: "4 months ago",
    text: "The custom orthotics Dr. Scruggs prescribed have changed my life! I can walk and exercise without pain for the first time in years.",
    source: "Google"
  },
  {
    id: 4,
    name: "Michael T.",
    rating: 5,
    date: "5 months ago",
    text: "Excellent bedside manner and very thorough. The office staff is friendly and scheduling is easy. Highly recommend!",
    source: "Yelp"
  },
  {
    id: 5,
    name: "Patricia W.",
    rating: 5,
    date: "6 months ago",
    text: "Dr. Scruggs successfully treated my bunion without surgery. I appreciated her conservative approach and attention to detail.",
    source: "Google"
  },
  {
    id: 6,
    name: "David S.",
    rating: 5,
    date: "7 months ago",
    text: "Been going to Dr. Scruggs for years. She's the best podiatrist in the Baltimore area. Always takes time to listen and explain treatment options.",
    source: "Healthgrades"
  }
];

const reviewPlatforms = [
  {
    name: "Google",
    icon: "/logo-google-sm.png",
    rating: 4.9,
    reviewCount: 127,
    url: "#"
  },
  {
    name: "Healthgrades",
    icon: "/logo-healthgrades-sm.png",
    rating: 4.8,
    reviewCount: 89,
    url: "#"
  },
  {
    name: "Yelp",
    icon: "/logo-yelp-sm.png",
    rating: 4.7,
    reviewCount: 56,
    url: "#"
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Reviews & Testimonials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our patients are saying about their experience at Scruggs Podiatry
            </p>
          </div>
        </div>
      </section>

      {/* Overall Ratings */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewPlatforms.map((platform, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="h-12 mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">{platform.name}</span>
                </div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-3xl font-bold text-gray-900 mr-2">{platform.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{platform.reviewCount} reviews</p>
                <a
                  href={platform.url}
                  className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View on {platform.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recent Patient Reviews</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-8 relative">
                <Quote className="absolute top-4 left-4 h-8 w-8 text-blue-100" />
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.date}</p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
                  <p className="text-sm text-gray-500">via {testimonial.source}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Have you been a patient at Scruggs Podiatry?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Leave a Review
              </a>
              <a
                href="tel:4106537744"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Call (410) 653-7744
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Survey Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <ThumbsUp className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
            <p className="text-lg mb-8 text-blue-100">
              Your opinion matters! Help us improve our services by sharing your experience.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all"
            >
              Take Our Patient Survey
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-8">Trusted by the Baltimore Community</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-gray-600">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">272</div>
                <div className="text-gray-600">Total Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
