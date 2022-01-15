import BottomButton from "./BottomButon";

const MainContent = (props) => {
  
  const renderCard = () => {
    switch(props.type) {
      case 'term': case 'definition': {
        return <div className="center" style={{ marginTop: '20vh' }}>{props.data[props.type]}</div>
      }
      case 'audio': {
        return <audio className="center audio-center" src={props.data.audio} controls autoPlay />
      }
      case 'image': {
        return <img src={props.data.image} alt='card-logo' style={{ width: 'auto', height: 'auto', maxHeight: '100%', maxWidth: '100%' }} className="center" /> 
      }
      default: 
        return <div></div>
    }
  }

  return (
    <div className="grid-row">
      <div className='card-main'>
        {renderCard()}
      </div>
      <div className="bottom-buttons">
        <BottomButton name='Easy' onClick={props.nextCard} difficalty='easy' />
        <BottomButton name='Good' onClick={props.nextCard} difficalty='good' />
        <BottomButton name='Hard' onClick={props.nextCard} difficalty='hard' />
      </div>
    </div>
  );
}

export default MainContent;