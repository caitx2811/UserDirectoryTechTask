import "../filters.css"

export default function FilterByActive({activeStatus, setActiveStatus}) {
  return (
    <form className="active-select" className="filter">
      <label htmlFor="selectActive" className="filter-label">
        Filter by Active status
        <select id="selectActive" className="filter-select" name="selectedActivity" value={activeStatus}
        onChange={(e) => setActiveStatus(e.target.value)}>
          <option value="all" defaultValue>All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
    </form>
  );
}
