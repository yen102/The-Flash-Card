import Header from "../component/header";
import './register.css';
import SignUpForm from "../component/form/SignUpForm";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const SignUp = () => {

  const isLogin = localStorage.getItem('userId') && localStorage.getItem('name');
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