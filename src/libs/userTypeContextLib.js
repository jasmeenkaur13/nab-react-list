import { useContext, createContext } from "react";

export const UserContext = createContext('readonly');

export function useUserContext() {
  return useContext(UserContext);
}