import { useState, useEffect } from 'react';

const useFilterByLocation = (users, locationFilter) => {
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    if (locationFilter) {
      setFilteredUsers(
        users.filter((user) =>
          user.location.toLowerCase().includes(locationFilter.toLowerCase())
        )
      );
    } else {
      setFilteredUsers(users);
    }
  }, [users, locationFilter]);

  return filteredUsers;
};

export default useFilterByLocation;
