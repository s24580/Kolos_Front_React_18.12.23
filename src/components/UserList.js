import React, { useEffect, useState } from 'react';
import PeopleData from '../people_data.json';
import useFilterByLocation from './useFilterByLocation';
import UserEditForm from './UserEditForm';
import '../UserList.css';

const UserList = () => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [data, setData] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const filteredData = useFilterByLocation(data, locationFilter);

  useEffect(() => {
    setData(PeopleData);
  }, []);

  const handleUserUpdate = (updatedUserData) => {
    const newData = data.map((user) => {
      if (user.id === updatedUserData.id) {
        return updatedUserData;
      }
      return user;
    });
    setData(newData);
    setEditingUserId(null); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by location"
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      />
      {filteredData.map((item) => (
        <div key={item.id} className="user-box">
          <h2>
            {item.name.first} {item.name.last}
          </h2>
          <p>Location: {item.location}</p>
          <p>Skills: {item.skills.join(', ')}</p>
          <button onClick={() => setEditingUserId(item.id)}>Edytuj</button>

          {editingUserId === item.id && (
            <UserEditForm user={item} onSubmit={handleUserUpdate} />
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
