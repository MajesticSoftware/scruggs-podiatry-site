import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Calendar, Footprints, Award, Users, Clock, AlertCircle } from "lucide-react";
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
      <section className="relative min-h-[90vh] overflow-hidden gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Welcome to <span className="text-gradient">Scruggs Podiatry</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {welcomeContent.split('\n')[0] || "Scruggs Podiatry, PC is honored to have been servicing the Baltimore Metro Community and vicinity for 25+ years."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center px-8 py-4 gradient-accent text-white rounded-lg font-semibold hover-lift shadow-glow transition-all"
                >
                  Request Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
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

      {/* Features */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Why Choose Scruggs Podiatry?</h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">Comprehensive foot and ankle care with a personal touch</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-dark rounded-2xl p-8 text-white shadow-glow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-accent rounded-full mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">25+ Years of Experience</h3>
              <p className="text-gray-200">Trusted podiatric care serving the Baltimore Metro area since establishment</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-8 text-white shadow-glow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-secondary rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">State-of-the-Art Care</h3>
              <p className="text-gray-200">Latest techniques and equipment in our modern Pikesville facility</p>
            </div>
            
            <div className="glass-dark rounded-2xl p-8 text-white shadow-glow-lg hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Treatment</h3>
              <p className="text-gray-200">Individual attention and customized care plans for every patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Comprehensive Foot & Ankle Care</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Expert treatment for all your podiatric needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General Podiatry", icon: Footprints, desc: "Routine foot care and preventive treatments" },
              { title: "Diabetic Foot Care", icon: Users, desc: "Specialized care for diabetic patients" },
              { title: "Custom Orthotics", icon: Award, desc: "Prescription orthotics for optimal support" },
              { title: "Foot Surgery", icon: Calendar, desc: "Advanced surgical procedures when needed" }
            ].map((service, index) => (
              <div key={index} className="glass p-6 rounded-xl shadow-glow hover-lift transition-all duration-300">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-sm mb-4">{service.desc}</p>
                <Link href="/services" className="text-purple-600 hover:text-purple-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 gradient-primary text-white rounded-lg font-bold shadow-glow hover-lift transition-all"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-20 gradient-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-dark rounded-2xl p-12 text-white shadow-glow-lg">
              <h3 className="text-2xl font-bold mb-4">New Patient?</h3>
              <p className="text-gray-200 mb-6">Schedule your first appointment and experience our personalized care approach.</p>
              <Link
                href="/appointment"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-700 rounded-lg font-bold shadow-glow"
              >
                Request Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="glass rounded-2xl p-12 shadow-glow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Returning Patient?</h3>
              <p className="text-gray-700 mb-6">Access patient forms, education resources, and manage your foot health.</p>
              <Link
                href="/patient-center"
                className="inline-flex items-center px-6 py-3 gradient-secondary text-white rounded-lg font-bold shadow-glow"
              >
                Patient Center
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
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
      <section className="py-8 bg-gradient-to-r from-yellow-100 to-orange-100 border-t border-yellow-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center">
              <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
              <h3 className="font-semibold text-gray-900">COVID-19 Safety Protocols</h3>
              <p className="text-gray-800">
                <strong className="text-gray-900">COVID-19 Update:</strong> We are open and following all safety protocols.
              </p>
            </div>
            <Link
              href="/covid-19"
              className="text-purple-700 hover:text-purple-800 font-semibold"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
