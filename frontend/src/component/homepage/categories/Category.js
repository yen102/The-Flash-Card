import Deck from "./Deck";

const Category = (props) => {
  return (
    <div className='category' ref={props.innerRef}>
      <div className='name-category'>
        {props.name}
      </div>
      <div className="decks">
        {props.listDecks.map((deck, index) => <Deck key={index} name={deck.name} words={deck.words} cards={deck.cards} displayLink={deck.displayLink} id={deck.deckID} />)}
      </div>
    </div>
  );
}

export default Category;