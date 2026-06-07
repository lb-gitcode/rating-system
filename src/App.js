import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import { useState } from "react";

function App() {
  const stars = [
    { index: 0, name: 1 },
    { index: 1, name: 2 },
    { index: 2, name: 3 },
    { index: 3, name: 4 },
    { index: 4, name: 5 }
  ];

  const [open, setOpen] = useState(false);

  let isOpen = false;

  const openDialog = () => 
  {
    setOpen(true);
  }

  const closeDialog = () =>
  {
    setOpen(false);
  }

  return (
    <>
      <Dialog class={open ? '' : 'hide-dialog'} closeDialog={closeDialog} />
      <div>
        <button className="dialog-btn" onClick={openDialog}>Open Dialog</button>
      </div>
      <div className="star-rating flex">
        <StarRating stars={stars} />
      </div>
    </>
  );
}

export default App;