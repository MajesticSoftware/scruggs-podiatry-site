"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  {
    label: "Patient Education",
    href: "/patient-education",
    children: [
      { href: "/patient-education/what-is-a-podiatrist", label: "What is a Podiatrist?" },
      { href: "/patient-education/foot-care", label: "Foot Care" },
      { href: "/patient-education/foot-problems", label: "Foot Problems" },
      { href: "/patient-education/common-disorders", label: "Common Disorders" },
      { href: "/patient-education/links", label: "Links & Resources" },
    ],
  },
  { href: "/patient-center", label: "Patient Center" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact Us" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="gradient-mesh shadow-glow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/logo-scruggs-podiatry-tall.png"
                alt="Scruggs Podiatry PC"
                width={120}
                height={60}
                className="h-12 w-auto group-hover:scale-105 transition-all"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/about"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/10"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/10"
            >
              Services
            </Link>
            {/* Patient Education Dropdown */}
            <div className="relative group">
              <button className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-semibold inline-flex items-center transition-all hover:bg-white/10">
                Patient Education
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-xl shadow-glow glass-dark ring-1 ring-white ring-opacity-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link
                    href="/patient-education"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    Education Center
                  </Link>
                  <Link
                    href="/patient-education/what-is-a-podiatrist"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    What is a Podiatrist?
                  </Link>
                  <Link
                    href="/patient-education/foot-care"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    Foot Care
                  </Link>
                  <Link
                    href="/patient-education/foot-problems"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    Foot Problems
                  </Link>
                  <Link
                    href="/patient-education/common-disorders"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    Common Disorders
                  </Link>
                  <Link
                    href="/patient-education/links"
                    className="block px-4 py-2 text-sm text-white hover:bg-white/10 hover:text-gray-200"
                  >
                    Links & Resources
                  </Link>
                </div>
              </div>
            </div>
            {navigationItems
              .filter((item) => !["About Us", "Services", "Patient Education"].includes(item.label))
              .map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <div className="md:hidden">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/50"
                      >
                        {isOpen ? (
                          <X className="h-6 w-6" />
                        ) : (
                          <Menu className="h-6 w-6" />
                        )}
                      </button>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-semibold transition-all hover:bg-white/10"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
