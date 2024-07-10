// loggedIn.jsx
import { useState } from 'react';
import Quiz from './Quiz'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const startQuiz = () => {
    setIsSignedIn(true);
  };

  if (isSignedIn) {
    return <Quiz/>;
  }
  return (
    <>
    <div style={{ background: 'url(../public/images/image.png) no-repeat',display:'flex',flexDirection:'column',
         backgroundSize:'cover',border:'transparent',borderRadius:'20px' , padding:'50px',
         justifyContent:'center'}}>
    <h1>Your Quiz is going to start now. This quiz includes ten multiple choice questions.</h1>
    <h1>If you are ready for the test then click on start quiz button below.</h1>   
    
    <Link style={{color:'black',border:'2px solid black',borderRadius:'8px', padding:'8px',fontSize:'x-large',textAlign:'center'}} to='/landingPage/quiz' onClick={startQuiz} >Start Quiz</Link>
    </div>
    </>
  );
};

export default LandingPage;
