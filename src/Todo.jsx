import React, { useState } from 'react'
import { ListItemText ,List, IconButton,  ListItem, Modal, Button, makeStyles} from '@material-ui/core';
import db from './firebase-config';
import {Delete} from '@material-ui/icons';


const  useStyles = makeStyles((theme) => ({
  paper:{
    position : "absolute",
    width : 400,
    background : theme.palette.background.paper,
    border : "2px solid #000",
    boxShadow : theme.shadows[5],
    padding : theme.spacing(2, 4 , 3),
  },
}));

 
function Todo(props) {
  const classes =  useStyles();  
  const [open , setopen] = useState(false); 
  const [input , setinput] = useState("")

  const handleOpen=()=>{
    setopen(true)
  } 
     
  const updateTodo=()=>{
     db.collection("todos").doc(props.todo.id).set({
       todo:input
     }, {merge:true});

     setopen(false)
  }

  return (
    <> 
    <Modal
      open={open}
      onClose={e => setopen(false)}

    >
     <div className={classes.paper}>
      <h2 >hello </h2>                                                
      <input placeholder={props.todo.todo} value= {input} onChange={(event => setinput(event.target.value))} />
      <button onClick={updateTodo} >update</button>
     </div>
    </Modal>
    <List> 
       <ListItemText primary="Todo 💯" secondary ={props.todo.todo}/>

       <ListItem
      secondaryAction={
        <IconButton aria-label="comment">
        </IconButton>
      }
    >
    </ListItem>
       <Delete onClick={event => {db.collection("todos").doc(props.todo.id).delete()}} /> 
       <Button onClick={handleOpen}>updata todo</Button>
    </List>
    </>

    
  )
}


export default Todo;