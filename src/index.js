import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h1>My First Component</h1>
        <ul>
          <li>
            <a href="#">Hello World</a>
          </li>
        </ul>
      </div>
      <h2>Hello again</h2>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
