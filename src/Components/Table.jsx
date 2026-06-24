import User from "./User.jsx";
import users from "../users.js";
import "../table.css";

export default function Table({ search, activeStatus, selectedRole }) {
  const userData = users
    .filter((user) => {
      return (
        (search === "" ? user : user.name.toLowerCase().includes(search)) &&
        (activeStatus === "active"
          ? user.active
          : activeStatus === "inactive"
            ? !user.active
            : user) &&
        (selectedRole === "all" || selectedRole === user.role.toLowerCase())
      );
    })
    .map((user) => <User key={user.id} user={user} />);

  console.log(users.length);
  console.log(userData.length);

  return (
    <>
      <table className="user-table">
        <thead className="user-table-head">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Active Status</th>
          </tr>
        </thead>
        <tbody className="user-table-body">
          {userData.length > 0 ? (
            userData
          ) : (
            <tr>
              <td className="no-search-results" colSpan={3}>
                No users match the search filters you have selected.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {userData.length > 0 && userData.length < users.length && (
        <p colSpan={3}>
          Showing {userData.length} of {users.length} users.
        </p>
      )}
    </>
  );
}
