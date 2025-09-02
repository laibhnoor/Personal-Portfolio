import React from "react";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2 mb-12">
          <Briefcase className="w-8 h-8 text-indigo-600" />
          Experience
        </h2>

        {/* Experience Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-800">
            Software Intern @ Triminage
          </h3>
          <p className="text-sm text-gray-500 mb-4">June 2024 – August 2024</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Collaborated on a client project built with{" "}
              <span className="font-medium">Next.js, TypeScript, and Supabase</span>, 
              focusing on delivering a responsive and intuitive UI/UX that 
              improved user task completion speed by <span className="font-medium">30%</span>.
            </li>
            <li>
              Supported optimization of authentication flows and database 
              integration, contributing to a{" "}
              <span className="font-medium">40% reduction</span> in manual setup time.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
