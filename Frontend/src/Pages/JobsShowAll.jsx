import AllJobsCards from "../Components/jobs/AllJobsCards.jsx";
import JObFilterSidebar from "../Components/jobs/JObFilterSidebar.jsx";
const JobsShowAll = () => {
  return (
    <div className="mx-auto container">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        <div className="lg:col-span-1 ">
          <JObFilterSidebar />
        </div>

        <div className=" lg:col-span-2 px-4 py-2   space-y-3">
          <AllJobsCards />
        </div>
      </div>
    </div>
  );
};

export default JobsShowAll;
