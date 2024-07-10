import { useState } from 'react';
import LandingPage from './components/landingPage';
import './index.css';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  const goToLandingPage = (event) => {
    event.preventDefault();

    const user = document.getElementById("floatingInput").value.trim();
    const rollNo = document.getElementById("floatingNumber").value.trim();

    if (user === '' || rollNo === '') {
      // alert("Name and Roll Number are required fields");
      setIsSignedIn(false);
    } else {
      setIsSignedIn(true);
      navigate('/landingPage');
    }
  };

  if (isSignedIn) {
    return <LandingPage />;
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      ></link>
      <form onSubmit={goToLandingPage}>
        <div id='container'>
          <h2 style={{ marginBottom: 20 }}>Quiz Application</h2>
          <h2 style={{ marginBottom: 20 }}>Student Details Form</h2>
          <div className="form-floating mb-3">
            <input
              type="name"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Name"
              required
            />
            <label htmlFor="floatingInput">Name <span style={{ color: 'red' }}>*</span></label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              id="floatingBatchNo"
              placeholder="batch no..."
            />
            <label htmlFor="floatingNumber">Batch No</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter Section"
            />
            <label htmlFor="floatingInput">Section</label>
          </div>
          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingNumber"
              placeholder="Reg.No"
              required
            />
            <label htmlFor="floatingNumber">Roll Number <span style={{ color: 'red' }}>*</span></label>
          </div>
          <p style={{color:'white',textAlign:'left'}}><span style={{ color: 'red' }}>*</span> denotes required fields</p>
          <button type="submit" style={{padding:'10px',color:'balck',border:'transparent',borderRadius:'7px'}}>Submit</button>
        </div>
      </form>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default App;
