import "../css/filters.css"

export default function SearchUsers({ search, setSearch }) {
  return (
    <form className="search-for-user">
      <label htmlFor="searchInput" className="search-label">
        Search for User
      </label>
      <input
        id="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
