import { useState } from "react";
import Button from "./Button";


const TodoForm = ({addTodo}) => {
    const [input, setInput] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if (input.trim()) {
            addTodo(input);
            setInput('')
        }
        
    }
    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

   
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-wrap">
                <input type="text" value={input} onChange={handleInputChange} className="focus:bg-transparent py-2 px-2 flex-grow border outline-0 text-gray-500 rounded "/>
                <Button type='submit' text='Add'/>
            </form>
              
            
        </div>
    );
};

export default TodoForm;