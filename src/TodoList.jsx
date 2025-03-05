import { useState,useRef, useContext } from "react";
import styles from "./TodoList.module.css";
import { IoAddCircle } from "react-icons/io5";
import { todoContext } from "./store/Todo-Context";
function TodoList(){
  const {addItem}=useContext(todoContext);
  
  const todoElement=useRef();
  const dateElement=useRef();
 
      const onClickButton=(event)=>{
        event.preventDefault();
        const todoNew= todoElement.current.value;
        const dateNew= dateElement.current.value;
        todoElement.current.value="";
        dateElement.current.value="";
        addItem(todoNew,dateNew);
        
      
      }
 
return(
  <div class="container text-center">
  <form onSubmit={onClickButton}><div className={`${styles["kg-row"]} row `}>
    <div class="col-sm-4"><input type="text" ref={todoElement} placeholder="Enter Todo Here" className={styles["inputcl"]}  ></input>
    </div>
    
    <div class="col-sm-4"><input type="date" ref={dateElement}   ></input></div>
    <div className="col-sm-2"><button  className={`${styles["kg-btn"]} btn btn-success`}  ><IoAddCircle /></button></div>

  </div>
  </form>
 
</div>
);
}
export default TodoList;