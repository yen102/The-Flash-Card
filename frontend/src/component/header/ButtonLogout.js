import { useNavigate } from "react-router-dom";

const ButtonHome = (props) => {
  const navigate = useNavigate();
  const style = props.selectedForm === 'home' ? ' selected-form' : '';
  const logout = () => {
    localStorage.clear();
    navigate('/login', { replace: true });
  }
  return (
    <div className={`buttons-header${style}`} onClick={logout}>
      Logout
    </div>
  );
}

export default ButtonHome;