import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, AlertCircle, Calendar } from "lucide-react";
import { loadContent } from "@/lib/content-loader";

const disorders = {
  "achilles-tendonitis-flat-feet": {
    name: "Achilles Tendonitis & Flat Feet",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---achilles-tendonitis-flat-feet"
  },
  "arthritic-conditions": {
    name: "Arthritic Conditions",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---arthritic-conditions"
  },
  "athletes-foot": {
    name: "Athlete's Foot",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---athletes-foot"
  },
  "bunions": {
    name: "Bunions",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---bunions"
  },
  "corns-callouses": {
    name: "Corns & Callouses",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---corns-callouses"
  },
  "custom-orthotics": {
    name: "Custom Orthotics",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---custom-orthotics"
  },
  "diabetic-wound-care": {
    name: "Diabetic Wound Care",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---diabetic-wound-care"
  },
  "fungus-nails": {
    name: "Fungus Nails",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---fungus-nails"
  },
  "haglunds-deformity": {
    name: "Haglund's Deformity",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---haglunds-deformity"
  },
  "hammertoes": {
    name: "Hammertoes",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---hammertoes"
  },
  "heel-pain-bone-spurs-plantar-fasciitis": {
    name: "Heel Pain, Bone Spurs & Plantar Fasciitis",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---heel-pain-bone-spurs-plantar-fasciitis"
  },
  "high-blood-pressure": {
    name: "High Blood Pressure",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---high-blood-pressure"
  },
  "ingrown-nails": {
    name: "Ingrown Nails",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---ingrown-nails"
  },
  "neuromas": {
    name: "Neuromas",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---neuromas"
  },
  "peripheral-arterial-disease": {
    name: "Peripheral Arterial Disease",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---peripheral-arterial-disease"
  },
  "peripheral-neuropathy": {
    name: "Peripheral Neuropathy",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---peripheral-neuropathy"
  },
  "psoriasis": {
    name: "Psoriasis",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---psoriasis"
  },
  "skin-cancers-of-the-feet": {
    name: "Skin Cancers of the Feet",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---skin-cancers-of-the-feet"
  },
  "sprains-strains-fractures": {
    name: "Sprains, Strains & Fractures",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---sprains-strains-fractures"
  },
  "surgery": {
    name: "Surgery",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---surgery"
  },
  "sweaty-feet": {
    name: "Sweaty Feet",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---sweaty-feet"
  },
  "warts-growths": {
    name: "Warts & Growths",
    contentFile: "scruggs-podiatry-current-website-text---patient-education---common-disorders---warts-growths"
  }
};

interface PageProps {
  params: {
    slug: string;
  };
}

function formatContent(content: string) {
  // Remove header lines and clean up the content
  const lines = content.split('\n');
  const cleanedLines = lines
    .slice(6) // Skip the header lines
    .filter(line => line.trim() !== '')
    .map(line => line.trim());
  
  // Join the content and split into paragraphs
  const text = cleanedLines.join('\n');
  const sections = text.split(/\n{2,}/);
  
  return sections.map((section, index) => {
    // Check if it's a heading (all caps or ends with ?)
    if (section.match(/^[A-Z\s]+$/) || section.endsWith('?')) {
      return (
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {section}
        </h2>
      );
    }
    
    // Check if it's a list item
    if (section.includes('•') || section.match(/^\d+\./)) {
      const items = section.split('\n').filter(item => item.trim());
      return (
        <ul key={index} className="list-disc list-inside space-y-2 my-4 text-gray-600">
          {items.map((item, i) => (
            <li key={i}>{item.replace(/^[•\d.]\s*/, '')}</li>
          ))}
        </ul>
      );
    }
    
    // Regular paragraph
    return (
      <p key={index} className="text-gray-600 leading-relaxed mb-4">
        {section}
      </p>
    );
  });
}

export default function DisorderPage({ params }: PageProps) {
  const disorder = disorders[params.slug as keyof typeof disorders];
  
  if (!disorder) {
    notFound();
  }
  
  const content = loadContent(disorder.contentFile);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/patient-education/common-disorders"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Common Disorders
          </Link>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {disorder.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about symptoms, causes, and treatment options
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {formatContent(content)}
            </div>
            
            {/* Call to Action */}
            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 text-blue-600 mr-2" />
                When to See a Podiatrist
              </h3>
              <p className="text-gray-700 mb-6">
                If you're experiencing symptoms of {disorder.name.toLowerCase()}, don't wait to seek professional care. 
                Early diagnosis and treatment can prevent complications and improve outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Appointment
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg border-2 border-blue-600 hover:bg-blue-50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Medical Disclaimer:</strong> This information is for educational purposes only and is not intended 
              as medical advice. Always consult with Dr. Scruggs or a qualified healthcare provider for proper diagnosis 
              and treatment of any medical condition.
            </p>
          </div>
          
          {/* Related Conditions */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Related Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(disorders)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 4)
                .map(([slug, info]) => (
                  <Link
                    key={slug}
                    href={`/patient-education/common-disorders/${slug}`}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors group"
                  >
                    <span className="text-gray-700 group-hover:text-blue-600 font-medium">
                      {info.name}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(disorders).map((slug) => ({
    slug,
  }));
}
