import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <>
      <Person name="Anirudha" age={23} isMarried={false} />
      <Person name="Omkar" age={28} isMarried={true} />
    </>
  );
}

export default App;
