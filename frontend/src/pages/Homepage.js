// import { useNavigate } from "react-router-dom";
import Header from "../component/header";
import HomepageComponent from '../component/homepage';

const Homepage = () => {
  console.log(111);
  // const isLogin = localStorage.getItem('userID') && localStorage.getItem('name');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(!isLogin) {
  //     navigate('/login', { replace: true });
  //   }
  // });

  return (
    <div>
      <Header selectedForm='home' />
      <HomepageComponent />
    </div>
  );
}

export default Homepage;