import Table from "./components/Table";
import { useState } from "react";
import SearchUsers from "./components/SearchUsers";
import FilterByActive from "./components/FilterByActive";
import FilterByRole from "./components/FilterByRole";

function App() {
  const [search, setSearch] = useState("");

  const [activeStatus, setActiveStatus] = useState("all");

  const [selectedRole, setSelectedRole] = useState("all");

  return (
    <>
      <SearchUsers search={search} setSearch={setSearch} />
      <FilterByActive
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
      <FilterByRole
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <Table
        search={search}
        activeStatus={activeStatus}
        selectedRole={selectedRole}
      />
    </>
  );
}

export default App;
