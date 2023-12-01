import { createContext, useEffect, useState } from 'react';
import { getUser } from '../services/initDB';

export const UserContext = createContext();

function User() {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser()
      .then((user) => {

        if (!user) {
          console.log('Não há usuário logado');
        } else {
          setUser(user);
        }
      });
  }, []);

  return user;
}

export const UserProvider = ({ children }) => {
  const user = User();

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
