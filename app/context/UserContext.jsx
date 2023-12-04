import { createContext, useEffect, useState } from 'react';
import { Asset } from 'expo-asset';
import { getUser } from '../services/initDB';

export const UserProvider = ({ children }) => {

  const UserContext = createContext();
  const [user, setUser] = useState();


  useEffect(() => {
    getUser().then((user) => {
      if (!user) {
        console.log('Não há usuário logado');
      } else {
        console.log("usuario",user);
        setUser(user);
      }
    });

  }, []);




  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
