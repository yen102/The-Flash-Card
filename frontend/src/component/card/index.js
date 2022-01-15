import Button from "./Button";
import './card.css';
import MainContent from "./MainContent";

const Card = () => {
  return (
    <div className="card-content">
      <div className="card-buttons">
        <Button name="Phát âm" />
        <Button name="Dịch nghĩa" />
        <Button name="Hình ảnh" />
        <Button name="Kiểm tra" />
      </div>
      <MainContent />
    </div>
  );
}

export default Card;