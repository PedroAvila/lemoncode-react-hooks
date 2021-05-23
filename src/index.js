import React from "react";
import ReactDOM from "react-dom";
//import App from './App';
import { MyComponent } from "./demo";

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
