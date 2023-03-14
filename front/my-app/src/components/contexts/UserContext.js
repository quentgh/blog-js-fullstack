import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      }).then((response) => {
        response.json().then((data) => {
          setUser(data.data);
          setIsLoading(false);
        });
      });
      return;
    }
    setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {isLoading ? <h2>Loading...</h2> : props.children}
    </UserContext.Provider>
  );
}
