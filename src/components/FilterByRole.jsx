export default function FilterByRole({selectedRole, setSelectedRole}) {
  return (
    <form className="role-select">
      <label htmlFor="selectRole" className="role-label">
        Filter by user's role
        <select id="selectRole" name="selectedRole" value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}>
          <option value="all" defaultValue>All</option>
          <option value="admin">Admin</option>
          <option value="designer">Designer</option>
          <option value="developer">Developer</option>
        </select>
      </label>
    </form>
  );
}
