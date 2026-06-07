import Star from "./Star";
import { useState } from "react";

function StarRating(props)
{
  const [stars, setStars] = useState(0);

  const setRating = (e) => {
    // setStars(th);
    console.log(e);
  }

  let ratingText = 'Hai';

  return(
    <div className="star-rating flex">
      <div className="stars flex">
        {props.stars.map(link => (
          <span key={link.index} onClick={e => setRating(e.target.index)} className="star-checked"><Star /></span>
        ))}
      </div>
      <p>{ratingText}</p>
    </div>
  );
}

export default StarRating;