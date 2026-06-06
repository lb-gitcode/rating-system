import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";

function App() {
  const stars = [
    { index: 0, },
    { index: 1, },
    { index: 2, },
    { index: 3, },
    { index: 4, }
  ];

  let ratingText = 'Help';

  return (
    <>
      <Dialog />
      <div>
        <button className="dialog-btn">Open Dialog</button>
      </div>
      <div className="star-rating flex">
        <StarRating stars={stars} />
        <p>{ratingText}</p>
      </div>
    </>
  );
}

export default App;