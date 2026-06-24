import User from "./User.jsx";
import users from "../users.js";
import "../table.css";

export default function Table({ search}) {
 

  const userData = users
    .filter((user) => {
      return (
      search === ""
        ? user
        : user.name.toLowerCase().includes(search));
    })
    .map((user) => <User key={user.id} user={user} />);

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
