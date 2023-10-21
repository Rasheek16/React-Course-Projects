import { useState } from "react";
import data from "./data.js";
import List from "./List.jsx";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} Birthdays today</h3>
          <List people={people} />
          <button
            type="button"
            className="btn btn-block"
            onClick={() => {
              setPeople([]);
            }}
          >
            clear
          </button>
          <hr />
          <button
            type="button"
            className="btn btn-block"
            onClick={() => {
              setPeople(data);
            }}
          >
            {""}
            Reset
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
