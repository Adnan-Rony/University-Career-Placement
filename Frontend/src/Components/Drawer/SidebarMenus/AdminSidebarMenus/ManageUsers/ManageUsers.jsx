import { RiDeleteBin6Line } from "react-icons/ri";
import { UseAdminAllUser, UseAdminDeleteUser } from '../../../../../hooks/useAdmin'
import Swal from "sweetalert2";

export const ManageUsers = () => {
  const { data: allUsers, isPending } = UseAdminAllUser();
  const { mutate: deleteUser } = UseAdminDeleteUser()

  const users = allUsers?.users || [];
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#DC2626',
      cancelButtonColor: '#A78BFA',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire({
          title: 'Deleted!',
          text: 'The user has been removed.',
          icon: 'success',
          confirmButtonColor: '#6B21A8',
        });
      }
    });
  };



  if (isPending) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl.</th>
              <th>Name & Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={`https://api.dicebear.com/9.x/big-smile/svg?seed=${user.name}`}
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>{user.role}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="btn btn-sm  mr-2">Edit</button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-sm text-red-600">
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
