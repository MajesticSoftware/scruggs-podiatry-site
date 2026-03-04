import Link from "next/link";
import { Phone, MapPin, Clock, Facebook, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-all">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                </div>
                <p className="text-sm text-gray-200">
                  19 Walker Avenue, Suite 200<br />
                  Pikesville, MD 21208
                </p>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-all">
                  <Phone className="h-4 w-4 text-cyan-400" />
                </div>
                <a href="tel:4104865454" className="text-sm text-gray-200 hover:text-cyan-400 transition-colors">
                  (410) 486-5454
                </a>
              </div>
              <div className="flex items-center group">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 group-hover:scale-110 transition-all">
                  <Mail className="h-4 w-4 text-cyan-400" />
                </div>
                <a href="mailto:ScruggsPodiatry@verizon.net" className="text-sm text-gray-200 hover:text-cyan-400 transition-colors">
                  ScruggsPodiatry@verizon.net
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Office Hours</h3>
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
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/appointment" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Request Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-center" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Patient Center
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/patient-education" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Patient Education
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-gray-200 hover:text-cyan-400 transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full mr-2 group-hover:scale-150 transition-all"></span>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Affiliations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Affiliations</h3>
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
