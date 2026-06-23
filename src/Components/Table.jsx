import User from "./User.jsx";
import users from "../users.js";

export default function Table() {
  const userData = users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>{userData}</tbody>
      </table>
    </>
  );
}
