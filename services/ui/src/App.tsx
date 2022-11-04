import React, { useState, useEffect } from "react";
import { fetchData, fetchPeople } from "./utils";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState<{ message: string } | null>(null);
  const [people, setPeople] = useState<People[] | null>(null);

  useEffect(() => {
    fetchData("http://localhost:5000/health", setData);
    fetchPeople("http://localhost:5000/people", setPeople);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data && <p>{data.message}</p>}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
        <div id="people_container">
          {people &&
            people.map((person, index) => {
              return <p key={index}>{person.name}</p>;
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
