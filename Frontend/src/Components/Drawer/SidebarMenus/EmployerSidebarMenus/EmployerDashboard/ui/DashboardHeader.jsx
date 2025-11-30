const DashboardHeader = ({subtitle}) => (
  // const {user}=useCurre
      <div className="mb-8">
        <div className="group bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 rounded-2xl shadow-lg p-8 md:p-10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-40 h-40 bg-white opacity-15 rounded-full -mr-20 -mt-20
           group-hover:opacity-20 group-hover:scale-110 transition-all duration-300
          "
          ></div>
          <div
            className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-15 rounded-full -ml-20 -mb-20
          group-hover:opacity-20 group-hover:scale-110 transition-all duration-300
          "
          ></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Welcome back! 
            </h1>
            <p className="text-purple-100 text-lg">
             {subtitle}
            </p>
          </div>
        </div>
      </div>
);

export default DashboardHeader;
