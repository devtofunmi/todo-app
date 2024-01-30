import { FC, useEffect, useState, ChangeEvent, KeyboardEvent } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import Topbar from '../components/Topbar';
import { AiOutlineDelete } from 'react-icons/ai';

import '../App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const hasCompletedTasks = completedTasks.length > 0;

  useEffect(() => {
    const storedTasks: string | null = localStorage.getItem('tasks');
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

  const removeTask = (taskId: number): void => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const updatedCompletedTasks = completedTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
  };

const toggleComplete = (taskId: number): void => {
  setTasks((prevTasks: Task[]) =>
    prevTasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
  );

  setCompletedTasks((prevCompletedTasks: Task[]) => {
    const taskToToggle: Task | undefined = prevCompletedTasks.find((task) => task.id === taskId);

    if (taskToToggle) {
      setTasks((prevTasks: Task[]) => [...prevTasks, { ...taskToToggle, completed: false }]);
      return prevCompletedTasks.filter((task) => task.id !== taskId);
    } else {
      const uncompletedTask = tasks.find((task) => task.id === taskId);
      if (uncompletedTask) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        return [...prevCompletedTasks, { ...uncompletedTask, completed: true }];
      }
      return prevCompletedTasks;
    }
  });
};

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTask();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTask(e.target.value);
  };

  return (
    <DashboardLayout>
      <div className="main h-[90vh] md:bg-white md:shadow-2xl md:rounded-2xl md:bg-opacity-5 w-full md:w-[80%] md:p-5 z-20 border-[0px] md:border-[1px] border-white border-opacity-10 overflow-scroll">
        <div className="hidden md:block">
          <Topbar />
        </div>
        <div className="text-white text-lg font-bold mt-2">
          Ready For Today’s Tasks?
          <br /> Let’s Do This!!!
        </div>

        <div className="w-[350px] md:w-[550px] ">
          <div>
            <input
              className="w-full rounded-full  h-10 bg-transparent border-[0px] mt-5 text-white outline-none"
              type="text"
              placeholder="Add tasks..."
              value={newTask}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
            />
          </div>

          <div className="mt-5 text-white main overflow-scroll ">
            <ul>
              {tasks
                .filter((task) => !task.completed)
                .map((task) => (
                  <li key={`uncompleted-${task.id}`}>
                    <div className="flex justify-between border-[1px] border-white hover:bg-[#181819] cursor-pointer my-3  p-3 rounded-md hover:bg-btntext hover:text-[#4cbf87]">
                      <div>
                        <h1
                          className={`flex justify-between items-center ${
                            task.completed ? 'line-through' : ''
                          }`}
                          onClick={() => toggleComplete(task.id)}
                        >
                          {task.text}
                        </h1>
                      </div>
                      <div>
                        <button onClick={() => removeTask(task.id)}>
                          <AiOutlineDelete size={15} className="hover:text-[#4cbf87] text-white cursor-pointer " />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>

            {hasCompletedTasks && <h1 className="text-white text-lg mt-5 mb-3">Complete Tasks</h1>}
            <ul>
              {completedTasks.map((task) => (
                <li key={`completed-${task.id}`}>
                  <div className="flex justify-between border-[1px] border-white hover:bg-[#181819] cursor-pointer my-3  p-3 rounded-md hover:bg-btntext hover:text-[#4cbf87]">
                    <div>
                      <h1
                        className={`flex justify-between items-center ${
                          task.completed ? 'line-through' : ''
                        }`}
                        onClick={() => toggleComplete(task.id)}
                      >
                        {task.text}
                      </h1>
                    </div>
                    <div>
                      <button onClick={() => removeTask(task.id)}>
                        <AiOutlineDelete size={15} className="hover:text-[#4cbf87] text-white cursor-pointer " />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Tasks;