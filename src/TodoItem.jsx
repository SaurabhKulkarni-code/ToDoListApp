import React from 'react'
import { MdDelete } from 'react-icons/md';
import {AiOutlineCheck} from 'react-icons/ai';

const TodoItem = (props) => {

   
  return (
    <div className='todoitem'>
    <div>
        <h4 className={props.complete ? 'complete' : "notcomplete"}>{props.text}</h4>
        <button onClick={()=> props.handleDelete(props.id)}><MdDelete/></button>
        <button onClick={()=> props.handleComplete(props.id)}><AiOutlineCheck/></button>
    </div>
    </div>
  )
}

export default TodoItem