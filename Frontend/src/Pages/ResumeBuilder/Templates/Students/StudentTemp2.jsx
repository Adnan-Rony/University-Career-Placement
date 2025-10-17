import React from "react";

export const StudentTemp2 = () => {
  const resumeData = {
    about: {
      name: "Theodore Woods",
      email: "jofafuhug@mailinator.com",
      phone: "+1 (578) 533-7166",
      location: "Ut nesciunt aliqua",
      linkedin: "Vel in accusantium m",
      portfolio: "Laborum ullam aut op",
      summary: "Quis tempore et exp",
    },
    education: [
      {
        degree: "Voluptatem exercita",
        institution: "Qui doloribus cumque",
        startYear: "2013",
        endYear: "2001",
        grade: "Incidunt ea volupta",
      },
      {
        degree: "Eum in illo obcaecat",
        institution: "Rerum omnis sed enim",
        startYear: "1975",
        endYear: "2011",
        grade: "Assumenda Nam doloru",
      },
    ],
    experience: [],
    skills: [
      {
        name: "react",
      },
      {
        name: "node",
      },
      {
        name: "research",
      },
    ],
    projects: [],
  };

  return (
    <div className="min-h-screen bg-white p-6 max-w-4xl border-2">
      <div className="h-20 bg-orange-500"></div>
      <div className="flex justify-between my-6">
 <div className=" text-white  mb-6">
        <h1 className="text-5xl font-extrabold text-blue-600 my-2">
          Tamjid Ahmed
        </h1>
        <p className="text-xl text-black">Student</p>
      </div>

       <div className="flex flex-col text-blue-800 ">
        <p className="font-semibold">
          <a href="linkedin.com/in/name" target="_blank">
            linkedin
          </a>
          
        </p>
        <p className="font-semibold">
          01813382223
        </p>
       
        <p className="font-semibold">
          <a href="mailto:hello@reallygreatsite.com">
            tamjidahmed@gmail.com
          </a>
        </p>
       
        <p className="">
          <a href="#" target="_blank">
            Click here for my portfolio
          </a>
        </p>
      </div>
      </div>
     
    
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Experience</h2>
        <div className="ml-4 space-y-4 my-4">
          <div>
            <h3 className="text-xl font-semibold">Art Director</h3>
            <p className=" font-medium">
              Lotus Design Consultancy - a global design firm that specializes
              in digital content for various industries
            </p>
            <p className="text-gray-600 font-medium">
              March 2022 to August 2025 (3 years, 5 months)
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Increased productivity by 70% year over year by leading a team
                of 20 senior and junior designers
              </li>
              <li>
                Maintained a client satisfaction rate of 100% after being in
                charge of overseeing multiple projects simultaneously
              </li>
              <li>
                Increased client partnerships to 50% year over year by
                consistently liaising with clients for creative requests
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Senior Graphic Designer</h3>
            <p className="font-medium">Schuester Digital Media Group</p>
            <p className="text-gray-600 font-medium">
              November 2020 to January 2022 (1 year, 2 months)
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Received a 100% rating from clients after working closely with
                the marketing team to produce editorial concepts for major
                magazines
              </li>
              <li>
                Boosted team efficiency by 90% by managing up to five projects
                at a time
              </li>
              <li>
                Designed more than 80% of the team's marketing campaigns for the
                year, which included graphics for online and offline layouts
              </li>
              <li>Mentored junior designers on projects</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex">
        <section className="w-1/2 mr-4 ">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Education</h2>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">
              Master of Fine Arts in Digital Media
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">The University of Roseton, 2020</p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Best Creative Thesis</li>
                  <li>Awardee, Roseton Scholarship</li>
                  <li>Art Director, University of Roseton Magazine</li>
                  <li>Founding Member, Roseton Creative Circle</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Bachelor of Arts in Graphic Design
                </h3>
                <p className="text-gray-600">
                  Croalstead State University, 2016
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Graduated Magna Cum Laude</li>
                  <li>Art Director, Croalstead U Magazine</li>
                  <li>President, University Art Club</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-1/2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Print and Web Design</li>
            <li>Illustration</li>
            <li>Photography</li>
            <li>Motion Graphics</li>
            <li>Videography</li>
            <li>Photo and Video Editing</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
