
import './App.css';
import axios from 'axios';
import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { Goodbad } from './components/Goodbad';

//-----------by ashwani----------//
import {Welcome} from "./components/Welcome"

function App() {

  const user = {
    name: "rohit",
    email:"rohitkumar2222@gmail.com",
    password:"orhinadldad"
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
      <Login/>
      <Goodbad/>
      <h1>Welcome to Our App</h1>
      <button onClick={addauser}>Add user</button>
      <div>
     <Welcome></Welcome>
     </div>
    </div>
    
  );
}

export default App;
