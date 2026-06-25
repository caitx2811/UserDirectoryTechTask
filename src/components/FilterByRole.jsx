import "../filters.css"

export default function FilterByRole({selectedRole, setSelectedRole}) {
  return (
    <form className="role-select" className="filter">
      <label htmlFor="selectRole" className="filter-label">
        Filter by Role
        <select id="selectRole" className="filter-select" name="selectedRole" value={selectedRole}
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
