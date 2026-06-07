import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import { useState } from "react";

function App() {
  const stars = [
    { index: 0, },
    { index: 1, },
    { index: 2, },
    { index: 3, },
    { index: 4, }
  ];

  const openDialog = () => 
  {

  }

  const closeDialog = () =>
  {
    
  }

  return (
    <>
      <Dialog close={closeDialog} />
      <div>
        <button className="dialog-btn">Open Dialog</button>
      </div>
      <div className="star-rating flex">
        <StarRating stars={stars} />
      </div>
    </>
  );
}

export default App;