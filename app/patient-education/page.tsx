import Link from "next/link";
import { BookOpen, Heart, Footprints, AlertCircle, ExternalLink } from "lucide-react";

const educationSections = [
  {
    title: "What is a Podiatrist?",
    description: "Learn about podiatric medicine and how foot specialists can help you",
    href: "/patient-education/what-is-a-podiatrist",
    icon: Heart,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Foot Care",
    description: "Essential tips and practices for maintaining healthy feet",
    href: "/patient-education/foot-care",
    icon: Footprints,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Foot Problems",
    description: "Understanding common foot and ankle problems and their causes",
    href: "/patient-education/foot-problems",
    icon: AlertCircle,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    title: "Common Disorders",
    description: "Comprehensive information about various foot and ankle conditions",
    href: "/patient-education/common-disorders",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Links & Resources",
    description: "Helpful external resources and organizations for foot health",
    href: "/patient-education/links",
    icon: ExternalLink,
    color: "bg-indigo-50 text-indigo-600"
  }
];

export default function PatientEducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Education Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering you with knowledge about foot health, conditions, and treatments
            </p>
          </div>
        </div>
      </section>

      {/* Education Sections Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationSections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${section.color.split(' ')[0]} p-8`}>
                  <section.icon className={`h-12 w-12 ${section.color.split(' ')[1]} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                  <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="font-medium">Learn More</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Featured Information */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Knowledge is the First Step to Better Foot Health
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Our comprehensive patient education resources help you understand your condition, 
                treatment options, and how to maintain optimal foot health for life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">28+</div>
                  <div className="text-blue-200">Common Disorders Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Expert</div>
                  <div className="text-blue-200">Medical Information</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">Easy</div>
                  <div className="text-blue-200">To Understand</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links to Popular Topics */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Topics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Heel Pain", link: "/patient-education/common-disorders/heel-pain-bone-spurs-plantar-fasciitis" },
                { name: "Bunions", link: "/patient-education/common-disorders/bunions" },
                { name: "Diabetic Foot Care", link: "/patient-education/common-disorders/diabetic-wound-care" },
                { name: "Ingrown Nails", link: "/patient-education/common-disorders/ingrown-nails" },
                { name: "Fungus Nails", link: "/patient-education/common-disorders/fungus-nails" },
                { name: "Hammertoes", link: "/patient-education/common-disorders/hammertoes" },
                { name: "Custom Orthotics", link: "/patient-education/common-disorders/custom-orthotics" },
                { name: "Surgery", link: "/patient-education/common-disorders/surgery" }
              ].map((topic, index) => (
                <Link
                  key={index}
                  href={topic.link}
                  className="p-4 bg-gray-50 rounded-lg text-center hover:bg-blue-50 transition-colors group"
                >
                  <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                    {topic.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Information Notice */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Medical Information Notice</h3>
              <p className="text-gray-600 mt-1">
                The information provided in our Patient Education Center is for educational purposes only and 
                should not replace professional medical advice. Always consult with Dr. Scruggs or your healthcare 
                provider for diagnosis and treatment of any foot or ankle condition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
