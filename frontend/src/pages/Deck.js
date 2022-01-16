import Header from "../component/header";
import CardComponent from '../component/card';
import { useEffect, useState } from "react";
import { postAPI } from "../api";
import { useLocation } from 'react-router';

const Deck = () => {
  const location = useLocation();
  const params = location.split('/');
  const deckID = params[params.length - 1];
  // const data = [
  //   { 
  //     cardID: 1,
  //     term: "Hello",
  //     audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
  //     image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
  //     definition: "xin chao"
  //   }, { 
  //     cardID: 2,
  //     term: "hello1",
  //     audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
  //     image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
  //     definition: "xin chao1"
  //   }, { 
  //     cardID: 3,
  //     term: "Hello2",
  //     audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
  //     image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
  //     definition: "xin chao2"
  //   }, { 
  //     cardID: 4,
  //     term: "Hello3",
  //     audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
  //     image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
  //     definition: "xin chao3"
  //   }, 
  // ]
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await postAPI('/study/startSeesion', {
        deckID
      });
      setData(data);
    }
    getData();
  });

  return (
    <>
      <Header selectedForm='home' />
      <CardComponent data={data} />
    </>
  );
}

export default Deck;