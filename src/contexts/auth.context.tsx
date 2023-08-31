import { PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  email: "",
  authenticate: (token: string, email: string) => {},
  logout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleAuthentication = (userToken: string, email: string) => {
    setToken(userToken);
    setEmail(email);
  };

  const handleLogout = () => {
    setToken("");
    setEmail("");
  };

  const params = {
    token,
    email,
    authenticate: handleAuthentication,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={params}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
