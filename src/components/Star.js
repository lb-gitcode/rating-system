import { FaStar } from 'react-icons/fa';

function Star(props)
{
  function clickStar(e)
  {
    console.log(e)
  }

  return(
    <>
      <FaStar className='star' className={props.clicked} />
    </>
  );
}

export default Star;