import Table from "./components/Table";
import { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");

  const [activeStatus, setActiveStatus] = useState("all");

  const [selectedRole, setSelectedRole] = useState("all");

  return (
    <>
    <Header />
      <Filters
        search={search}
        setSearch={setSearch}
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
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
