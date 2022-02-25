
import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users/Users';

function App() {
  const [users , setUsers] = useState([])
 useEffect(()=>{
  
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data =>  setUsers(data.results))

 },[])
 const [member, setMember] = useState([])
  // console.log(users);
  const addMember = (name) =>{
    setMember([...member, name]);
  }
  
  return (
    <div className="App">
        <ul>
          {
            member.map(mem => <li>{mem}</li>)
          }
        </ul>
      
        {
          users.map(user =><Users user ={user} addMember ={addMember}></Users>)
        }
    
    
    </div>
  );
}

export default App;
