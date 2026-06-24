import "../SearchUsers.css";

export default function SearchUsers({search, setSearch}) {

    // const [search, setSearch] = useState([])


  return (
          <form className="search-for-user">
        <label htmlFor="searchInput" className="search-label">
          Search for a user by name
        </label>
        <input
          id="searchInput"
          name="query"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
  );
}
