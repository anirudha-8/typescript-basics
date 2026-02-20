import { useContext } from "react";
import { UserContext } from "../UserContextProvider";
import User from "./User";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      {users.map((u) => (
        <User key={u.id} {...u} />
      ))}
    </div>
  );
};

export default UserList;
