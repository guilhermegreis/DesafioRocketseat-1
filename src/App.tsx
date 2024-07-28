import { useState } from 'react';
import { InputTask } from './components/InputTask';
import { ListingTasks } from './components/ListingTasks';

interface Task {
  text: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleCreateNewTask(task: string) {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, isCompleted: false }]);
    }
  }

  function handleToggleTask(index: number) {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  }

  function handleDeleteTask(index: number) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  const completedTasksCount = tasks.filter(task => task.isCompleted).length;

  return (
    <div>
      <InputTask onCreateTask={handleCreateNewTask} />
      <ListingTasks 
        tasks={tasks} 
        createdTasksCount={tasks.length} 
        completedTasksCount={completedTasksCount}
        onToggleTask={handleToggleTask} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
