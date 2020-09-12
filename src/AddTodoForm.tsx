import React, { useState } from 'react'; 
// here is a comment to test git out
// this is for testing
// how about now
interface Props{
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) => {

    const [text, setText] = useState('')

    return(

        <form>
            <input 
            type="text"
            value={text}
            onChange={(e)=>{
                setText(e.target.value); 
            }}
            />
            <button 
            type="submit"
            onClick={(e)=>{
                e.preventDefault(); 
                addTodo(text); 
                setText(''); 
            }}
            >Add todo</button>
        </form>


    ); 
}; 