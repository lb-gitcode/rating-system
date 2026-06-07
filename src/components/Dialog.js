function Dialog(props)
{
  return(
    <div className={props.class}>
      <div className='dialog'>
        <button onClick={props.closeDialog}>X</button>
        <div className="dialog-content">
          <p>Hello!</p>
        </div>
      </div>
    </div>
  );
}

export default Dialog;