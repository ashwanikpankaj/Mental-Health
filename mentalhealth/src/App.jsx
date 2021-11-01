
import './App.css';
import axios from 'axios';
import { Landing } from './components/Landing';

function App() {

  const user = {
    name: "Pratik12",
    email:"pratikjadhav99@gmail.com",
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
      <h1>Welcome to Our App</h1>

      <button onClick={addauser}>Add user</button>
    </div>
  );
}

export default App;
