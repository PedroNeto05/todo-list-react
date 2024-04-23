import { Trash } from 'lucide-react';

interface TaskProps {
  title: string;
  description: string;
  id: string;
  deleteFn: (id: string) => void;
}

export const Task = (props: TaskProps) => {
  return (
    <div className='w-full bg-white text-black rounded-lg shadow-lg p-4 break-all flex relative'>
      <div className='w-full'>
        <div className='flex'>
          <h3 className='font-bold text-2xl mb-4 w-full select-none'>
            {props.title}
          </h3>
          <div className='flex gap-4'>
            <Trash
              className='cursor-pointer'
              onClick={() => props.deleteFn(props.id)}
            />
          </div>
        </div>
        <p className='select-none'>{props.description}</p>
      </div>
    </div>
  );
};
