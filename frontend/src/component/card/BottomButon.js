const BottomButton = (props) => {
  return (
    <div className='card-button' onClick={() => props.onClick(props.difficalty)}>
      {props.name}
    </div>
  );
}

export default BottomButton;