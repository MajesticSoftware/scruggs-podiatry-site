import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Footprints, Award, Users, Clock, AlertCircle, Stethoscope } from "lucide-react";
import { ThreeJSBackground } from "@/components/three-js-background";
import { loadContent } from "@/lib/content-loader";

export default function Home() {
  // Load welcome message content
  const welcomeContent = loadContent('website-opening');
  
  return (
    <>
      <ThreeJSBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <Image
          src="/images/slide1.jpg"
          alt="Healthy family feet"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-[90vh]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
                Welcome to <span className="text-gradient">Scruggs Podiatry</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl leading-relaxed drop-shadow">
                {welcomeContent.split('\n')[0] || "Scruggs Podiatry, PC is honored to have been servicing the Baltimore Metro Community and vicinity for 25+ years."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:4106537744"
                  className="inline-flex items-center px-8 py-4 gradient-accent text-white rounded-lg font-semibold hover-lift shadow-glow transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (410) 653-7744
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-400/30 via-purple-500/20 to-pink-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-glow-lg ring-1 ring-white/20">
                <Image
                  src="/DitraPodiatry.jpeg"
                  alt="Dr. Ditra S. Scruggs, DPM"
                  width={640}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <p className="text-white text-lg font-bold">Dr. Ditra S. Scruggs, DPM</p>
                  <p className="text-cyan-200 text-sm">Podiatrist & Surgeon • 25+ Years</p>
                </div>
              </div>
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
              { title: "Foot Surgery", icon: Stethoscope, desc: "Advanced surgical procedures when needed" }
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Call CTA */}
            <a href="tel:4106537744" className="group relative overflow-hidden rounded-2xl shadow-glow hover-lift block">
              <Image src="/images/cta-appointment.jpg" alt="Call Our Office" width={400} height={270} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-bold text-lg">Call Our Office</h3>
                <p className="text-blue-200 text-sm">(410) 653-7744</p>
              </div>
            </a>
            {/* Services CTA */}
            <Link href="/services" className="group relative overflow-hidden rounded-2xl shadow-glow hover-lift block">
              <Image src="/images/cta-services.jpg" alt="Our Services" width={400} height={270} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-bold text-lg">Our Services</h3>
                <p className="text-purple-200 text-sm">Comprehensive podiatric care</p>
              </div>
            </Link>
            {/* Team CTA */}
            <Link href="/about" className="group relative overflow-hidden rounded-2xl shadow-glow hover-lift block">
              <Image src="/images/cta-team.jpg" alt="Meet Our Team" width={400} height={270} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/40 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-bold text-lg">Meet Our Team</h3>
                <p className="text-teal-200 text-sm">Experienced & caring staff</p>
              </div>
            </Link>
            {/* Disorders CTA */}
            <Link href="/patient-education/common-disorders" className="group relative overflow-hidden rounded-2xl shadow-glow hover-lift block">
              <Image src="/images/cta-disorders.jpg" alt="Common Disorders" width={400} height={270} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/40 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <h3 className="text-white font-bold text-lg">Common Disorders</h3>
                <p className="text-pink-200 text-sm">Patient education resources</p>
              </div>
            </Link>
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
            <a
              href="tel:4106537744"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (410) 653-7744
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-blue-600 transition-all"
            >
              Contact Us
            </Link>
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
