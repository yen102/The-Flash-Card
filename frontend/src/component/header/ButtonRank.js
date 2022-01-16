import { useNavigate } from "react-router-dom";

const ButtonRank = (props) => {
  const navigate = useNavigate();
  const style = props.selectedForm === 'rank' ? ' selected-form' : '';
  const redirectToRank = () => {
    navigate('/rank', { replace: true });
  }
  return (
    <div className={`buttons-header${style}`} onClick={redirectToRank}>
      Rank
    </div>
  );
}

export default ButtonRank;