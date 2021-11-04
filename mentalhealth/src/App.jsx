
import './App.css';
import axios from 'axios';
import { Game } from './components/Game';
import { Landing } from './components/Landing';
import { Meditate } from './components/Meditate';
import { Diary } from './components/Diary';
import { Game1 } from './components/Game1';
import { Diary1 } from './components/Diary1';
import { Meditate1 } from './components/Meditate1';
import { Signup } from './components/Signup';
import { Welcome } from "./components/Welcome"
import { Goodbad } from "./components/Goodbad"
import { Goal } from './components/Goal';
import { Games } from "./components/Games"
import { Bluetooh } from "./components/Bluetooh"
import { Funtest } from './components/Funtest';
import { Waterfall } from './components/Waterfall';
import { Colors } from './components/Colors';
import { Personality } from './components/Personality';
import { Avatar } from './components/Avatar';
import { Landing1 } from './components/Landing1';
import { Login } from './components/Login';
import { Onboarding } from './components/Onboarding';
import { DailyTask } from './components/Daily-task';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Landing />
        <Landing1 />
        <Meditate />
        <Meditate1 />
        <Diary />
        <Diary1 />
        <Game />
        <Game1 />
        <Switch>
          <Route path='/' />
        </Switch>
      </Router>

      <Signup />
      <Login />
      <Goodbad />
      <Welcome></Welcome>
      <Goal />
      <Games></Games>
      <Bluetooh></Bluetooh>
      <Funtest />
      <Waterfall />
      <Colors />
      <Personality />
      <Avatar />
      <Onboarding />
    </div>

  );
}

export default App;