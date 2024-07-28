import styles from './ListingTasks.module.css';
import { Check, ClipboardText, Trash } from 'phosphor-react';

interface Task {
    text: string;
    isCompleted: boolean;
}

interface ListingTasksProps {
    tasks: Task[];
    createdTasksCount: number;
    completedTasksCount: number;
    onToggleTask: (index: number) => void;
    onDeleteTask: (index: number) => void;
}

export function ListingTasks({ tasks, createdTasksCount, completedTasksCount, onToggleTask, onDeleteTask }: ListingTasksProps) {

  return (
    <div className={styles.backgroundList}>
      <div className={styles.createdCompletedTasks}>
        <span className={styles.createdTasks}>Tarefas criadas <span className={styles.numberOfCreatedTasks}>{createdTasksCount} </span></span>
        <span className={styles.completedTasks}>Concluídas <span className={styles.numberOfCompletedTasks}>{completedTasksCount} de {createdTasksCount}</span></span>
      </div>

      {createdTasksCount === 0 ? (
        <div className={styles.noTasksCreated}>
            <ClipboardText size={56} />
            <span className={styles.noTasks}>
                Você ainda não tem tarefas cadastradas
            </span>
            <span>
              Crie tarefas e organize seus itens a fazer
            </span>
        </div>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li 
              key={index} 
              className={`${styles.taskItem} ${task.isCompleted ? styles.completed : ''}`}
              onClick={() => onToggleTask(index)}
            >
              <button 
                className={styles.deleteButton} 
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteTask(index);
                }}
              >
                <Trash size={16} weight="bold" />
              </button>
              <span className={`${styles.checkbox} ${task.isCompleted ? styles.checked : ''}`}>
                {task.isCompleted && <Check size={16} color="#fff" />}
              </span>
              {task.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
