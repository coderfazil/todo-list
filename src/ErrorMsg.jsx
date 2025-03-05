import { useContext } from 'react';
import styles from './ErrorMsg.module.css';
import { todoContext } from './store/Todo-Context';
const ErrorMsg=()=>{
  const {TodoItems}=useContext(todoContext);
  
return(
(TodoItems.length===0 &&<p className={styles.err}>Congratulations!Your todays work is done.</p>)
);
  
}
export default ErrorMsg;