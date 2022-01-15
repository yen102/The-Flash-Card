const LeftButton = (props) => {
  return (
    <div className='card-button left-card-button' onClick={() => props.onClick(props.type)}>
      {props.name}
    </div>
  );
}

export default LeftButton;