import { useState } from "react";
import LeftButton from "./LeftButton";
import './card.css';
import MainContent from "./MainContent";

const Card = ({ data, nextCard, checkEmptyDeck, cardNum }) => {
  
  const [cardType, setCardType] = useState('term');

  const changeTypeCard = (type) => {
    setCardType(type);
  }

  if(checkEmptyDeck) {
    return (
      <div style={{ fontSize: 50, textAlign: "center", marginTop: '20vh' }}>No cards</div>
    )
  }
  return (
    <div className="card-content">
      <div className="card-buttons">
        <LeftButton name="Từ gốc" onClick={changeTypeCard} type='term' />
        <LeftButton name="Phát âm" onClick={changeTypeCard} type='audio' />
        <LeftButton name="Dịch nghĩa" onClick={changeTypeCard} type='definition' />
        <LeftButton name="Hình ảnh" onClick={changeTypeCard} type='image' />
      </div>
      <MainContent data={data[cardNum].Card} type={cardType} nextCard={nextCard} />
    </div>
  );
}

export default Card;