"use client";

import { useState } from "react";
import { Calendar, Clock, Phone, Mail, User, AlertCircle } from "lucide-react";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "morning",
    patientType: "new",
    reason: "",
    howHeard: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Show success message or redirect
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Request an Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your visit with Dr. Scruggs for expert podiatric care
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Important Information</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Please use this form for general appointment requests only. DO NOT send personal health information through this form. 
                  Specific patient care must be addressed during your appointment.
                </p>
                <p className="text-gray-700 text-sm">
                  A representative will contact you within one to two business days to confirm your appointment.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Phone className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Call Directly</h3>
              </div>
              <p className="text-gray-700 mb-3">To speak to someone directly:</p>
              <a href="tel:4104865454" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                (410) 486-5454
              </a>
            </div>
            
            <div className="bg-red-50 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <AlertCircle className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Urgent Care</h3>
              </div>
              <p className="text-gray-700">
                If you have symptoms of an urgent nature, please call your primary care doctor or go to the emergency room immediately.
              </p>
            </div>
          </div>

          {/* Appointment Request Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointment Request Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="morning"
                      checked={formData.preferredTime === "morning"}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
                      <Clock className="h-5 w-5 mr-2 text-gray-600 peer-checked:text-blue-600" />
                      <span className="font-medium">Morning</span>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="afternoon"
                      checked={formData.preferredTime === "afternoon"}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
                      <Clock className="h-5 w-5 mr-2 text-gray-600 peer-checked:text-blue-600" />
                      <span className="font-medium">Afternoon</span>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="preferredTime"
                      value="evening"
                      checked={formData.preferredTime === "evening"}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
                      <Clock className="h-5 w-5 mr-2 text-gray-600 peer-checked:text-blue-600" />
                      <span className="font-medium">Evening</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Patient Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are You a New or Returning Patient? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="patientType"
                      value="new"
                      checked={formData.patientType === "new"}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
                      <span className="font-medium">I am a new patient</span>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="patientType"
                      value="returning"
                      checked={formData.patientType === "returning"}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="flex items-center justify-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 peer-checked:border-blue-600 peer-checked:bg-blue-50">
                      <span className="font-medium">I am a returning patient</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Reason for Visit */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Nature of Visit / Reason for Appointment / Symptoms *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please briefly describe your symptoms or reason for visit..."
                />
              </div>

              {/* How Did You Hear */}
              <div>
                <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-2">
                  How Did You Hear About Us? *
                </label>
                <select
                  id="howHeard"
                  name="howHeard"
                  required
                  value={formData.howHeard}
                  onChange={handleChange}
                  className="px-4 py-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Please select...</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Doctor Referral</option>
                  <option value="insurance">Insurance Provider</option>
                  <option value="friend">Friend or Family</option>
                  <option value="facebook">Facebook</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02]"
                >
                  Submit Appointment Request
                </button>
              </div>
            </form>
          </div>

          {/* Office Hours */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              Office Hours
            </h3>
            <p className="text-gray-700 font-semibold mb-3">By Appointment Only</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
              <div>Monday: 9:00 AM - 6:00 PM</div>
              <div>Tuesday: Closed</div>
              <div>Wednesday: Closed</div>
              <div>Thursday: 10:00 AM - 5:00 PM</div>
              <div>Friday: 10:00 AM - 1:00 PM</div>
              <div>Saturday & Sunday: Closed</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
