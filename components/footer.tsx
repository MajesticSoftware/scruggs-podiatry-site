import Link from "next/link";
import { Phone, MapPin, Clock, Facebook } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>19 Walker Avenue, Suite 200</p>
                  <p>Pikesville, MD 21208</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <p>(410) 486-5454</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="space-y-1">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>By Appointment Only</span>
              </div>
              <p>Mon: 9am-6pm</p>
              <p>Tue & Wed: Closed</p>
              <p>Thu: 10am-5pm</p>
              <p>Fri: 10am-1:00pm</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="/patient-education" className="hover:text-blue-400 transition-colors">Patient Education</Link></li>
              <li><Link href="/appointment" className="hover:text-blue-400 transition-colors">Request Appointment</Link></li>
              <li><Link href="/patient-center" className="hover:text-blue-400 transition-colors">Patient Forms</Link></li>
              <li><Link href="/covid-19" className="hover:text-blue-400 transition-colors">COVID-19 Update</Link></li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Affiliations</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-300">Member of:</p>
              <ul className="space-y-1 text-sm">
                <li>American Podiatric Medical Association</li>
                <li>Maryland Podiatric Medical Association</li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-blue-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Scruggs Podiatry PC. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            {" | "}
            <Link href="/sitemap" className="hover:text-blue-400 transition-colors">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
