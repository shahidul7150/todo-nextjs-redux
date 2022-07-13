
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo,removeTodo } from '../redux/action';

const TodoList = () => {
  const [inputEvent, setInputEvent] = useState('');

  const dispatch = useDispatch();

  const selector = useSelector(state => state.todoReducer.list);
 
  return (
    <div className=" flex flex-col gap-4 bg-slate-200 p-8 ">
      <div className="space-x-4">
        <input
          type="text"
          onChange={(e) => setInputEvent(e.target.value)}
          value={inputEvent}
          placeholder="Write todo"
          className="pl-4 p-3 border-2 border-indigo-600  w-96 rounded-md"
        />
        <button
          onClick={() => dispatch(addTodo(inputEvent), setInputEvent(''))}
          className="border-2 border-indigo-600 pl-4 p-3 rounded-md hover:bg-gray-100"
        >
          ADD TODO
        </button>
      </div>

      {selector.map((item) => {
        return(
        <div
          key={item.id}
          className="flex justify-between border-b border-red-300 py-3"
        >
          <p className="font-semibold text-green-500">{item.data}</p>
          <button onClick={() => dispatch(removeTodo(item.id))} className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-400">
            X DELETE
          </button>

      
          </div>
          )
      })}
    </div>
  );
};

export default TodoList;
