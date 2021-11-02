
import './App.css';
import axios from 'axios';
import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { Welcome } from "./components/Welcome"
import {Goodbad} from "./components/Goodbad"

function App() {



  return (
    <div className="App">
      <Landing />
      <Login/>
      <Goodbad/>
     <Welcome></Welcome>
    </div>
    
  );
}

export default App;


// const user = {
//   name: "rohit",
//   email:"rohitkumar2222@gmail.com",
//   password:"orhinadldad"
// };

// const addauser = () => {

//   axios.post("http://localhost:7765/register", user)
//     .then(res => {
//       console.log(res);
//       console.log(res.data);
//     })
// }
//<button onClick={addauser}>Add user</button>