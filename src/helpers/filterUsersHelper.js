export const filterUsers = (
  users,
  search,
  activeStatus,
  selectedRole
) => {
  return users.filter((user) => {
    return (
      (search === ""
        ? user
        : user.name.toLowerCase().includes(search.toLowerCase())) &&
      (activeStatus === "active"
        ? user.active
        : activeStatus === "inactive"
          ? !user.active
          : user) &&
      (selectedRole === "all" ||
        selectedRole === user.role.toLowerCase())
    );
  });
};