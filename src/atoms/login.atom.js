import { atom } from "jotai";

//atom which stores if the user is logged in (true/false)

// export const loggedInAtom = atom(false);

//this contains user data after successful connect in Login Form
//response from server provides user details
export const authUserAtom = atom(null);

//derived atom
//this servers as a true/false value derived from authUserAtom
//if authUserAtom is null, returns false (logged out)
//if authUserAtom has data, returns true (logged in)
//this info is passed to header
export const isConnectedAtom = atom((get) => {
  const user = get(authUserAtom);
  return user !== null;
});
