export default function FilterByActive({activeStatus, setActiveStatus}) {
  return (
    <form className="search-for-user">
      <label htmlFor="selectActive" className="search-label">
        Filter by Active status
        <select id="selectActive" name="selectedActivity" value={activeStatus}
        onChange={(e) => setActiveStatus(e.target.value)}>
          <option value="all" defaultValue>All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
    </form>
  );
}
