import { loadContent } from "@/lib/content-loader";
import { ExternalLink, Globe, Users, BookOpen, Heart } from "lucide-react";
import Link from "next/link";

const resources = [
  {
    category: "Professional Organizations",
    icon: Users,
    color: "bg-blue-50 text-blue-600",
    links: [
      {
        name: "American Podiatric Medical Association (APMA)",
        url: "https://www.apma.org",
        description: "The leading resource for foot health information and professional podiatric medicine"
      },
      {
        name: "American College of Foot and Ankle Surgeons",
        url: "https://www.acfas.org",
        description: "Information about foot and ankle surgery and finding qualified surgeons"
      },
      {
        name: "Maryland Podiatric Medical Association",
        url: "https://www.mdpma.org",
        description: "State association for podiatric physicians in Maryland"
      }
    ]
  },
  {
    category: "Patient Education Resources",
    icon: BookOpen,
    color: "bg-green-50 text-green-600",
    links: [
      {
        name: "Foot Health Facts",
        url: "https://www.foothealthfacts.org",
        description: "APMA's patient education website with comprehensive foot health information"
      },
      {
        name: "American Diabetes Association - Foot Care",
        url: "https://www.diabetes.org/diabetes/complications/foot-complications",
        description: "Diabetic foot care guidelines and resources"
      },
      {
        name: "Arthritis Foundation - Foot Health",
        url: "https://www.arthritis.org",
        description: "Information about arthritis affecting feet and ankles"
      }
    ]
  },
  {
    category: "Health & Medical Resources",
    icon: Heart,
    color: "bg-purple-50 text-purple-600",
    links: [
      {
        name: "MedlinePlus - Foot Health",
        url: "https://medlineplus.gov/foothealth.html",
        description: "National Library of Medicine's resource for foot health information"
      },
      {
        name: "WebMD - Foot & Ankle Center",
        url: "https://www.webmd.com/pain-management/foot-ankle-default.htm",
        description: "Comprehensive resource for foot and ankle conditions"
      },
      {
        name: "Mayo Clinic - Foot Care",
        url: "https://www.mayoclinic.org",
        description: "Trusted medical information about foot conditions and treatments"
      }
    ]
  }
];

export default function LinksPage() {
  const content = loadContent('scruggs-podiatry-current-website-text---patient-education--links');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Links & Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Helpful external resources and organizations for foot health information
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                For more information about keeping your feet healthy, we've compiled a list of trusted resources 
                from professional organizations, medical institutions, and patient education websites. These links 
                provide valuable information to supplement your care at Scruggs Podiatry.
              </p>
            </div>
          </div>

          {/* Resource Categories */}
          <div className="space-y-12">
            {resources.map((category, index) => (
              <div key={index}>
                <div className={`${category.color.split(' ')[0]} rounded-lg p-8`}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <category.icon className={`h-8 w-8 ${category.color.split(' ')[1]} mr-3`} />
                    {category.category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-lg p-6 hover:shadow-lg transition-all group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {link.name}
                          </h3>
                          <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                        </div>
                        <p className="text-gray-600 text-sm">{link.description}</p>
                        <p className="text-blue-600 text-sm mt-3 group-hover:underline">
                          Visit Website →
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Globe className="h-5 w-5 text-blue-600 mr-2" />
                  General Health Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.cdc.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Centers for Disease Control and Prevention (CDC)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.nih.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      National Institutes of Health (NIH)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.healthfinder.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Healthfinder.gov
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="h-5 w-5 text-red-600 mr-2" />
                  Support Groups & Communities
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.inspire.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Inspire - Health Support Communities
                    </a>
                  </li>
                  <li>
                    <a href="https://www.patientslikeme.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      PatientsLikeMe
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/r/Podiatry" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                      Reddit Podiatry Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700 text-sm">
              <strong>Disclaimer:</strong> These links are provided for informational purposes only. Scruggs Podiatry PC 
              does not endorse or guarantee the accuracy of information on external websites. Always consult with 
              Dr. Scruggs or your healthcare provider for medical advice specific to your condition.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
            <p className="text-lg mb-8 text-blue-100">
              While these resources are helpful, nothing replaces professional medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4106537744"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Call (410) 653-7744
              </a>
              <Link
                href="/patient-education"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-blue-700 transition-all"
              >
                Back to Patient Education
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
