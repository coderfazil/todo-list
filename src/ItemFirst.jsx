import { useContext } from "react";
import styles from "./ItemFirst.module.css";
import { MdDelete } from "react-icons/md";
import { todoContext } from "./store/Todo-Context";
const ItemFirst=({ItemName,dueDate})=>{
  const {deleteItem}=useContext(todoContext);
  const onDeleteClick=()=>{
    deleteItem(ItemName);
  }
  return(
<div class="container">
  
  <div class="row kg-row">
    <div class="col-sm-4">{ItemName}</div>
    <div class="col-sm-4">{dueDate} </div>
    <div class="col-sm-2"><button type="button" className={`${styles["first"]} btn btn-danger kg-btn`} onClick={()=>{onDeleteClick()}}><MdDelete /></button></div>
  </div>
</div>
  );
}
export default ItemFirst;
