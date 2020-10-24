import React from 'react';
import './App.css';
import EllipsisToolTip from "ellipsis-tooltip-react-chan";

function App() {

  const options = {
    effect: "solid",
    place: "top"
  }

  return (
    <div style={{ width: "50px", margin: "5rem" }}>
      <EllipsisToolTip options={options}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, fugiat.
      </EllipsisToolTip>
    </div>
  );
}

export default App;