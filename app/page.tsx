import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Calendar, Footprints, Award, Users, Clock } from "lucide-react";
import { InteractiveFootModel } from "@/components/foot-model";
import { ThreeJSBackground } from "@/components/three-js-background";
import { loadContent } from "@/lib/content-loader";

export default function Home() {
  // Load welcome message content
  const welcomeContent = loadContent('website-opening');
  
  return (
    <>
      <ThreeJSBackground />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Foot & Ankle Care in Pikesville, MD
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {welcomeContent.split('\n')[0] || "Scruggs Podiatry, PC is honored to have been servicing the Baltimore Metro Community and vicinity for 25+ years."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Request Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
              <InteractiveFootModel />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Scruggs Podiatry?</h2>
            <p className="text-lg text-gray-600">Comprehensive foot and ankle care with a personal touch</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">25+ Years of Experience</h3>
              <p className="text-gray-600">Trusted podiatric care serving the Baltimore Metro area since establishment</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">State-of-the-Art Care</h3>
              <p className="text-gray-600">Latest techniques and equipment in our modern Pikesville facility</p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Treatment</h3>
              <p className="text-gray-600">Individual attention and customized care plans for every patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive podiatric care for all your foot and ankle needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General Podiatry", icon: Footprints, desc: "Routine foot care and preventive treatments" },
              { title: "Diabetic Foot Care", icon: Users, desc: "Specialized care for diabetic patients" },
              { title: "Custom Orthotics", icon: Award, desc: "Prescription orthotics for optimal support" },
              { title: "Foot Surgery", icon: Calendar, desc: "Advanced surgical procedures when needed" }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                <Link href="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700 opacity-50"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule your appointment today and experience expert podiatric care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Request Appointment
            </Link>
            <a
              href="tel:4104865454"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              (410) 486-5454
            </a>
          </div>
        </div>
      </section>

      {/* COVID-19 Notice */}
      <section className="py-8 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900">COVID-19 Safety Protocols</h3>
              <p className="text-gray-600 mt-1">
                Our office follows CDC guidelines to ensure your safety during visits.
              </p>
            </div>
            <Link
              href="/covid-19"
              className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap ml-4"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
