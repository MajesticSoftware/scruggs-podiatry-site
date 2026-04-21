import { Shield, Thermometer, Users, HandMetal, Clock, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CovidPage() {
  const safetyMeasures = [
    {
      icon: Thermometer,
      title: "Temperature Screening",
      description: "We will take your temperature upon arrival at our office"
    },
    {
      icon: Shield,
      title: "Mask Requirements",
      description: "We wear masks and ask all patients to wear masks during their visit"
    },
    {
      icon: Users,
      title: "Social Distancing",
      description: "We strictly adhere to social distancing guidelines and schedule appointments accordingly"
    },
    {
      icon: HandMetal,
      title: "Hand Sanitization",
      description: "Hand sanitizer is available and we ask all patients to use it upon arrival"
    },
    {
      icon: Clock,
      title: "Appointment Spacing",
      description: "Appointments are spaced to minimize contact between patients"
    },
    {
      icon: CheckCircle2,
      title: "Deep Cleaning",
      description: "Each room, exam chair, and door handle is thoroughly cleaned before and after each visit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              COVID-19 Safety Protocols
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your health and safety are our top priorities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As part of Maryland's Healthcare Community, we are committed to the health and safety of our patients, 
                community, and providers. We have all been through a lot during the last few months and we are happy 
                to inform you that we are scheduling office appointments to address all of your Podiatry needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Fortunately, as a medical and surgical practice, many of our clean and sterile techniques are second 
                nature to us. Due to COVID-19, we have implemented special measures to ensure the safety of our 
                patients and our staff.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="tel:4106537744"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                >
                  Call (410) 653-7744 to Schedule
                </a>
              </div>
            </div>
          </div>

          {/* Safety Measures Grid */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Safety Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {safetyMeasures.map((measure, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                <measure.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{measure.title}</h3>
                <p className="text-gray-600">{measure.description}</p>
              </div>
            ))}
          </div>

          {/* Pre-Visit Procedures */}
          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertCircle className="h-8 w-8 text-blue-600 mr-3" />
              Before Your Appointment
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>Our office will call you to ask a few questions about your travel, health, and symptoms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>Please arrive on time as we are strictly adhering to appointment schedules to maintain social distancing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span>Bring your own mask or let us know if you need one from our supply</span>
              </li>
            </ul>
          </div>

          {/* Visitor Policy */}
          <div className="bg-yellow-50 rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visitor Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              We recognize the support that a companion can provide during appointments, but we ask that you 
              understand the need to limit the number of people in our office to minimize the risk to other 
              patients and staff. Therefore, <strong>office visits are currently for patients only</strong>.
            </p>
            <p className="text-gray-700 mt-4">
              If you require assistance or have special circumstances, please contact our office to discuss 
              accommodations.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions or Concerns?</h3>
            <p className="text-gray-700 mb-6">
              Your comfort and safety are our priority. Please feel free to contact us with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4106537744"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                Call (410) 653-7744
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Contact Us
              </Link>
            </div>
            <p className="text-gray-600 mt-6 italic">
              We have missed you all and look forward to safely and confidently caring for you at your next appointment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
