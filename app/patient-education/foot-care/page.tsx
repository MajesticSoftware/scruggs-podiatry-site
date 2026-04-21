import { loadContent } from "@/lib/content-loader";
import { Heart, Shield, Activity, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function FootCarePage() {
  const content = loadContent('scruggs-podiatry-current-website-text---patient-education---foot-care');
  
  const footCareTips = [
    {
      icon: Heart,
      title: "Daily Foot Inspection",
      tips: [
        "Check your feet daily for cuts, blisters, or swelling",
        "Look for changes in color or temperature",
        "Use a mirror to see the bottom of your feet",
        "Pay special attention if you have diabetes"
      ]
    },
    {
      icon: Shield,
      title: "Proper Footwear",
      tips: [
        "Choose shoes that fit properly with adequate toe room",
        "Replace worn-out shoes regularly",
        "Wear appropriate shoes for each activity",
        "Avoid going barefoot in public areas"
      ]
    },
    {
      icon: Activity,
      title: "Hygiene & Maintenance",
      tips: [
        "Wash feet daily with soap and warm water",
        "Dry thoroughly, especially between toes",
        "Trim toenails straight across",
        "Moisturize feet but avoid between toes"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Foot Care Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tips and practices for maintaining healthy feet throughout your life
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Some serious foot disorders, and even more common conditions, can be linked to one avoidable thing: 
              inappropriate footwear. Proper foot care is essential for maintaining your mobility and overall health 
              throughout your life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Taking care of your feet is not just about comfort—it's about preventing problems that can affect 
              your entire body. Your feet are the foundation of your mobility, and keeping them healthy ensures 
              you can stay active and independent.
            </p>
          </div>

          {/* Daily Foot Care Tips */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Daily Foot Care Essentials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {footCareTips.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <category.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-gray-700">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footwear Guidelines */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choosing the Right Footwear</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Look For:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Adequate toe box space
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Proper arch support
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Cushioned heel
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Breathable materials
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Non-slip soles
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What to Avoid:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    High heels for extended wear
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Shoes that are too tight
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Worn-out shoes with uneven wear
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Shoes without adequate support
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    Going barefoot in public areas
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special Considerations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-2" />
                For Diabetics
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Check feet daily for any changes</li>
                <li>• Never go barefoot, even at home</li>
                <li>• Keep blood sugar levels controlled</li>
                <li>• See a podiatrist regularly</li>
                <li>• Wear diabetic-approved footwear</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Activity className="h-6 w-6 text-green-600 mr-2" />
                For Athletes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Sport-specific footwear is essential</li>
                <li>• Replace athletic shoes regularly</li>
                <li>• Use moisture-wicking socks</li>
                <li>• Allow feet to dry between activities</li>
                <li>• Address injuries promptly</li>
              </ul>
            </div>
          </div>

          {/* Common Foot Problems Prevention */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Preventing Common Foot Problems</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ingrown Toenails</h4>
                <p className="text-gray-700">Cut nails straight across, not too short, and avoid tight shoes.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Athlete's Foot</h4>
                <p className="text-gray-700">Keep feet clean and dry, change socks daily, use antifungal powder if needed.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Corns and Calluses</h4>
                <p className="text-gray-700">Wear properly fitting shoes, use padding for pressure points.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Heel Pain</h4>
                <p className="text-gray-700">Stretch regularly, maintain healthy weight, wear supportive shoes.</p>
              </div>
            </div>
          </div>

          {/* When to Seek Help */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">When to See a Podiatrist</h3>
            <p className="text-gray-700 mb-4">Seek professional help if you experience:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• Persistent pain or swelling</li>
              <li>• Signs of infection (redness, warmth, drainage)</li>
              <li>• Changes in skin or nail color</li>
              <li>• Numbness or tingling</li>
              <li>• Any foot injury that doesn't improve</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Need Professional Foot Care?</h3>
            <p className="text-lg mb-8 text-blue-100">
              Our team is here to help you maintain healthy feet for life.
            </p>
            <a
              href="tel:4106537744"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Call (410) 653-7744
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
