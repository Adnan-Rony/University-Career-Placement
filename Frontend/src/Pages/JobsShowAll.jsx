import AllJobsCards from "../Components/jobs/AllJobsCards.jsx";
import JObFilterSidebar from "../Components/jobs/JObFilterSidebar.jsx";
const JobsShowAll = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-1">
          <JObFilterSidebar />
        </div>

        <div className="bg-white lg:col-span-2 px-4 py-8   space-y-3">
          <AllJobsCards />
        </div>
      </div>
    </div>
  );
};

export default JobsShowAll;
