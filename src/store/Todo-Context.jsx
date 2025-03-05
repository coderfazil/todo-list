import { createContext, useReducer } from "react";

export const todoContext=createContext(
  {
    TodoItems:[],
    addItem:()=>{},
    deleteItem:()=>{},
  }
);
const itemReducer=(currVal,action)=>{
  let newItem=currVal;
if(action.type==="ADD_iTEM"){

  newItem=[...currVal,{ItemName:action.payload.ItemName,dueDate:action.payload.dueDate},];

}else if(action.type==="DELETE_ITEM"){
  
newItem=currVal.filter((item)=>{
  if(item.ItemName!=action.payload.ItemName)
  {
    return item;
    }
});
}
return newItem;

}


const TodoItemsContextProvider=({children})=>{
  const deleteItem=(itemName)=>{
    const deleteAction={
     type:"DELETE_ITEM",
     payload:{
       ItemName:itemName,
     },
    }
    itemDispatcher(deleteAction);
     // let newItemList=TodoItems.filter((item)=>{
       
     //   if(item.ItemName!=itemName) 
     //     return item;
     // })
   
     // setTodoItems(newItemList);
   }
    
   
     const todoItems=[
       {
         ItemName:"buy milk",
         dueDate:"19-05-2024",
   
   
     },{
       ItemName:"Go to college",
       dueDate:"12-05-2024",
     },
     {
       ItemName:"Go to gym",
       dueDate:"instantly",
     }
   ];
   //const[TodoItems,setTodoItems]=useState(todoItems);
   const [TodoItems,itemDispatcher]=useReducer(itemReducer,[]);
   const addItem=(todoNew,dateNew)=>{
     const newItemAction={
       type:"ADD_iTEM",
       payload:{
         ItemName:todoNew,
         dueDate:dateNew
       },
     }
     itemDispatcher(newItemAction);
       // setTodoItems((TodoItems)=>      //its funvtional updates we directly passed an function to update state and the argument contains the current val of the state
       //   [...TodoItems,{ItemName:todoNew,dueDate:dateNew}],
       //);
      
   }
   return( <todoContext.Provider 
    value={{
      TodoItems,
      addItem,
      deleteItem,

    }}>
      {children}

    </todoContext.Provider>
    );
}
export default TodoItemsContextProvider;
