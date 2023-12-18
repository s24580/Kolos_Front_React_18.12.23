import React, { useState, useEffect } from 'react';
import './style.css';
import UserList from './components/UserList';
import UserEditForm from './components/UserEditForm';
import { SelectedUserProvider } from './components/SelectedUserContext';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);



  return (
    <div>
      <SelectedUserProvider>
      <UserList onSelectUser={setSelectedUser} />
      {selectedUser && (
        <UserEditForm user={selectedUser} onSubmit={handleUserUpdate} />
      )}
      </SelectedUserProvider>
    </div>
  );
}
