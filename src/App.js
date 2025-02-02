import './App.css';
import Login from './components/login/login'
import Register from './components/register/Register'
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Mydashboard from './components/mydashboard/Mydashboard'
import Quiz from './components/Quiz/Quiz'
import Riddle1 from './components/Riddle/Riddle1'
import Myscore from './components/myscore/Myscore'
import Analytics from './components/analytics/Analytics'
import Story from './components/story/Story'
import Quote from './components/quote/Quote'

import Hangman from './components/Hangman/Hangman';

function App() {
  return (
   
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/dashboard" element = {<Mydashboard/>} />
        <Route path="/quiz" element = {<Quiz/>} />
        <Route path="/myscore" element = {<Myscore/>} />
        <Route path="/analytics" element = {<Analytics/>} />
        <Route path="/story" element = {<Story/>} />
        <Route path="/quote" element = {<Quote/>} />
        <Route path="/quote" element = {<Quote/>} />
        <Route path="/riddle" element = {<Riddle1/>} />
        <Route path="/Hangman" element = {<Hangman/>} />
        

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
