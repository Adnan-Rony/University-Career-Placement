import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import {
  UseDeleteSingleCompanyByAdmin,
  UsefetchAllCompanyByAdmin,
  UseUpdateSingleCompanyByAdmin,
} from "../../../../../hooks/useAdmin";
import DashboardManageCompanySkeleton from "../../../../loading/DashboardManageCompanySkeleton.jsx";
import { FaHandshake, FaTrophy, FaUserFriends } from "react-icons/fa";

export const ManageCompany = () => {
  const { data: Allcompanies, isLoading } = UsefetchAllCompanyByAdmin();
  const companies = Allcompanies?.companies;

  const { mutate: deleteCompany } = UseDeleteSingleCompanyByAdmin();

  const { mutate: updateCompany } = UseUpdateSingleCompanyByAdmin();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6300B3",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      color: "#333333",
      customClass: {
        popup: "rounded-lg shadow-md",
        confirmButton: "swal2-confirm-btn",
        cancelButton: "swal2-cancel-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCompany(id, {
          onSuccess: () => {
            Swal.fire({
              title: "Deleted!",
              text: "The company has been successfully removed.",
              icon: "success",
              confirmButtonColor: "#6300B3",
              color: "#333333",
            });
          },
          onError: (err) => {
            console.error(err);
            Swal.fire({
              title: "Error",
              text: "Failed to delete the company.",
              icon: "error",
              confirmButtonColor: "#d33",
              color: "#333333",
            });
          },
        });
      }
    });
  };

  const handleBadgeUpdate = (companyId, badgeValue) => {
    updateCompany(
      { id: companyId, badges: badgeValue },
      {
        onSuccess: () => {
          Swal.fire({
            title: "Success!",
            text: `Company promoted as ${badgeValue}.`,
            icon: "success",
            confirmButtonColor: "#6300B3",
          });
        },
        onError: (error) => {
          Swal.fire({
            title: "Error",
            text: "Failed to update badge.",
            icon: "error",
          });
          console.error("Update error:", error);
        },
      }
    );
  };

  if (isLoading)
    return (
      <p>
        <DashboardManageCompanySkeleton />
      </p>
    );

  return (
    <div>
      <h1 className="font-semibold text-r-primary">
        Total Companies : {companies?.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Field</th>
              <th>Promotion</th>
              <th>Remove</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1   */}

            {companies?.length > 0 ? (
              <>
                {companies.map((company) => (
                  <tr key={company._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={company.logo} alt="Company Logo" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{company.name}</div>
                          <div className="text-sm opacity-50">
                            {company.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="flex flex-col justify-start items-start ">
                      <span className="font-semibold">{company.industry}</span>

                      <span className="">Name: {company.createdBy.name}</span>
                    </td>


                    <th>
                      <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button " className="btn ">
                          {company.badges === "trusted"
                            ? <>
                              <FaHandshake />
                              <p>Trusted Partner</p>
                            </>
                            : company.badges === "top-recuiter"
                              ? <>
                                <FaTrophy />
                                <p>Top Recruiter</p>
                              </>
                              : <>
                                <FaUserFriends />
                                <p>Regular Recruiter</p>
                              </>}
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-white w-48 rounded-box z-[1] font-semibold p-2 shadow"
                        >
                          <li>
                            <button
                              onClick={() => handleBadgeUpdate(company._id, "trusted")}
                              disabled={company.badges === "trusted"}
                              className={company.badges === "trusted" ? "text-green-600 font-bold" : ""}
                            >
                              Trusted Partner
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleBadgeUpdate(company._id, "top-recuiter")}
                              disabled={company.badges === "top-recuiter"}
                              className={company.badges === "top-recuiter" ? "text-blue-600 font-bold" : ""}
                            >
                              Top Recruiter
                            </button>
                          </li>
                          <li>
                            <button
                              onClick={() => handleBadgeUpdate(company._id, "regular-recuiter")}
                              disabled={company.badges === "regular-recuiter"}
                              className={company.badges === "regular-recuiter" ? "text-gray-500 font-bold" : ""}
                            >
                              Regular Recruiter
                            </button>
                          </li>
                        </ul>
                      </div>
                    </th>


                    <th>
                      <button
                        onClick={() => handleDelete(company._id)}
                        className="btn btn-ghost text-xl bg-red-50 text-red-700"
                      >
                        <MdDeleteOutline />
                      </button>
                    </th>
                  </tr>
                ))}
              </>
            ) : (
              "No company Available"
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
