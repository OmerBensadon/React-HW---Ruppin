import logo from "./logo.svg";
import "./App.css";
import NavaMenu from "./Pages/NavaMenu";
import Card from "./UI/Card";

function App(props) {
  return (
    <Card >
      <div>
        <NavaMenu />
      </div>
    </Card>
  );
}

export default App;
