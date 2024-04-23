import "./App.css";
import MyButton from "./components/MyButton";
import User from "./components/User";

function App() {
  return (
    <>
      <h2 className="font-sans">User Management</h2>
      <User name="Sumit Saha" />
      <MyButton title="I'm a disabled button" disabled={true} />
    </>
  );
}

export default App;
