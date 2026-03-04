import { Footprints, Heart, Shield, Activity, Users, Baby } from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Achilles Tendon", category: "injuries" },
  { name: "Ankle Instability", category: "injuries" },
  { name: "Ankle Sprains", category: "injuries" },
  { name: "Arthritic Foot & Ankle Care", category: "chronic" },
  { name: "Athletes Foot", category: "infections" },
  { name: "Bunions", category: "deformities" },
  { name: "Calluses", category: "skin" },
  { name: "Corns", category: "skin" },
  { name: "Crush Injuries", category: "injuries" },
  { name: "Custom Orthotics", category: "specialty" },
  { name: "Diabetic Foot Infections", category: "diabetic" },
  { name: "Flat Feet", category: "deformities" },
  { name: "Fungus Toenails", category: "infections" },
  { name: "Geriatric Foot Care", category: "specialty" },
  { name: "Hammertoes", category: "deformities" },
  { name: "Heel Spurs", category: "chronic" },
  { name: "Infections", category: "infections" },
  { name: "Ingrown Toenails", category: "nails" },
  { name: "Injuries", category: "injuries" },
  { name: "Metatarsalgia", category: "chronic" },
  { name: "Neuromas", category: "nerve" },
  { name: "Plantar Fasciitis", category: "chronic" },
  { name: "Poor Circulation", category: "vascular" },
  { name: "Warts", category: "skin" },
  { name: "Wounds", category: "wounds" },
];

const categories = [
  {
    id: "specialty",
    title: "Specialized Care",
    icon: Shield,
    description: "Comprehensive podiatric solutions tailored to your needs",
    color: "bg-purple-50 text-purple-600"
  },
  {
    id: "injuries",
    title: "Sports & Injury Care",
    icon: Activity,
    description: "Treatment for acute injuries and sports-related conditions",
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "chronic",
    title: "Chronic Conditions",
    icon: Heart,
    description: "Long-term management of persistent foot and ankle issues",
    color: "bg-red-50 text-red-600"
  },
  {
    id: "diabetic",
    title: "Diabetic Foot Care",
    icon: Users,
    description: "Specialized care for diabetic patients",
    color: "bg-green-50 text-green-600"
  },
  {
    id: "skin",
    title: "Skin & Nail Conditions",
    icon: Footprints,
    description: "Treatment for various skin and nail problems",
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    id: "deformities",
    title: "Foot Deformities",
    icon: Baby,
    description: "Correction and management of structural issues",
    color: "bg-indigo-50 text-indigo-600"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnosis and specialized treatment for all your foot and ankle needs
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${category.color.split(' ')[0]} p-8`}>
                  <category.icon className={`h-12 w-12 ${category.color.split(' ')[1]} mb-4`} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  
                  <div className="mt-6 space-y-2">
                    {services
                      .filter(service => service.category === category.id || 
                        (category.id === "skin" && service.category === "nails") ||
                        (category.id === "skin" && service.category === "infections") ||
                        (category.id === "chronic" && service.category === "nerve") ||
                        (category.id === "chronic" && service.category === "vascular") ||
                        (category.id === "specialty" && service.category === "wounds"))
                      .map((service, index) => (
                        <div key={index} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {service.name}
                        </div>
                      ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Complete Services List */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete List of Services</h2>
            <p className="text-gray-600 mb-8">
              At Scruggs Podiatry, we provide diagnosis and specialized treatment for a comprehensive range of foot and ankle conditions:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.sort((a, b) => a.name.localeCompare(b.name)).map((service, index) => (
                <div key={index} className="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                  <Footprints className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Don't See Your Condition Listed?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              We treat a wide variety of foot and ankle conditions. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/patient-education"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
              >
                Learn More About Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Advanced Treatment Options
              </h3>
              <p className="text-gray-600 mb-6">
                Our practice utilizes the latest technology and treatment methods to ensure the best possible outcomes for our patients. From conservative care to advanced surgical procedures, we offer a full spectrum of treatment options.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">State-of-the-art diagnostic equipment</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Minimally invasive surgical techniques</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom treatment plans for each patient</span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive follow-up care</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Insurance & Payment
              </h3>
              <p className="text-gray-600 mb-6">
                We accept most major insurance plans and are committed to helping you maximize your benefits. Our staff will work with you to understand your coverage and provide transparent pricing for all services.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  <strong>For insurance and billing questions, please contact our office:</strong>
                </p>
                <a href="tel:4104865454" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                  (410) 486-5454
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
