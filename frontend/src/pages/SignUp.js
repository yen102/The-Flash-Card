import Header from "../component/header";
import './register.css';
import SignUpForm from "../component/form/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUp = () => {

  const isLogin = localStorage.getItem('userID') && localStorage.getItem('name');
  const navigate = useNavigate();

  useEffect(() => {
    if(isLogin) {
      navigate('/', { replace: true });
    }
  });

  return (
    <>
      <Header selectedForm='signUp' />
      <SignUpForm />
    </>
  );
}

export default SignUp;