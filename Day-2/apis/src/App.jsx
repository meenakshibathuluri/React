import {React} from 'react';
import "./App.css";
function App() {
  const [name, setName] = useState("");
   return(
    <div>
      <input type="text" placeholder="Enter you name" 
      className = "name"
      onChange={(e) => (setNamee.target.value)}/>
      <p>{name}</p>
      <DisplayName  studentname={name}/>
    </div>
   );
}

export default App;