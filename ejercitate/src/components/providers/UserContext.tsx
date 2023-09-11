import { createContext } from 'react';

const UserContext = createContext({
  userData: null,
  setUserData: () => {},
  userResponse: null,
  setUserResponse: () => {},
  gymData:null,
  setGymData:()=>{},
});

export default UserContext;
