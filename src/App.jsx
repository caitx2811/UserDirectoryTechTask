import Table from "./components/Table";
import { useState } from 'react';
import SearchUsers from "./components/SearchUsers";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchUsers search={search} setSearch={setSearch} />
      <Table search={search} />
    </>
  );
}

export default App;
