import Star from "./Star";

function StarRating(props)
{
  <div className="colour">
    {props.stars.map(link => (
      <div key={link.index}>
        <span><Star /></span>
      </div>
    ))}
  </div>
}

export default StarRating;