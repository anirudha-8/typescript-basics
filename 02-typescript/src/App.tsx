import "./App.css";
import UserList from "./components/UserList";
import { UserProvider } from "./UserContextProvider";

function App() {
  return (
    <UserProvider>
      <UserList />
    </UserProvider>
  );
}

export default App;
