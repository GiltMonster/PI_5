import { createContext, useEffect } from 'react';
import { getUser } from '../services/initDB';

function User() {
  getUser()
    .then((user) => {
      if (!user) {
        console.log('Não há usuário logado');
      } else {
        return user;
      }
    })
}

export const UserContext = createContext(User());