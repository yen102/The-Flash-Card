import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Login = React.lazy(() => import('./pages/Login'));
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Card = React.lazy(() => import('./pages/Card'));

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Routes>
          <Route exact path='/signUp' name='Sign Up Page' element={<SignUp />} />
          <Route exact path='/login' name='Login Page' element={<Login />} />
          <Route exact path='/' name='Home Page' element={<Homepage />} />
          <Route exact path='/card/:id' name='Card' element={<Card />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
