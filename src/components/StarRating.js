import Star from "./Star";
import { useState } from "react";

function StarRating(props)
{
  const [starsSelected, selectStars] = useState(0);
  const [ratingText, changeText] = useState('Terrible');

  const setRating = (star) => {
    selectStars(star.name);
    updateText(star.name);
  }

  function updateText(num)
  {
    switch (num)
    {
      case 1: 
        changeText('Bad');
        break;
      case 2: 
        changeText('Subpar');
        break;
      case 3: 
        changeText('Okay');
        break;
      case 4: 
        changeText('Good');
        break;
      case 5: 
        changeText('Great');
        break;
      default:
        changeText('Terrible');
        break;
    }
  }

  return(
    <div className="star-rating flex">
      <div className="stars flex">
        {props.stars.map(link => (
          <span key={link.index} value={link.name}><Star onClick={() => setRating(link)} class={starsSelected >= link.name ? 'star-checked' : ''}/></span>
        ))}
      </div>
      <h2>{ratingText}</h2>
    </div>
  );
}

export default StarRating;