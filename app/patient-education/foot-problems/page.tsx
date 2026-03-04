import { loadContent } from "@/lib/content-loader";
import { AlertTriangle, Activity, Baby, Heart, Clock } from "lucide-react";
import Link from "next/link";

export default function FootProblemsPage() {
  const content = loadContent('scruggs-podiatry-current-website-text---patient-education---foot-problems');
  
  const problemCategories = [
    {
      icon: Activity,
      title: "Acquired from Improper Footwear",
      problems: [
        "Bunions",
        "Hammertoes", 
        "Corns and calluses",
        "Ingrown toenails",
        "Neuromas"
      ],
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Baby,
      title: "Inherited or Congenital",
      problems: [
        "Flat feet",
        "High arches",
        "Clubfoot",
        "Extra toes",
        "Webbed toes"
      ],
      color: "bg-green-50 text-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Injury-Related",
      problems: [
        "Fractures",
        "Sprains and strains",
        "Achilles tendon injuries",
        "Plantar fasciitis",
        "Stress fractures"
      ],
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Clock,
      title: "Age and Wear",
      problems: [
        "Arthritis",
        "Fallen arches",
        "Heel spurs",
        "Circulation problems",
        "Thinning fat pads"
      ],
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Heart,
      title: "Systemic Conditions",
      problems: [
        "Diabetic neuropathy",
        "Peripheral arterial disease",
        "Gout",
        "Psoriasis",
        "Rheumatoid arthritis"
      ],
      color: "bg-yellow-50 text-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Understanding Foot Problems
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about common foot and ankle problems, their causes, and when to seek treatment
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
                Foot and ankle problems can significantly impact your daily life, affecting your ability to walk, 
                work, and enjoy activities. Understanding the different types of foot problems and their causes 
                is the first step toward proper treatment and prevention.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Foot and ankle problems usually fall into several categories based on their origin. Some are 
                acquired through lifestyle factors, while others may be inherited or develop due to injury or 
                systemic conditions.
              </p>
            </div>
          </div>

          {/* Problem Categories */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Categories of Foot Problems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {problemCategories.map((category, index) => (
              <div key={index} className={`${category.color.split(' ')[0]} rounded-lg p-6 hover:shadow-lg transition-shadow`}>
                <category.icon className={`h-10 w-10 ${category.color.split(' ')[1]} mb-4`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.problems.map((problem, pIndex) => (
                    <li key={pIndex} className="flex items-start text-gray-700">
                      <span className={`mr-2 ${category.color.split(' ')[1]}`}>•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Common Symptoms */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Common Symptoms to Watch For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Pain & Discomfort</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sharp or burning pain in feet or ankles</li>
                  <li>• Aching after standing or walking</li>
                  <li>• Morning heel pain</li>
                  <li>• Pain that worsens with activity</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Physical Changes</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Swelling or inflammation</li>
                  <li>• Changes in skin color or texture</li>
                  <li>• Deformities or bumps</li>
                  <li>• Changes in toenail appearance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Functional Issues</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Difficulty walking or limping</li>
                  <li>• Trouble fitting into shoes</li>
                  <li>• Loss of balance or stability</li>
                  <li>• Reduced range of motion</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Sensory Symptoms</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Numbness or tingling</li>
                  <li>• Burning sensations</li>
                  <li>• Loss of feeling</li>
                  <li>• Temperature sensitivity</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Factors</h3>
              <p className="text-gray-700 mb-4">Certain factors increase your risk of developing foot problems:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Age (risk increases with age)</li>
                <li>• Obesity or excess weight</li>
                <li>• Diabetes or circulation problems</li>
                <li>• Occupations requiring prolonged standing</li>
                <li>• High-impact sports or activities</li>
                <li>• Family history of foot problems</li>
                <li>• Wearing improper footwear</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Prevention Tips</h3>
              <p className="text-gray-700 mb-4">Many foot problems can be prevented with proper care:</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Wear properly fitting, supportive shoes</li>
                <li>• Maintain a healthy weight</li>
                <li>• Exercise regularly to improve circulation</li>
                <li>• Practice good foot hygiene</li>
                <li>• Trim toenails properly</li>
                <li>• Address problems early</li>
                <li>• Regular podiatric check-ups</li>
              </ul>
            </div>
          </div>

          {/* When to Seek Help */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
              When to See a Podiatrist
            </h2>
            <p className="text-gray-700 mb-4">Don't delay seeking professional help if you experience:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2">
                <li>• Persistent pain lasting more than a few days</li>
                <li>• Signs of infection (fever, red streaks, warmth)</li>
                <li>• Open sores or wounds that won't heal</li>
                <li>• Sudden severe pain or injury</li>
              </ul>
              <ul className="space-y-2">
                <li>• Progressive deformity or changes</li>
                <li>• Numbness or loss of sensation</li>
                <li>• Discoloration of toes or feet</li>
                <li>• Any concern about your foot health</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Don't Let Foot Problems Limit Your Life</h3>
            <p className="text-lg mb-8 text-blue-100">
              Early diagnosis and treatment can prevent minor issues from becoming major problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Schedule an Evaluation
              </Link>
              <Link
                href="/patient-education/common-disorders"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-blue-700 transition-all"
              >
                Learn About Specific Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
