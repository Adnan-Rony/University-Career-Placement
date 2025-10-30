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
      <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-purple-500">
        Select Your Profession
      </h2>
      <p className="text-base md:text-lg text-gray-600  my-4">
        Choose your profession to start building your resume.
      </p>
      <div className="flex gap-4 mt-4">
        {professions.map((prof) => (
          <button
            key={prof}
            className={`uppercase px-6 py-3 rounded font-semibold transition-colors ease-in-out delay-150
              ${
                selectedProfession === prof
                  ? "bg-purple-500 text-white"
                  : " border bg-white border-purple-500  text-purple-500   hover:bg-purple-100"
              }
            `}
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
