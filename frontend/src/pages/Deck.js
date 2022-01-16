import Header from "../component/header";
import CardComponent from '../component/card';

const Deck = () => {

  const data = [
    { 
      cardID: 1,
      term: "Hello",
      audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
      image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
      definition: "xin chao"
    }, { 
      cardID: 2,
      term: "hello1",
      audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
      image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
      definition: "xin chao1"
    }, { 
      cardID: 3,
      term: "Hello2",
      audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
      image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
      definition: "xin chao2"
    }, { 
      cardID: 4,
      term: "Hello3",
      audio: "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3", 
      image: "https://www.viaggiando-italia.it/wp-content/uploads/2017/04/trulli.jpg",
      definition: "xin chao3"
    }, 
  ]

  return (
    <>
      <Header selectedForm='home' />
      <CardComponent data={data} />
    </>
  );
}

export default Deck;