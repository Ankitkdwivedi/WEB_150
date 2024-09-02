import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem('token')||null,
    user: JSON.parse(localStorage.getItem('user')) || null
  });

  const setAuth = (token, user) => {
    setAuthData({ token, user });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    // Clear authentication data from state
    setAuthData({ token: null, user: null });
    // Clear authentication data from local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ authData, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
