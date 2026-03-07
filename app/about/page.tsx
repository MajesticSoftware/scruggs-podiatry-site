import Image from "next/image";
import { Award, Users, Clock, Heart } from "lucide-react";
import { loadContent } from "@/lib/content-loader";

export default function AboutPage() {
  const aboutContent = loadContent('scruggs-podiatry-current-website-text---about-us');
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <Image
          src="/images/p-scruggs2.jpg"
          alt="Dr. Scruggs Podiatry"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-purple-900/70 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              About <span className="text-gradient">Scruggs Podiatry</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-xl">
              Serving the Baltimore Metro Community with compassionate podiatric care for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="glass p-8 rounded-2xl shadow-glow-lg mb-12 hover-lift">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Practice</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Scruggs Podiatry, PC has been providing exceptional foot and ankle care to the Baltimore Metro Community for over 25 years. Our state-of-the-art facility in Pikesville offers the latest in cutting-edge techniques and equipment while maintaining the warmth and individual attention that has been our hallmark since the beginning.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that the best way to continue providing a full range of podiatric services is through our modern center of excellence. Our goal is to apply the art and science of podiatry to provide the utmost care for one of the most important parts of the body: your feet.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="gradient-primary p-8 rounded-xl shadow-glow hover-lift">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-white mr-2" />
                  Our Mission
                </h3>
                <p className="text-gray-100">
                  To provide comprehensive, compassionate podiatric care using the latest techniques and technologies while maintaining a personal touch and building lasting relationships with our patients.
                </p>
              </div>
              <div className="gradient-secondary p-8 rounded-xl shadow-glow hover-lift">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="h-6 w-6 text-white mr-2" />
                  Our Vision
                </h3>
                <p className="text-gray-100">
                  To be the leading podiatric practice in the Baltimore area, known for excellence in patient care, innovative treatments, and improving the quality of life for our patients through better foot health.
                </p>
              </div>
            </div>

            {/* Doctor Bio Section */}
            <div className="glass p-8 rounded-2xl shadow-glow-lg mb-12">
              <h2 className="text-2xl font-bold text-gradient mb-6">Meet Dr. Scruggs</h2>
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
                <div className="text-center">
                  <div className="relative w-full rounded-2xl overflow-hidden shadow-glow mb-3" style={{height: '320px'}}>
                    <Image
                      src="/images/p-scruggs1.jpg"
                      alt="Dr. Scruggs"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-gray-600 italic font-semibold">Dr. Scruggs, DPM</p>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="glass p-8 rounded-2xl shadow-glow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 shadow-glow group-hover:scale-105 transition-all">
                    <Image src="/images/p-scruggs-sm.jpg" alt="Dr. Scruggs" fill className="object-cover object-top" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Dr. Scruggs</h3>
                  <p className="text-purple-600 font-semibold">Podiatrist, DPM</p>
                  <p className="text-sm text-gray-500 mt-2">25+ years of expert podiatric care</p>
                </div>
                <div className="text-center group">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 shadow-glow group-hover:scale-105 transition-all">
                    <Image src="/images/p-sam-mcfadden.jpg" alt="Sam McFadden" fill className="object-cover object-top" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Sam McFadden</h3>
                  <p className="text-purple-600 font-semibold">Medical Assistant</p>
                  <p className="text-sm text-gray-500 mt-2">Dedicated to excellent patient care and support</p>
                </div>
                <div className="text-center group">
                  <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 shadow-glow group-hover:scale-105 transition-all">
                    <Image src="/images/p-shanda-jones2.jpg" alt="Shanda Jones" fill className="object-cover object-top" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Shanda Jones</h3>
                  <p className="text-purple-600 font-semibold">Office Manager</p>
                  <p className="text-sm text-gray-500 mt-2">Ensuring smooth operations and exceptional patient experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center glass-dark p-6 rounded-xl shadow-glow hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-accent rounded-full mb-4 shadow-glow">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Compassionate Care</h3>
              <p className="text-gray-200">We treat every patient with kindness, respect, and understanding</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl shadow-glow hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-primary rounded-full mb-4 shadow-glow">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Excellence</h3>
              <p className="text-gray-200">We strive for the highest standards in podiatric care and patient outcomes</p>
            </div>
            <div className="text-center glass-dark p-6 rounded-xl shadow-glow hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 gradient-secondary rounded-full mb-4 shadow-glow">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Reliability</h3>
              <p className="text-gray-200">We are committed to being there when our patients need us most</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
