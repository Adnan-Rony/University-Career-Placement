import React from 'react';

export const Designertemplate = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">DANIEL GALLEGO</h1>
          <h2 className="text-2xl font-light mb-4">UX DESIGNER</h2>
          <p className="text-sm text-gray-300">
            123 Anywhere St., Any City | hello@reallygreatsite.com | www.reallygreatsite.com
          </p>
        </header>

        <div className="p-8">
          {/* Summary */}
          <section className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3 italic">SUMMARY</h3>
              <p className="text-gray-700 leading-relaxed">
                UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply 
                creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric 
                problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and 
                methodologies to streamline processes and elevate user satisfaction
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 italic">TECHNICAL SKILLS</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-700 mb-2">Prototyping Tools</p>
                  <p className="text-gray-700 mb-2">User Research</p>
                  <p className="text-gray-700">Information Architecture</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">Interaction Design</p>
                  <p className="text-gray-700 mb-2">Visual Design</p>
                  <p className="text-gray-700">Usability Heuristics</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">Accessibility</p>
                  <p className="text-gray-700 mb-2">Responsive Design</p>
                  <p className="text-gray-700">User Testing Tools</p>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Experience */}
          <section className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 italic">PROFESSIONAL EXPERIENCE</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-bold text-gray-800">Instant Chartz App, Morcelle Program</h4>
                  <span className="text-sm font-semibold text-gray-700">Jan 2023 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Led development of an advanced automation system, achieving a 15% increase in operational efficiency.</li>
                  <li>Streamlined manufacturing processes, reducing production costs by 10%.</li>
                  <li>Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-bold text-gray-800">System UX Engineer, XarrowAI Industries</h4>
                  <span className="text-sm font-semibold text-gray-700">Feb 2021 - Dec 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Designed and optimised a robotic control system, realizing a 12% performance improvement.</li>
                  <li>Coordinated testing and validation, ensuring compliance with industry standards.</li>
                  <li>Provided technical expertise, contributing to a 15% reduction in system failures.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 italic">EDUCATION</h3>
              
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-bold text-gray-800">UX Industrial Basics and General Application</h4>
                  <span className="text-sm font-semibold text-gray-700">Aug 2016 - Oct 2019</span>
                </div>
                <p className="text-gray-700 mb-1">University of Engineering UX Cohort</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Major in Automotive Technology.</li>
                  <li>Thesis on "Technological Advancements within the current Mechatronics Industry".</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-bold text-gray-800">Bachelor of Design in Process Engineering</h4>
                  <span className="text-sm font-semibold text-gray-700">May 2014 - May 2016</span>
                </div>
                <p className="text-gray-700 mb-1">Engineering University</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Relevant coursework in Structural Design and Project Management.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4 italic">ADDITIONAL INFORMATION</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-semibold">Languages:</span> English, French, Mandarin.</li>
                <li><span className="font-semibold">Certifications:</span> Professional Design Engineer (PDE) License, Project Management Tech (PMT).</li>
                <li><span className="font-semibold">Awards/Activities:</span> Most Innovative Employer of the Year (2021), Overall Best Employee Division Two (2024), Onboarding Project Lead (2023)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Designertemplate;