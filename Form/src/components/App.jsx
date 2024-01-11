import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [headingName, setHeadingName] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setname(event.target.value);
  }

  function clicked() {
    setHeadingName(name);
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingName}</h1>
      <form onSubmit={clicked}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
