/* eslint-disable react/prop-types */
import { createContext } from "react";
// import { getAuth } from "firebase/auth";
const AuthContext = createContext(null);

// const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
