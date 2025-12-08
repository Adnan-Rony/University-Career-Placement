import React from 'react'
import { useCurrentUser } from "../../hooks/useAuth";
import { Spinner } from '../../Components/loading/loader/Spinner';

export const TermsAndCondition = () => {
  const { data, isPending } = useCurrentUser();
  const user = data?.user;
  const role = user?.role;

  if (isPending) {
    return <Spinner />;
  }

  return (
    <div className="py-12 container mx-auto px-4 lg:px-0">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
   

      {/* ROLE BASED TERMS */}
      {role === "job-seeker" && <JobSeekerTerms />}
      {role === "employer" && <EmployerTerms />}
    </div>
  );
};


// --------------------------------------------------
// JOB SEEKER TERMS
// --------------------------------------------------
const JobSeekerTerms = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Terms for Job Seekers</h2>

      <Section
        title="1. Account Responsibilities"
        text="You must provide accurate personal information including your skills, experiences and educational background. You are responsible for maintaining the confidentiality of your account."
      />

      <Section
        title="2. Use of the Platform"
        text="You may apply for jobs, build your resume, and communicate with employers in a respectful and professional manner. Misuse, spam, or fraudulent information is strictly prohibited."
      />

      <Section
        title="3. Resume & Portfolio Content"
        text="Your submitted resume, portfolio or documents must be authentic. Providing false information may lead to permanent account suspension."
      />

      <Section
        title="4. No Job Guarantee"
        text="The platform does not guarantee job placement. We only connect job seekers with employers."
      />

      <Section
        title="5. Communication with Employers"
        text="Your communication must remain professional. Abusive behavior or harassment will result in immediate action."
      />
    </div>
  );
};


// --------------------------------------------------
// EMPLOYER TERMS
// --------------------------------------------------
const EmployerTerms = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Terms for Employers</h2>

      <Section
        title="1. Company Information Accuracy"
        text="Employers must provide valid company details, including business name, registration information, and contact details."
      />

      <Section
        title="2. Job Posting Rules"
        text="Job posts must be clear, legal, and not misleading. Fake job postings or scam attempts will result in a permanent ban."
      />

      <Section
        title="3. Candidate Data Usage"
        text="You may view candidate resumes only for recruitment purposes. Sharing or selling candidate data is strictly prohibited."
      />

      <Section
        title="4. Hiring Process Ethics"
        text="Discrimination based on race, religion, gender, or personal attributes is prohibited. Employers must follow fair hiring guidelines."
      />

      <Section
        title="5. Payment & Subscription (if applicable)"
        text="If you use premium employer features, you agree to pay all fees described on the platform. Fees are non-refundable unless applicable under the refund policy."
      />
    </div>
  );
};


// --------------------------------------------------
// REUSABLE SECTION COMPONENT
// --------------------------------------------------
const Section = ({ title, text }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  );
};
