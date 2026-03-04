import Image from "next/image";
import { Award, Users, Clock, Heart } from "lucide-react";
import { loadContent } from "@/lib/content-loader";

export default function AboutPage() {
  const aboutContent = loadContent('scruggs-podiatry-current-website-text---about-us');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Scruggs Podiatry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Information about the Practice, History, Mission & Vision
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Practice</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Scruggs Podiatry, PC has been providing exceptional foot and ankle care to the Baltimore Metro Community for over 25 years. Our state-of-the-art facility in Pikesville offers the latest in cutting-edge techniques and equipment while maintaining the warmth and individual attention that has been our hallmark since the beginning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that the best way to continue providing a full range of podiatric services is through our modern center of excellence. Our goal is to apply the art and science of podiatry to provide the utmost care for one of the most important parts of the body: your feet.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-blue-600 mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide comprehensive, compassionate podiatric care using the latest techniques and technologies while maintaining a personal touch and building lasting relationships with our patients.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the leading podiatric practice in the Baltimore area, known for excellence in patient care, innovative treatments, and improving the quality of life for our patients through better foot health.
                </p>
              </div>
            </div>

            {/* Doctor Bio Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Dr. Scruggs</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Dr. Scruggs has been practicing podiatry for over 25 years, dedicating his career to providing exceptional foot and ankle care to patients throughout the Baltimore Metro area. His commitment to staying current with the latest advancements in podiatric medicine ensures that patients receive the most effective treatments available.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    After completing his medical education and specialized podiatric training, Dr. Scruggs established his solo practice with a vision of providing personalized, patient-centered care. Over the years, the practice has grown while maintaining its core values of compassion, excellence, and individual attention.
                  </p>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Education & Credentials</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Doctor of Podiatric Medicine (DPM)</li>
                    <li>Board Certified in Foot Surgery</li>
                    <li>Member of American Podiatric Medical Association</li>
                    <li>Member of Maryland Podiatric Medical Association</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <div className="flex items-center justify-center h-64 bg-gray-300">
                      <Users className="h-20 w-20 text-gray-400" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic text-center">Dr. Scruggs</p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Sam McFadden</h3>
                  <p className="text-gray-600">Medical Assistant</p>
                  <p className="text-sm text-gray-500 mt-2">Dedicated to providing excellent patient care and support</p>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Shanda Jones</h3>
                  <p className="text-gray-600">Office Manager</p>
                  <p className="text-sm text-gray-500 mt-2">Ensuring smooth operations and exceptional patient experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compassionate Care</h3>
              <p className="text-gray-600">We treat every patient with kindness, respect, and understanding</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in podiatric care and patient outcomes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">We are committed to being there when our patients need us most</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
