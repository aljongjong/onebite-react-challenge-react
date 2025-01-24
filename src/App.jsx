import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const memberProps = {
    name: "나일론",
    isMember: true,
  };
  return (
    <>
      <Welcome {...memberProps} />
    </>
  );
}

export default App;
