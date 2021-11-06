import "./App.css";

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";

import { amountAdded } from "./features/counter/counterSlice";
import { useFetchBreedsQuery } from "./features/dogs/dogsApiSlice";

const App: React.FC = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [numDogs, setNumDogs] = useState(10);

  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <div className="counter">
        <h1>Counter</h1>
        <button onClick={() => dispatch(amountAdded(3))}>Counter is: {count}</button>
      </div>
      <hr />

      <div className="dogs">
        <h1>Dogs</h1>
        <label htmlFor="dog-select" style={{ marginRight: "15px" }}>
          Choose Number of Dogs:
        </label>

        <select
          name="dog"
          id="dog-select"
          value={numDogs}
          onChange={(e) => setNumDogs(parseInt(e.target.value))}
        >
          <option value="0">--Please choose an option--</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {isFetching ? (
          <h3>Loading...</h3>
        ) : (
          <>
            <p>Number of dogs fetched: {data.length}</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Picture</th>
                </tr>
              </thead>
              <tbody>
                {data.map((breed) => (
                  <tr key={breed.id}>
                    <td>{breed.name}</td>
                    <td>
                      <img src={breed.image.url} alt={breed.name} height="200px" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
