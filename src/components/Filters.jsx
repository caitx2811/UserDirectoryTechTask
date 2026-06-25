import SearchUsers from "../components/SearchUsers";
import FilterByActive from "../components/FilterByActive";
import FilterByRole from "../components/FilterByRole";

export default function Filters({
  search,
  setSearch,
  activeStatus,
  setActiveStatus,
  selectedRole,
  setSelectedRole,
}) {
  return (
    <div className="filters">
      <SearchUsers search={search} setSearch={setSearch} />
      <FilterByRole
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
      />
      <FilterByActive
        activeStatus={activeStatus}
        setActiveStatus={setActiveStatus}
      />
    </div>
  );
}
