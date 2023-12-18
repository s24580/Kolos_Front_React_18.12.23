import React, { createContext, useState, useContext } from 'react';

export const SelectedUserContext = createContext();

export const SelectedUserProvider = ({ children }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export const useSelectedUser = () => useContext(SelectedUserContext);
