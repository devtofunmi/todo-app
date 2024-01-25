import  {FC, useEffect, useState} from "react"
import './App.css';


const TodoList: FC = () => {

    interface item {
        id: number;
        text: string;
        completed: boolean;
    }

    const [tasks, setTasks] = useState<item[]>([]);
    const [newTask, setNewTask] = useState<string>('');

    useEffect(() => {
      const storedTasks:string | null = localStorage.getItem('tasks');
      if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
     }
}, []);

   useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

   const addTask = (): void => {
    if (newTask.trim() !== '') {
     setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };
  const removeTask = (taskId:number): void => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };
   const toggleComplete = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
  <div className="flex justify-center  ">
      <div className=" bg-white w-[380px] h-[700px] md:w-[550px] md:h-[500px] rounded-lg mt-10">
      <div className="px-10 mt-20">
        <h1 className="text-purple-500 font-bold">To-Do List</h1>
        <input className="w-full rounded-full bg-gray-300 h-10 pl-5 mt-2 text-purple-500" type="text" placeholder="add tasks..." value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
      </div>
      <div className="px-10 mt-2">
        <button onClick={addTask} className="bg-purple-500 w-full h-10  rounded-full text-white">Submit</button>
      </div>
      <div className=" mt-10 px-10 main overflow-scroll h-[350px] md:h-[200px] ">
     <ul>
        {tasks.map(task => (
              <li
                key={task.id}   
              >
                <div className="flex justify-between">
                  <div>
                    <h1  className={`flex justify-between items-center ${task.completed ? 'line-through' : ''}`} onClick={() => toggleComplete(task.id)}>{task.text}</h1>
                  </div>
                  <div>
                    <button  onClick={() => removeTask(task.id)}>X</button>
                    </div>       
                </div>
               
              </li>
            ))}
      </ul>
      </div>
    </div>  
  </div>
  )
}

export default TodoList