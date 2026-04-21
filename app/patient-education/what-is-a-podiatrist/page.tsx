import { loadContent } from "@/lib/content-loader";
import { GraduationCap, Stethoscope, Award, Users } from "lucide-react";
import Link from "next/link";

export default function WhatIsPodiatristPage() {
  const content = loadContent('scruggs-podiatry-current-website-text---patient-education---what-is-a-podiatrist');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is a Podiatrist?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the role of foot and ankle specialists in your healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A podiatrist, also called a doctor of podiatric medicine (DPM), is a specialist who provides medical 
              diagnosis and treatment of foot and ankle problems. Podiatrists are the only healthcare professionals 
              specifically trained to diagnose and treat conditions affecting the foot, ankle, and related structures 
              of the leg.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              These medical specialists complete four years of podiatric medical school and at least three years of 
              hospital residency training. They are qualified to perform surgery, prescribe medications, order x-rays 
              and lab tests, and create custom treatment plans for each patient.
            </p>
          </div>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <GraduationCap className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education & Training</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  4 years of undergraduate education
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  4 years of podiatric medical school
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  3+ years of hospital residency
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Board certification and continuing education
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <Stethoscope className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Services Provided</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Diagnosis and treatment of foot conditions
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Foot and ankle surgery
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Custom orthotics and biomechanical analysis
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Diabetic foot care and wound management
                </li>
              </ul>
            </div>
          </div>

          {/* Conditions Treated */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conditions Commonly Treated by Podiatrists</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Structural Problems</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Bunions</li>
                  <li>• Hammertoes</li>
                  <li>• Flat feet</li>
                  <li>• High arches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Pain & Injuries</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Heel pain</li>
                  <li>• Ankle sprains</li>
                  <li>• Fractures</li>
                  <li>• Tendonitis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Skin & Nail Issues</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ingrown toenails</li>
                  <li>• Fungal infections</li>
                  <li>• Corns and calluses</li>
                  <li>• Warts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* When to See a Podiatrist */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              When Should You See a Podiatrist?
            </h2>
            <p className="text-gray-700 mb-4">You should consider seeing a podiatrist if you experience:</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Persistent foot or ankle pain
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Changes in the shape or appearance of your feet
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Difficulty walking or performing daily activities
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Diabetes or circulation problems affecting your feet
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Sports injuries or chronic foot problems
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">✓</span>
                Nail or skin conditions that don't improve with home care
              </li>
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Benefits of Podiatric Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Specialized Expertise</h4>
                  <p className="text-blue-100">Focused training exclusively on foot and ankle conditions</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Preventive Care</h4>
                  <p className="text-blue-100">Early detection and treatment of potential problems</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Improved Mobility</h4>
                  <p className="text-blue-100">Restore function and reduce pain for better quality of life</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Comprehensive Treatment</h4>
                  <p className="text-blue-100">From conservative care to advanced surgical procedures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Take the First Step?
            </h3>
            <p className="text-gray-600 mb-8">
              Dr. Scruggs and our team are here to help you achieve optimal foot health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4106537744"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Call (410) 653-7744
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
