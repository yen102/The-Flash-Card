import { useNavigate } from "react-router-dom";

const Deck = (props) => {

  const name = props.name.split(" ");
  const displayLink = name[name.length - 1];
  const navigate = useNavigate();

  const onClickLink = () => {
    navigate(`/deck/${props.id}`, { replace: true });
  }

  return (
    <div className='deck-item'>
      <div className='deck-name'>
        {props.name}
      </div>
      <div className='deck-info'>
        {props.words} words, {props.cards} cards
      </div>
      <div className='deck-link' onClick={onClickLink}>
        {displayLink}
      </div>
    </div>
  );
}

export default Deck;
