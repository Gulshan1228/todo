import TodoName from "./components/TodoName";
import Entry from "./components/Entry";
import First from "./components/first";
import Second from "./components/second";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div id="screen">
      <center id="app">
        <TodoName id="name"></TodoName>
        <Entry id="entry"></Entry>
        {/* <Entry></Entry> */}

        <First/>
        <Second />
      </center>
    </div>
  );
}

export default App;
