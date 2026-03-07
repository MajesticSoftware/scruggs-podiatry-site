import Link from "next/link";
import { Calendar, Users, Rocket, Target, Mountain, Lightbulb, TrendingUp, Briefcase } from "lucide-react";

export default function SummerCampPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-mesh py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center glass-dark p-12 rounded-2xl shadow-glow-lg animate-float">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Summer Camp <span className="text-gradient">2026</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-6">
              Business. Finance. Innovation. And a Whole Lot of Fun.
            </p>
            <div className="flex items-center justify-center gap-2 text-xl text-cyan-300 font-semibold">
              <Calendar className="h-6 w-6" />
              <span>July 6 – July 17, 2026</span>
            </div>
            <p className="text-lg text-gray-300 mt-4">
              A two-week immersive experience for teens ages 15–18.
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">What You'll Experience</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Business Incubator Lab */}
            <div className="glass p-8 rounded-2xl shadow-glow hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Incubator Lab</h3>
              <p className="text-gray-700">
                Develop your own business idea — individually or in teams — inside an incubator-styled environment.
              </p>
            </div>

            {/* Entrepreneurship Workshops */}
            <div className="glass p-8 rounded-2xl shadow-glow hover-lift">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mb-6 shadow-glow">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneurship Workshops</h3>
              <p className="text-gray-700">
                Learn how real businesses are built: branding, pricing, customer discovery, pitching, and product development.
              </p>
            </div>

            {/* Finance Workshops */}
            <div className="glass p-8 rounded-2xl shadow-glow hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mb-6 shadow-glow">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Finance Workshops</h3>
              <p className="text-gray-700">
                Understand money beyond the basics — budgeting, investing, wealth-building principles, and financial decision-making.
              </p>
            </div>

            {/* Creative Expression Block */}
            <div className="glass p-8 rounded-2xl shadow-glow hover-lift">
              <div className="w-16 h-16 gradient-mesh rounded-full flex items-center justify-center mb-6 shadow-glow">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Expression Block</h3>
              <p className="text-gray-700">
                Explore product design, visual storytelling, or arts-based entrepreneurship pathways.
              </p>
            </div>

            {/* Outdoor Recreation */}
            <div className="glass p-8 rounded-2xl shadow-glow hover-lift">
              <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mb-6 shadow-glow">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outdoor Recreation</h3>
              <p className="text-gray-700">
                Led by university staff to let out some steam, reset your mind, and build team energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              By the End of Camp, You'll:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="glass-dark p-6 rounded-xl text-center shadow-glow hover-lift">
              <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-semibold">Pitch a business idea</p>
            </div>

            <div className="glass-dark p-6 rounded-xl text-center shadow-glow hover-lift">
              <div className="w-12 h-12 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-semibold">Understand core financial principles</p>
            </div>

            <div className="glass-dark p-6 rounded-xl text-center shadow-glow hover-lift">
              <div className="w-12 h-12 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-semibold">Strengthen teamwork and leadership skills</p>
            </div>

            <div className="glass-dark p-6 rounded-xl text-center shadow-glow hover-lift">
              <div className="w-12 h-12 gradient-mesh rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <p className="text-white font-semibold">Build confidence in your decision-making</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl text-white font-bold">
              Leave with a clearer vision for your future
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="gradient-mesh p-12 rounded-2xl shadow-glow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Join Summer Camp 2026?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Transform your summer into an unforgettable journey of business, finance, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-700 font-bold rounded-lg shadow-glow hover-lift transition-all"
              >
                Get More Information
              </Link>
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-purple-700 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
