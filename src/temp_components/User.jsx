export default function User(props) {
  const isActive = props.user.active;
  return (
    <tr>
      <th scope="row">{props.user.name}</th>
      <td>{props.user.role}</td>
      <td>{isActive? "Active" : "Inactive"}</td>
    </tr>
  );
}
