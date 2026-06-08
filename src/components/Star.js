import { FaStar } from 'react-icons/fa';

function Star(props)
{
  let isClicked = props.clicked;

  return(
    <>
      <FaStar onClick={props.onClick} className='star' className={props.class} />
    </>
  );
}

export default Star;