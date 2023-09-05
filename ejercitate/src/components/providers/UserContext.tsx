import { createContext } from 'react';

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  userResponse: null,
  setUserResponse: () => {},
});

export default UserContext;
