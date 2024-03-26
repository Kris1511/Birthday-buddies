import { useState } from "react";
import { data } from "./data/data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  // console.log(people);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthday today's</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
      </section>
    </main>
  );
}

export default App;
