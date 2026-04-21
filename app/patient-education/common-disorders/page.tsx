import Link from "next/link";
import { ChevronRight, Search } from "lucide-react";
import { loadContent } from "@/lib/content-loader";

const disorders = [
  { slug: "achilles-tendonitis-flat-feet", name: "Achilles Tendonitis & Flat Feet" },
  { slug: "arthritic-conditions", name: "Arthritic Conditions" },
  { slug: "athletes-foot", name: "Athlete's Foot" },
  { slug: "bunions", name: "Bunions" },
  { slug: "corns-callouses", name: "Corns & Callouses" },
  { slug: "custom-orthotics", name: "Custom Orthotics" },
  { slug: "diabetic-wound-care", name: "Diabetic Wound Care" },
  { slug: "fungus-nails", name: "Fungus Nails" },
  { slug: "haglunds-deformity", name: "Haglund's Deformity" },
  { slug: "hammertoes", name: "Hammertoes" },
  { slug: "heel-pain-bone-spurs-plantar-fasciitis", name: "Heel Pain, Bone Spurs & Plantar Fasciitis" },
  { slug: "high-blood-pressure", name: "High Blood Pressure" },
  { slug: "ingrown-nails", name: "Ingrown Nails" },
  { slug: "neuromas", name: "Neuromas" },
  { slug: "peripheral-arterial-disease", name: "Peripheral Arterial Disease" },
  { slug: "peripheral-neuropathy", name: "Peripheral Neuropathy" },
  { slug: "psoriasis", name: "Psoriasis" },
  { slug: "skin-cancers-of-the-feet", name: "Skin Cancers of the Feet" },
  { slug: "sprains-strains-fractures", name: "Sprains, Strains & Fractures" },
  { slug: "surgery", name: "Surgery" },
  { slug: "sweaty-feet", name: "Sweaty Feet" },
  { slug: "warts-growths", name: "Warts & Growths" }
];

const categories = [
  {
    name: "Structural Conditions",
    disorders: ["bunions", "hammertoes", "flat-feet", "haglunds-deformity"]
  },
  {
    name: "Pain & Inflammation",
    disorders: ["heel-pain-bone-spurs-plantar-fasciitis", "neuromas", "achilles-tendonitis-flat-feet", "arthritic-conditions"]
  },
  {
    name: "Skin & Nail Conditions",
    disorders: ["corns-callouses", "athletes-foot", "fungus-nails", "ingrown-nails", "warts-growths", "sweaty-feet", "psoriasis"]
  },
  {
    name: "Systemic Conditions",
    disorders: ["diabetic-wound-care", "peripheral-arterial-disease", "peripheral-neuropathy", "high-blood-pressure"]
  },
  {
    name: "Injuries & Treatment",
    disorders: ["sprains-strains-fractures", "surgery", "custom-orthotics"]
  },
  {
    name: "Cancer",
    disorders: ["skin-cancers-of-the-feet"]
  }
];

export default function CommonDisordersPage() {
  const content = loadContent('scruggs-podiatry-current-website-text---patient-education---common-disorders');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Common Foot & Ankle Disorders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive information about various foot and ankle conditions we treat
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for a specific condition..."
              className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Disorders by Category */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12 last:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-blue-100">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {disorders
                  .filter(disorder => category.disorders.includes(disorder.slug))
                  .map((disorder, index) => (
                    <Link
                      key={index}
                      href={`/patient-education/common-disorders/${disorder.slug}`}
                      className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {disorder.name}
                        </h3>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Learn about symptoms, causes, and treatment options
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          ))}

          {/* All Disorders Alphabetical List */}
          <div className="mt-16 bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Conditions (A-Z)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {disorders
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((disorder, index) => (
                  <Link
                    key={index}
                    href={`/patient-education/common-disorders/${disorder.slug}`}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-gray-400 group-hover:text-blue-600" />
                    {disorder.name}
                  </Link>
                ))}
            </div>
          </div>

          {/* Information Note */}
          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <p className="text-gray-700">
              <strong className="text-gray-900">Note:</strong> This information is provided for educational purposes only. 
              For proper diagnosis and treatment of any foot or ankle condition, please call our office to schedule with Dr. Scruggs.
            </p>
            <a
              href="tel:4106537744"
              className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Call (410) 653-7744
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
