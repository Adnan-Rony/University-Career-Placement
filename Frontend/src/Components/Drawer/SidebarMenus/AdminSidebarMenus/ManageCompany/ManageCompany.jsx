import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import {
  UseDeleteSingleCompanyByAdmin,
  UsefetchAllCompanyByAdmin,
} from "../../../../../hooks/useAdmin";

export const ManageCompany = () => {
  const { data: Allcompanies } = UsefetchAllCompanyByAdmin();
  const companies = Allcompanies?.companies;

  const { mutate: deleteCompany } = UseDeleteSingleCompanyByAdmin();

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
      popup: 'rounded-lg shadow-md',
      confirmButton: 'swal2-confirm-btn',
      cancelButton: 'swal2-cancel-btn'
    }
  }).then((result) => {
    if (result.isConfirmed) {
      deleteCompany(id, {
        onSuccess: () => {
          Swal.fire({
            title: "Deleted!",
            text: "The company has been successfully removed.",
            icon: "success",
            confirmButtonColor: "#6300B3",
            color: "#333333"
          });
        },
        onError: (err) => {
          console.error(err);
          Swal.fire({
            title: "Error",
            text: "Failed to delete the company.",
            icon: "error",
            confirmButtonColor: "#d33",
            color: "#333333"
          });
        },
      });
    }
  });
};


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
              <th>Add Tags</th>
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
                    {/* 
      <td>
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-xs btn-outline m-1">Actions</label>
    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <button >Block/Suspend</button>
      </li>
      <li>
        <button >Edit Info</button>
      </li>
      <li>
        <button >Assign Tags/Status</button>
      </li>
      <li>
        <button className="text-red-500">Delete</button>
      </li>
    </ul>
  </div>
</td> */}

                    <th>
                      <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1">
                          Select
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu bg-r-background w-44
   rounded-box z-1 font-semibold p-2 shadow-sm"
                        >
                          <li>
                            <a>Trusted Partner</a>
                          </li>
                          <li>
                            <a>Top Recruiter</a>
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
