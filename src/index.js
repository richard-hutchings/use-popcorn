// import React, { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App.v1";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating
//         color="green"
//         size="24"
//         maxRating={12}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie is rated {movieRating} stars</p>
//     </div>
//   );
// }

root.render(
  <React.StrictMode>
    <App />
    {/*   <StarRating
  //     maxRating={10}
  //     messages={[
  //       "Just terrible",
  //       "piece of crap",
  //       "vomit",
  //       "dont waste your time",
  //       "mmm ok",
  //       "moderately ok",
  //       "good",
  //       "worth a watch",
  //       "great",
  //       "Bloody fantastic!",
  //     ]}
  //   />
  //   <StarRating size="28" color="red" className="test" defaultRating={2} />
  //   <StarRating size="12" color="blue" maxRating={15} />
  //   <Test /> */}
  </React.StrictMode>
);
