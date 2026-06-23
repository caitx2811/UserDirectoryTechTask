import User from "./User.jsx";
import users from "../users.js";
import "../table.css";

export default function Table() {
  const userData = users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <>
      <table className="user-table">
        <thead className="user-table-head">
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody className="user-table-body">{userData}</tbody>
      </table>
    </>
  );
}
