import { FileText, Download, CreditCard, Clock, AlertCircle, ClipboardList, Shield } from "lucide-react";
import Link from "next/link";

const insuranceProviders = [
  "Aetna PPO/HMO/Open Choice/Managed Choice/Elect Choice/US Healthcare",
  "Alliance PPO/Mamsi",
  "Anthem/Trigon",
  "Cigna PPO, HMO",
  "Optimum Choice/Optimum Choice Preferred & Advantage/MDIPA/MDIPA Preferred",
  "America's Health Plan",
  "Blue Cross of Maryland and National Accounts",
  "Blue Cross of the National Capital Area",
  "Blue Cross of Virginia (Trigon)",
  "Capital Care",
  "Champus/Champva/Tricare",
  "Medicare",
  "Mail Handlers",
  "NCPPO, NCAS",
  "National Association of Letter Carriers",
  "United Health Care (will see out of network)",
  "Pennsylvania Blue Shield",
  "Preferred Health Network",
  "Coventry Healthcare"
];

const patientForms = [
  {
    name: "Patient Information Form",
    description: "Basic patient demographics and contact information",
    icon: FileText
  },
  {
    name: "Physician Information Form",
    description: "Your primary care and other physicians' information",
    icon: ClipboardList
  },
  {
    name: "List of Medications",
    description: "Current medications and dosages",
    icon: FileText
  },
  {
    name: "PAD Assessment",
    description: "Peripheral Arterial Disease screening questionnaire",
    icon: ClipboardList
  },
  {
    name: "Privacy Statement (HIPAA)",
    description: "Notice of Privacy Practices and acknowledgment",
    icon: Shield
  }
];

export default function PatientCenterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Patient Center
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your visit to Scruggs Podiatry
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Patient Forms Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patient Forms</h2>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 text-center">
                <strong>Please print and fill out these forms before your visit to expedite your appointment.</strong>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {patientForms.map((form, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <form.icon className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{form.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{form.description}</p>
                      <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                        <Download className="h-4 w-4 mr-2" />
                        Download Form
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Having trouble downloading the forms?</p>
              <a href="tel:4104865454" className="text-blue-600 hover:text-blue-700 font-medium">
                Call us at (410) 486-5454 and we'll help
              </a>
            </div>
          </div>

          {/* What to Bring Section */}
          <div className="mb-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
              <ClipboardList className="h-8 w-8 text-blue-600 mr-3" />
              What to Bring to Your Appointment
            </h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Your insurance card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Names and contact information of your other doctors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">List of all current medications, or bring them with you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Any completed patient forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">•</span>
                  <span className="text-gray-700">Recent medical records or x-rays (if seeking a second opinion or transferring care)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Appointment Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-blue-600 mr-3" />
                When to Arrive
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Please arrive <strong>15 minutes before</strong> your scheduled appointment time to complete any 
                remaining forms. We strive to stay on schedule and do not double-book our patients. 
                New patients may require as much as 60 minutes for their initial evaluation depending on their condition.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-yellow-600 mr-3" />
                Cancellation Policy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Please call our office to schedule an appointment. If you are unable to make your appointment, 
                please notify us <strong>24 hours in advance</strong>. This allows us to offer the appointment 
                time to another patient in need.
              </p>
              <a href="tel:4104865454" className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-medium">
                Call (410) 486-5454
              </a>
            </div>
          </div>

          {/* Insurance Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Insurance Information</h2>
            <p className="text-gray-700 text-center mb-8">
              Scruggs Podiatry can offer you a wide range of insurance options and currently accepts the following coverage. 
              Call us at <a href="tel:4104865454" className="text-blue-600 hover:text-blue-700 font-medium">(410) 486-5454</a> for 
              additional information or to schedule a visit.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-start">
                  <Shield className="h-4 w-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{provider}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">
                We also accept all private insurance companies and self-pay options:
              </p>
              <p className="text-gray-600 mt-2">Cash, Check, Visa, MasterCard</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Your Visit?</h3>
            <p className="text-gray-600 mb-8">
              We look forward to providing you with exceptional podiatric care.
            </p>
            <Link
              href="/appointment"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Schedule Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
