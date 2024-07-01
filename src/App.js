//import logo from './logo.svg';
import './App.css';
import {useEffect}from'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
   // async function getUser() {   
    const getUser=async()=>{   //arrow fnction k through
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log("response",response);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  },[])
  return (
    <div className="App">
     <h1>Welcome</h1>
    </div>
  );
}

export default App;
