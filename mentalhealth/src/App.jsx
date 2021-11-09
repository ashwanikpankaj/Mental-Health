
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

import { Switch, Route } from 'react-router-dom'
import { Loadingpage } from './components/Loadingpage';
import { Allsettogo } from './components/Allsettogo';
import { ScoreCard } from './components/ScoreCard';
import { Dfcategories } from './components/DfCategories';

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/" exact>
          <Onboarding />
        </Route>

        <Route path="/welcome"><Welcome></Welcome></Route>

        <Route path="/signup"><Signup></Signup></Route>

        <Route path="/login">
          <Login />
        </Route>
      
        <Route path="/blueaura">
          <Goodbad />
        </Route>

        <Route path="/goal">
          <Goal />
        </Route>

        <Route path="/funtest">
          <Funtest />
        </Route>

        <Route path="/colors">
        <Colors />
        </Route>

        <Route path="/loadingpage">
        <Loadingpage/>
        </Route>

        <Route path="/createavatar">
        <Avatar />
        </Route>

        <Route path="/allset">
        <Allsettogo/>
        </Route>

        <Route path="/landingpage">
        <Landing />
        </Route>

        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>

      </Switch>


      
      <Landing1 />
      <Meditate />
      <Meditate1 />
      <Diary />
      <Diary1 />
      <Game />
      <Game1 />



      
      <Games></Games>
      <ScoreCard></ScoreCard>
      <Bluetooh></Bluetooh>

      <Waterfall />

      <Personality />

      {/* <Onboarding /> */}
      <DailyTask />
      <Dfcategories/>

    </div>

  );
}

export default App;