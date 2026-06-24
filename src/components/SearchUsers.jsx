import "../SearchUsers.css";

export default function SearchUsers() {
  return (
    <form className="search-for-user">
      <label htmlFor="searchInput" className="search-label">Search for a user by name</label>
      <input id="searchInput" name="query" />
      <button type="submit">Enter</button>
    </form>
  );
}
