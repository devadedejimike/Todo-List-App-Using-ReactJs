import { FaTrash, FaCheck, FaBan} from "react-icons/fa";

const TodoList = ({ todos, handleDelete, markAsCompleted }) => {
  return (
    <ul className="mt-2">
      {todos.map((todo) =>
        <li className={`text-gray-700 text-xl list-none flex justify-between items-center  p-2 border-b border-gray-300 ${todo.done ? 'line-through' : ''} `} key={todo.id}>
          <span className="flex-1">{todo.title}</span>
          <span className="flex px-2 py-1 ml-1">
          {todo.deleted ? (
            <FaBan className="text-red-500 w-4"/>
          )
           : (
            <>
              {!todo.done && (
                <span className="flex px-2 py-1 ml-1">
                <FaCheck className="text-gray-500 w-4 mx-1 cursor-pointer" onClick={() => markAsCompleted(todo.id)} /></span>
              )}
              <span className="flex px-2 py-1 ml-1">
                <FaTrash className={`text-gray-500 w-4 ${todo.deleted || todo.done ? 'cursor-not-allowed text-gray-300' : 'cursor-ponter'}`} onClick={() => handleDelete(todo.id)}
                />
              </span>
            </>
          )} 
          </span>
        </li>
        )}
    </ul>
  );
};

export default TodoList;
