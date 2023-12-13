import React, { useEffect, useState } from "react";

function AdminDash() {
  // Dummy data for testing
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/admin/users`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    // Handle delete logic here
    setUsers(users.filter((user) => user._id !== id));
  };

  const handleBlock = (id) => {
    // Handle block/unblock logic here
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, isActive: !user.isActive } : user
      )
    );
  };

  const handleAdminToggle = (id) => {
    // Handle admin toggle logic here
    setUsers(
      users.map((user) =>
        user._id === id ? { ...user, isAdmin: !user.isAdmin } : user
      )
    );
  };

  return (
    <div className="p-4 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-center">Username</th>
              <th className="py-2 px-4 border-b text-center">Email</th>
              <th className="py-2 px-4 border-b text-center">isAdmin</th>
              <th className="py-2 px-4 border-b text-center">isActive</th>
              <th className="py-2 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="align-top">
                <td className="py-2 px-4 border-b text-center">
                  {user.username}
                </td>
                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">
                  {user.isAdmin ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {user.isActive ? "Yes" : "No"}
                </td>
                <td className="py-2 px-4 border-b space-x-2 text-center">
                  <button
                    className="text-sm text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`text-sm ${
                      user.isActive ? "text-orange-500" : "text-green-500"
                    } hover:${
                      user.isActive ? "text-orange-700" : "text-green-700"
                    }`}
                    onClick={() => handleBlock(user._id)}
                  >
                    {user.isActive ? "Block" : "Unblock"}
                  </button>
                  <button
                    className={`text-sm ${
                      user.isAdmin ? "text-gray-500" : "text-blue-500"
                    } hover:${
                      user.isAdmin ? "text-gray-700" : "text-blue-700"
                    }`}
                    onClick={() => handleAdminToggle(user._id)}
                  >
                    {user.isAdmin ? "Revoke Admin" : "Make Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDash;
