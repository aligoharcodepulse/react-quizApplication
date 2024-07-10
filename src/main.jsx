import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LandingPage from './components/landingPage.jsx'
import Quiz from './components/Quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index path='/' element={<App/>} />
    <Route path='/landingPage' element={<LandingPage/>}/>
    <Route path='/landingPage/quiz' element={<Quiz/>}/>
  </Routes>
</BrowserRouter>
)
