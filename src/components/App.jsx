import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setName(e.target.value);
  }

  function handleClick(e) {
    //set the heading to the name
    setHeading(name);

    //prevent the next defalut behavior
    e.preventDefault();
  }

  return (
    <div className="container">
      <form onClick={handleClick}>
        <h1>Hello {headingText}</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name} //only in react
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
