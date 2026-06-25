import User from "./User.jsx";
import users from "../users.js";
import "../css/table.css";
import { filterUsers } from "../helpers/filterUsersHelper";

export default function Table({ search, activeStatus, selectedRole }) {
  const userData = filterUsers(users, search, activeStatus, selectedRole);

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
            userData.map((user) => <User key={user.id} user={user} />)
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
