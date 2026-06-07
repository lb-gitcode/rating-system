import { FaStar } from 'react-icons/fa';

function Star(props)
{
  let isClicked = false;

  return(
    <>
      <FaStar onClick={props.onClick} className='star' className={props.clicked} />
    </>
  );
}

export default Star;