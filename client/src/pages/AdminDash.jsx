import React, { useState } from "react";

function AdminDash() {
  // Dummy data for testing
  const [users, setUsers] = useState([
    {
      id: "1",
      username: "user1",
      email: "user1@example.com",
      isAdmin: false,
      isActive: true,
    },
    {
      id: "2",
      username: "user2",
      email: "user2@example.com",
      isAdmin: true,
      isActive: false,
    },
    // Add more users as needed
  ]);

  const handleDelete = (id) => {
    // Handle delete logic here
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleBlock = (id) => {
    // Handle block/unblock logic here
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, isActive: !user.isActive } : user
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
              <tr key={user.id} className="align-top">
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
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                  <button
                    className={`text-sm ${
                      user.isActive ? "text-orange-500" : "text-green-500"
                    } hover:${
                      user.isActive ? "text-orange-700" : "text-green-700"
                    }`}
                    onClick={() => handleBlock(user.id)}
                  >
                    {user.isActive ? "Block" : "Unblock"}
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
