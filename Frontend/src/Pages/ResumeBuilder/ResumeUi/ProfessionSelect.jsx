import { templatesData } from "../lib/templatedata";

const ProfessionSelect = ({ selectedProfession, setSelectedProfession }) => {
  const professions = [...new Set(templatesData.flatMap((t) => t.profession))];
 console.log(professions);
  const handleSelect = (prof) => {
    if (selectedProfession === prof) {
      setSelectedProfession("");
    } else {
      setSelectedProfession(prof);
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl md:text-3xl lg:text-6xl
      bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent
       ">
        Select Your Profession
      </h2>
      <p className="text-base font-semibold md:text-lg text-gray-600  my-4">
        Choose your profession to start building your resume.
      </p>
      <div className="flex gap-4 mt-6">
        {professions.map((prof,index) => (
          <button
            key={prof}
                 className={`group relative overflow-hidden rounded-xl px-6 py-5 font-semibold text-base sm:text-lg transition-all duration-300 transform uppercase tracking-wide
                  ${
                    selectedProfession === prof
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105 ring-2 ring-purple-300"
                      : "bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md hover:scale-102 border border-gray-200"
                  }
                `}
                 style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.05}s both`,
                }}
            onClick={() => handleSelect(prof)}
          >
            {prof}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfessionSelect;
