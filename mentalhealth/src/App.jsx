
import './App.css';
import axios from 'axios';
import { Game } from './components/Game';
import { Landing } from './components/Landing';
import { Meditate } from './components/Meditate';
import { Diary } from './components/Diary';
import { Game1 } from './components/Game1';
import { Diary1 } from './components/Diary1';
import { Meditate1 } from './components/Meditate1';

function App() {

  const user = {
    name: "prakash",
    email:"prakash@gmail.com",
    password:"pratikjadhav"
  };

  const addauser = () => {

    axios.post("http://localhost:7765/register", user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return (
    <div className="App">
      <Landing />
      <Meditate />
      <Meditate1 />
      <Diary />
      <Diary1 />
      <Game />
      <Game1 />
      {/* <h1>Welcome to Our App</h1>

      <button onClick={addauser}>Add user</button> */}
    </div>
  );
}

export default App;
