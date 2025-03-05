import { useContext } from "react";
import ItemFirst from "./ItemFirst";
import styles from "./Items.module.css";
import { todoContext } from "./store/Todo-Context";
const Items = ({handleOnDelete})=>{
  const {TodoItems}=useContext(todoContext);
return(
  <div className={styles["itemlist"]}>
    {TodoItems.map((item)=>(
      <ItemFirst ItemName={item.ItemName} key={item.ItemName} dueDate={item.dueDate} handleOnDelete={handleOnDelete}></ItemFirst>
    ))}
    
      

  
  </div>

);
}
export default Items;