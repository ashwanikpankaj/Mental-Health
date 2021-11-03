
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
import {Goodbad} from "./components/Goodbad"
import { Goal } from './components/Goal';
import { Games } from "./components/Games"
import {Bluetooh} from "./components/Bluetooh"
import { Funtest } from './components/Funtest';
import { Waterfall } from './components/Waterfall';
import { Colors } from './components/Colors';
import { Personality } from './components/Personality';
import { Avatar } from './components/Avatar';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <Landing />
      <Meditate />
      <Meditate1 />
      <Diary />
      <Diary1 />
      <Game />
      <Game1 />
      <Signup/>
      <Login/>
      <Goodbad/>
     <Welcome></Welcome>
      <Goal />
      <Games></Games>
      <Bluetooh></Bluetooh>
     <Funtest/>
     <Waterfall/>
     <Colors/>
     <Personality/>
     <Avatar/>
    </div>
    
  );
}

export default App;


