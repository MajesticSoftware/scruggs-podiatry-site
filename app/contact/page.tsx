import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help with all your foot and ankle care needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              {/* Office Location */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  Office Location
                </h3>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold">Walker Professional Building</p>
                  <p>19 Walker Avenue, Suite 200</p>
                  <p>Pikesville, MD 21208</p>
                  
                  <div className="pt-4">
                    <a
                      href="https://www.google.com/maps/search/19+Walker+Avenue,+Suite+200,+Pikesville,+MD+21208"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Get Directions
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:4104865454" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        (410) 486-5454
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Fax</p>
                      <p className="text-lg font-semibold text-gray-900">(410) 653-7745</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:ScruggsPodiatry@verizon.net" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                        ScruggsPodiatry@verizon.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  Office Hours
                </h3>
                <p className="text-gray-700 font-semibold mb-4">By Appointment Only</p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday</span>
                    <span className="font-medium text-gray-500">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span className="font-medium">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-medium">10:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday & Sunday</span>
                    <span className="font-medium text-gray-500">Closed</span>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/appointment"
                  className="flex items-center justify-center px-6 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  Request Appointment
                </Link>
                <a
                  href="tel:4104865454"
                  className="flex items-center justify-center px-6 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
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
    </div>
  );
}
