import { useRef, useState } from 'react';
import { Task } from './components/Task';

interface Tasks {
  title: string;
  description: string;
  id: string;
}

export function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const titleInput = useRef<HTMLInputElement>(null);
  const descriptionTextarea = useRef<HTMLTextAreaElement>(null);

  const handleAddTasks = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (titleInput.current?.value && descriptionTextarea.current?.value) {
      const title = titleInput.current.value;
      const description = descriptionTextarea.current.value;
      const id = crypto.randomUUID();
      const task = { title, description, id };

      setTasks([...tasks, task]);
    }
  };

  const handleDeleteTask = (id: string) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  return (
    <div className='min-h-screen bg-slate-900 flex items-center'>
      <div className='w-[1780px] h-[880px] grid grid-cols-5 bg-slate-300 mx-auto p-12 rounded-xl gap-4 shadow-xl'>
        <div className='col-span-2 border border-zinc-950 rounded-xl p-4 '>
          <form className=' size-full flex flex-col gap-5'>
            <input
              type='text'
              name='title'
              ref={titleInput}
              className='outline-none rounded-lg shadow-lg p-4'
              placeholder='Task title'
              maxLength={56}
            />
            <textarea
              name='description'
              className='resize-none outline-none rounded-lg shadow-lg p-4 h-full'
              ref={descriptionTextarea}
              placeholder='Task description'
              maxLength={900}
            ></textarea>
            <button
              type='submit'
              onClick={handleAddTasks}
              className='w-full bg-blue-900 rounded-lg text-3xl text-white shadow-lg h-20 outline-none'
            >
              Add
            </button>
          </form>
        </div>
        <div className='col-span-3 border border-zinc-950 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto'>
          {tasks.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              description={task.description}
              id={task.id}
              deleteFn={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
