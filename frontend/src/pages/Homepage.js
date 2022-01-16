import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import HomepageComponent from '../component/homepage';

const Homepage = () => {

  const isLogin = localStorage.getItem('userID');
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLogin) {
      navigate('/login', { replace: true });
    }
  });

  if(!isLogin) {
    return <div></div>
  }

  return (
    <div>
      <Header selectedForm='home' />
      <HomepageComponent />
    </div>
  );
}

export default Homepage;