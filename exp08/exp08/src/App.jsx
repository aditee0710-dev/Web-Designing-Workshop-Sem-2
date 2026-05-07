// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div className="containet">
//       <h1>React Counter Application</h1>
//       <h2 className="counter">{count}</h2>
//       <div className="buttons">
//         <button onClick={increment}> Increment (+)</button>
//         <button onClick={decrement}> Decrement (-)</button>
//         <button onClick={reset}> Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter Application</h1>

        <h2 className="counter">{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;