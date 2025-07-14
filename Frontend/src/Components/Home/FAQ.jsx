import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router";

const faqData = [
  {
    question: "Can you tell me about yourself?",
    answer:
      "I'm a MERN Stack developer with a strong passion for building scalable web applications. I’ve worked on projects like eCommerce platforms and career placement portals using React, Node.js, MongoDB, and Express. I enjoy problem-solving and continuously learning new technologies. I'm currently looking for an opportunity where I can contribute to a team and grow as a developer.",
  },
  {
    question: "What are your strengths and weaknesses?",
    answer:
      "My strengths include strong problem-solving skills, adaptability, and a keen eye for detail. I excel at working under pressure and meeting tight deadlines. As for weaknesses, I sometimes take on too much responsibility, but I'm learning to delegate tasks more effectively.",
  },
  {
    question: "Why do you want to work here?",
    answer:
      "I admire your company’s focus on innovation and technology. The role aligns perfectly with my skills in full-stack development, and I believe this environment will help me grow professionally while contributing value to your team",
  },
  {
    question: "Tell me about a challenge you faced and how you handled it.",
    answer:
      "While building a job portal project, I faced an issue integrating Firebase authentication with MongoDB for role-based access. After researching and experimenting, I successfully linked Firebase UIDs with MongoDB users and secured routes using JWTs. It taught me a lot about authentication and API security",
  },
  {
    question: "What programming languages are you most comfortable with?",
    answer:
      "I’m most comfortable with JavaScript and TypeScript, especially within the MERN stack. I also have experience with Python for scripting and basic automation tasks.",
  },
  {
    question: "Do you prefer working alone or in a team?",
    answer:
      "I enjoy working in a team environment where ideas are shared and collaboration happens. However, I’m also comfortable working independently and taking ownership of tasks when needed.",
  },
  {
    question: "How do you handle tight deadlines or pressure?",
    answer:
      "I stay calm under pressure by breaking tasks into smaller goals, prioritizing work, and staying focused. I also communicate with my team early if I anticipate any blockers.",
  },
  {
    question: "Where do you see yourself in five years?",
    answer:
      "In five years, I aim to become a senior full-stack developer, leading a team and contributing to impactful products. I also hope to explore cloud and DevOps technologies more deeply.",
  },
  {
    question: "What project are you most proud of?",
    answer:
      "I'm most proud of building a university career placement portal where students could create resumes, apply for jobs, and schedule interviews. It taught me how to manage real-world features and user flows.",
  },
  {
    question: "How do you keep your skills up to date?",
    answer:
      "I follow tech blogs, take online courses, and build personal projects. I also read documentation regularly and explore GitHub to stay updated with new libraries and best practices.",
  },
];

const FaqSection = ({ showall = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const visibleFaqs = showall ? faqData : faqData.slice(0, 5);

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Common Job Interview Questions
      </h2>

      <div className="">
        {visibleFaqs.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200  rounded-md overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium bg-white hover:bg-gray-50 transition"
            >
              <span>{item.question}</span>
              <span className="text-gray-400 text-xl">
                {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 font-semibold text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {!showall && (
        <div className="text-center mt-10">
          <Link to="/interview-questions" className="inline-block">
            <button className="btn bg-purple-700 text-white btn-outline">
              Read More
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default FaqSection;
