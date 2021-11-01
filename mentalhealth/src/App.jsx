
import './App.css';
import axios from 'axios';
import { Landing } from './components/Landing';
import { Login } from './components/Login';

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
      <h1>Welcome to Our App</h1>
      <button onClick={addauser}>Add user</button>
    </div>
  );
}

export default App;
