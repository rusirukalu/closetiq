// src/context/UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a User Context
const UserContext = createContext();

// Create a custom hook to use the UserContext
export const useUser = () => useContext(UserContext);

// Create a UserProvider component to provide the context
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
