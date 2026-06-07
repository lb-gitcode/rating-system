import Star from "./Star";
import { useState } from "react";

function StarRating(props)
{
  const [starsSelected, selectStars] = useState(0);

  const setRating = (e) => {
    selectStars(2);
    console.log(e.currentTarget);
  }

  let ratingText = 'Hai';

  return(
    <div className="star-rating flex">
      <div className="stars flex">
        {props.stars.map(link => (
          <span key={link.index} name={link.name} className="star-checked"><Star onClick={setRating}/></span>
        ))}
      </div>
      <h2>{ratingText}</h2>
    </div>
  );
}

export default StarRating;