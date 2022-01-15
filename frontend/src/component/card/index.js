import { useState } from "react";
import LeftButton from "./LeftButton";
import './card.css';
import MainContent from "./MainContent";
import axios from 'axios';
import { API_URL } from "../../URL";

const Card = (props) => {

  const [cardNum, setCardNum] = useState(0);
  const [cardType, setCardType] = useState('term');

  const changeTypeCard = (type) => {
    setCardType(type);
  }

  const nextCard = async (difficulty) => {
    await axios.post(API_URL + '/', {
      difficulty,
      cardID: props.data[cardNum].cardID
    }, {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    });
    setCardNum(cardNum + 1);
  }

  return (
    <div className="card-content">
      <div className="card-buttons">
        <LeftButton name="Từ gốc" onClick={changeTypeCard} type='term' />
        <LeftButton name="Phát âm" onClick={changeTypeCard} type='audio' />
        <LeftButton name="Dịch nghĩa" onClick={changeTypeCard} type='definition' />
        <LeftButton name="Hình ảnh" onClick={changeTypeCard} type='image' />
      </div>
      <MainContent data={props.data[cardNum]} type={cardType} nextCard={nextCard} />
    </div>
  );
}

export default Card;