import React ,{useState}from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo ,deleteTodo,removeTodo} from '../actions/index';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispath = useDispatch();
   const list = useSelector((state) =>state.todoReducers.list);


    //get The Data 
  return (
    <div>
      
       <h1>To Do Applications</h1>

       <div className='main-div'>
        <center>
        <div className='child-div'>
          <h1> Add Your Data to The List ✏</h1> 
        </div>

        </center>
 


        
<center>
    
<div className='add Items'>
          <input type='text' placeholder=' Add items '
          value={inputData}
          onChange= {(event ) => setInputData(event.target.value) }
          />   
            <i className='fa fa-plus add-btn'  onClick={()=> dispath(addTodo(inputData),setInputData(''))}></i>
            
        </div>
        
</center>


{/* // Showing the Data  */}
       </div>

     <center>
     <div className=' show Items'> 

     {
      list.map((elem) => {
        return(
        <div key={elem.id}> 
<h3>
          {elem.data}
           </h3>
           <i className='far fa-trash-alt add-btn' title='DeleteItem'  onClick={()=> dispath(deleteTodo(elem.id))}></i>
            
</div>
        )
      })
     }

        </div>

     </center>
<center>
  
<div>
  <h1>Check List</h1>
     <button onClick={()=> dispath(removeTodo())}> Remove All </button>
     </div>
</center>
       
    </div>
  )
}

export default Todo
