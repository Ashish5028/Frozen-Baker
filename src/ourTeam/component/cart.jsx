import { useState } from "react";
import { useSelector } from "react-redux";

let initialCounters = [0];

function AppCart({ counter }) {
  const [counters, setCounters] = useState(initialCounters);
  const data = useSelector((state) => state.product.users);

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i);
            }}
          >
            add
          </button>
        </li>
      ))}
    </ul>
  );
}

export default AppCart;
