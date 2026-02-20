import { createContext, useEffect, useState } from "react";

export interface User {
  id: number;
  name: string;
  age: number;
  isMarried: boolean;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: number, updatedUser: Partial<User>) => void;
  deleteUser: (id: number) => void;
}

const contextInitialValue: UserContextType = {
  users: [],
  addUser: () => {},
  updateUser: () => {},
  deleteUser: () => {},
};

export const UserContext = createContext<UserContextType>(contextInitialValue);

interface Props {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers([{ id: 1, name: "Anirudha", age: 23, isMarried: false }]);
  }, []);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  const updateUser = (id: number, updatedUser: Partial<User>) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u)),
    );
  };

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
