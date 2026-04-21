import { MapPin, Phone, Mail, Clock, Car, Printer, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/p-office.jpg"
          alt="Scruggs Podiatry Office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-xl">
              We're here to help with all your foot and ankle care needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gradient mb-8">Get in Touch</h2>
              
              {/* Office Location */}
              <div className="glass p-6 rounded-xl shadow-glow mb-6 hover-lift">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-glow">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Office Location</h3>
                    <p className="text-gray-700">
                      19 Walker Avenue, Suite 200<br />
                      Pikesville, MD 21208
                    </p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com/?q=19+Walker+Avenue,+Suite+200,+Pikesville,+MD+21208"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold mt-2"
                >
                  Get Directions <MapPin className="h-4 w-4 ml-1" />
                </a>
              </div>

              {/* Contact Methods */}
              <div className="gradient-accent p-6 rounded-xl shadow-glow mb-6">
                <h3 className="font-bold text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-100">Phone</p>
                      <a href="tel:4106537744" className="text-lg font-bold text-white hover:text-gray-200">
                        (410) 653-7744
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Printer className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-100">Fax</p>
                      <p className="text-lg font-bold text-white">(410) 653-7745</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-100">Email</p>
                      <a href="mailto:Scruggspodiatry@outlook.com" className="text-lg font-bold text-white hover:text-gray-200">
                        Scruggspodiatry@outlook.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass p-6 rounded-xl shadow-glow hover-lift">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-5 w-5 text-purple-600 mr-2" />
                  Office Hours
                </h3>
                <p className="text-gray-700 font-semibold mb-2">By Appointment Only</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded">
                    <span className="font-medium">Monday</span>
                    <span className="text-purple-600 font-semibold">9:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded">
                    <span className="font-medium">Tuesday</span>
                    <span className="text-purple-600 font-semibold">9:30 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded">
                    <span className="font-medium">Wednesday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded">
                    <span className="font-medium">Thursday</span>
                    <span className="text-purple-600 font-semibold">9:30 AM - 4:30 PM</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded">
                    <span className="font-medium">Friday</span>
                    <span className="text-purple-600 font-semibold">9:30 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between p-2 hover:bg-purple-50 rounded text-gray-500">
                    <span className="font-medium">Saturday & Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Find Us</h2>
              
              {/* Embedded Map */}
              <div className="bg-gray-200 rounded-lg shadow-lg h-96 mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.8021827294!2d-76.72422068464995!3d39.36059927950159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81b8e5b3f5555%3A0x0!2s19%20Walker%20Avenue%2C%20Suite%20200%2C%20Pikesville%2C%20MD%2021208!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Scruggs Podiatry Location"
                />
              </div>

              {/* Parking & Accessibility */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <Car className="h-5 w-5 text-blue-600 mr-2" />
                  Parking & Accessibility
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Free parking available in the building lot
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Wheelchair accessible entrance and facilities
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Elevator access to Suite 200
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Located near major highways for easy access
                  </li>
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="tel:4106537744"
                  className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (410) 653-7744
                </a>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Care</h3>
            <p className="text-gray-700">
              For medical emergencies or urgent symptoms outside of office hours, please contact your primary care physician 
              or visit the nearest emergency room. Do not wait for an appointment if you are experiencing severe pain, 
              signs of infection, or other urgent symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-white mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="tel:4106537744"
              className="glass-dark text-white p-6 rounded-xl text-center hover-lift shadow-glow transition-all"
            >
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow animate-pulse-slow">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Call Us</h3>
              <p className="text-gray-200 mt-2">(410) 653-7744</p>
            </a>
            
            <Link
              href="/patient-center"
              className="glass-dark text-white p-6 rounded-xl text-center hover-lift shadow-glow transition-all"
            >
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3 shadow-glow animate-pulse-slow">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Patient Center</h3>
              <p className="text-gray-200 mt-2">Forms and resources</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
