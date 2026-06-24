import Table from "./components/Table";
import { useState } from 'react';
import SearchUsers from "./components/SearchUsers";
import FilterByActive from "./components/FilterByActive"

function App() {
  const [search, setSearch] = useState("");

  const [activeStatus, setActiveStatus] = useState("all");

  return (
    <>
      <SearchUsers search={search} setSearch={setSearch} />
      <FilterByActive activeStatus={activeStatus} setActiveStatus={setActiveStatus}/>
      <Table search={search} activeStatus={activeStatus} />
    </>
  );
}

export default App;
