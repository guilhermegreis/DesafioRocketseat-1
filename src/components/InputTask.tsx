import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from "./InputTask.module.css";
import ToDoLogo from "../assets/ToDoLogo.svg";
import { PlusCircle } from "phosphor-react";

interface InputTaskProps {
  onCreateTask: (task: string) => void;
}

export function InputTask({ onCreateTask }: InputTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    onCreateTask(newTaskText);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTasInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaskEmpty = newTaskText.length === 0

  return (
    <div className={styles.coreDiv}>
      <div className={styles.headerDiv}>
        <img src={ToDoLogo} alt="Logo" className={styles.todoLogo} />{" "}
          <span className={styles.spanTo}>to</span>
          <span className={styles.spanDo}>do</span>
      </div>

      <form onSubmit={handleCreateNewTask} className={styles.inputItems}>
        <textarea
          name="comment"
          placeholder="Adicione uma tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTasInvalid}
          className={styles.typingTask}
          required
        />
        <button className={styles.createButton} type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle size={19} weight="bold" style={{ marginLeft: '3px' }} />
        </button>
      </form>
    </div>
  );
}
