import { useNavigate } from "react-router";

const Deck = (props) => {

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
        {props.displayLink}
      </div>
    </div>
  );
}

export default Deck;
