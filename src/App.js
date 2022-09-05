import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import db from './firebase-config';
import Todo from "./Todo"
import firebase from 'firebase';


function App() {
  const [todos, settodos] = useState([]);
  const [input, setinput] = useState("");

  let addTodo=(event)=>{  
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    settodos([...todos, input])
    setinput("");
  }
  //// only inputs has onchange events in them to keep track of what happens when the user types something
  //// events are things that happens on the html page 
  //// when you wrap a button tag around a form the button has a type called submit which allows you to press enter instead of pressing the button 
  //// sooo when you wrap inputs around a button you have access to pressing enter button button to submit that form
  //// remember to always prevent default in a form to prevent from always refreshing when you submit


  //////////////////////////////////GETTING DATA FROM THE DATABASE/////////////////////////////////////////
  //// when the page loads we need to check the database and fetch data 


  ///// useEffect checks two para first when the page loads the code in @1 loads BUT
  //// when there are dependencies the app.js keeps loading whenever there is a change in the dependency @2
useEffect(()=>{
  ///@1 codes runs when the app.js loads 
  db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot=>{
    settodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo}))) 
  })

}, [])  //// any variable inside this [] is the dependency @2      

  return (
    <div className='App'>
        <h1>hello react friends 🇳🇬</h1>
        <form>
        <FormControl>
          <InputLabel>write a todo 👿</InputLabel>
          <Input value={input} onChange={((event)=>setinput(event.target.value))} />
        </FormControl>
          <Button  disabled={!input  } type='submit' onClick={addTodo} variant="contained" color="primary">
             add todo 
          </Button>
        </form>
     <ul>
      {
        todos.map((todo)=>{
          return(       
             <Todo todo={todo}/>
          )
        })
      }
     </ul>
    </div>
  );
}

export default App;

// const func = () => {
//   return {name: "uvhe"}
// };