import Link from "next/link";
import { ChevronRight, Home, Users, Heart, Calendar, Phone, BookOpen, AlertCircle, Map } from "lucide-react";

const sitemapSections = [
  {
    title: "Main Pages",
    icon: Home,
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" }
    ]
  },
  {
    title: "Patient Resources",
    icon: Users,
    links: [
      { name: "Patient Center", href: "/patient-center" },
      { name: "Reviews & Testimonials", href: "/reviews" },
      { name: "COVID-19 Update", href: "/covid-19" }
    ]
  },
  {
    title: "Patient Education",
    icon: BookOpen,
    links: [
      { name: "Patient Education Center", href: "/patient-education" },
      { name: "What is a Podiatrist?", href: "/patient-education/what-is-a-podiatrist" },
      { name: "Foot Care", href: "/patient-education/foot-care" },
      { name: "Foot Problems", href: "/patient-education/foot-problems" },
      { name: "Common Disorders", href: "/patient-education/common-disorders" },
      { name: "Links & Resources", href: "/patient-education/links" }
    ]
  },
  {
    title: "Common Disorders",
    icon: Heart,
    links: [
      { name: "Achilles Tendonitis & Flat Feet", href: "/patient-education/common-disorders/achilles-tendonitis-flat-feet" },
      { name: "Arthritic Conditions", href: "/patient-education/common-disorders/arthritic-conditions" },
      { name: "Athlete's Foot", href: "/patient-education/common-disorders/athletes-foot" },
      { name: "Bunions", href: "/patient-education/common-disorders/bunions" },
      { name: "Corns & Callouses", href: "/patient-education/common-disorders/corns-callouses" },
      { name: "Custom Orthotics", href: "/patient-education/common-disorders/custom-orthotics" },
      { name: "Diabetic Wound Care", href: "/patient-education/common-disorders/diabetic-wound-care" },
      { name: "Fungus Nails", href: "/patient-education/common-disorders/fungus-nails" },
      { name: "Haglund's Deformity", href: "/patient-education/common-disorders/haglunds-deformity" },
      { name: "Hammertoes", href: "/patient-education/common-disorders/hammertoes" },
      { name: "Heel Pain, Bone Spurs & Plantar Fasciitis", href: "/patient-education/common-disorders/heel-pain-bone-spurs-plantar-fasciitis" },
      { name: "High Blood Pressure", href: "/patient-education/common-disorders/high-blood-pressure" },
      { name: "Ingrown Nails", href: "/patient-education/common-disorders/ingrown-nails" },
      { name: "Neuromas", href: "/patient-education/common-disorders/neuromas" },
      { name: "Peripheral Arterial Disease", href: "/patient-education/common-disorders/peripheral-arterial-disease" },
      { name: "Peripheral Neuropathy", href: "/patient-education/common-disorders/peripheral-neuropathy" },
      { name: "Psoriasis", href: "/patient-education/common-disorders/psoriasis" },
      { name: "Skin Cancers of the Feet", href: "/patient-education/common-disorders/skin-cancers-of-the-feet" },
      { name: "Sprains, Strains & Fractures", href: "/patient-education/common-disorders/sprains-strains-fractures" },
      { name: "Surgery", href: "/patient-education/common-disorders/surgery" },
      { name: "Sweaty Feet", href: "/patient-education/common-disorders/sweaty-feet" },
      { name: "Warts & Growths", href: "/patient-education/common-disorders/warts-growths" }
    ]
  }
];

export default function SitemapPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick access to all pages on our website
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <section.icon className="h-6 w-6 text-blue-600 mr-3" />
                  {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 mr-2 transition-transform group-hover:translate-x-1" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Information */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Map className="h-6 w-6 text-blue-600 mr-3" />
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                <p className="text-gray-600">19 Walker Avenue, Suite 200</p>
                <p className="text-gray-600">Pikesville, MD 21208</p>
                <a href="tel:4106537744" className="text-blue-600 hover:text-blue-700">(410) 653-7744</a>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p className="text-gray-600">Monday: 9:30am - 6pm</p>
                <p className="text-gray-600">Tuesday: 9:30am - 4:30pm</p>
                <p className="text-gray-600">Thursday: 9:30am - 4:30pm</p>
                <p className="text-gray-600">Friday: 9:30am - 1pm</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Emergency</h3>
                <p className="text-gray-600">For emergencies, please contact your primary care physician or visit the nearest emergency room.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              <Phone className="h-5 w-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
