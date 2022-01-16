import Header from "../component/header";
import CardComponent from '../component/card';
import { useEffect, useState } from "react";
import { postAPI } from "../api";
import { useLocation, useNavigate } from 'react-router-dom';

const Deck = () => {
  const location = useLocation();
  const params = location.pathname.split('/');
  const deckID = params[params.length - 1];
  const [data, setData] = useState([]);
  const [checkEmptyDeck, setCheckEmptyDeck] = useState(true);
  const [studyTimes, setStudyTimes] = useState(0);
  const [cardNum, setCardNum] = useState(0);
  const isLogin = localStorage.getItem('userID');
  const navigate = useNavigate();
  if(!isLogin) {
    navigate('/login', { replace: true });
  }

  useEffect(() => {
    const getData = async () => {
      const { cards } = await postAPI('/study/startSession', {
        deckID
      });
      const listCards = cards.map(card => ({ ...card, score: 0 }));
      setData(listCards);
      if(cards) setCheckEmptyDeck(false);
    }
    getData();
  }, [deckID, studyTimes]);

  const nextCard = async (difficulty) => {
    const { score } = data[cardNum];
    const newScore = difficulty === 'easy' ? (score+1)*2 : (difficulty === 'good' ? score + 1 : 0);
    if(cardNum < data.length - 1) {
      setData(data => [
        ...data.slice(0, cardNum),
        {
          ...data[cardNum],
          score: newScore
        },
        ...data.slice(cardNum + 1),
      ]);
      setCardNum(cardNum + 1);
    } else {
      const newData = [
        ...data.slice(0, cardNum),
        {
          ...data[cardNum],
          score: newScore
        },
        ...data.slice(cardNum + 1),
      ].filter(card => card.score <= 8);
      if(newData.length > 0) {
        setData(newData);
        setCardNum(0);
      } else {
        if(window.confirm('Do you want to continue learning?')) {
          setStudyTimes(studyTimes + 1);
        } else {
          navigate('/', { replace: true });
        }
      }
    }
  }

  return (
    <>
      <Header selectedForm='home' />
      <CardComponent data={data} nextCard={nextCard} checkEmptyDeck={checkEmptyDeck} cardNum={cardNum} />
    </>
  );
}

export default Deck;