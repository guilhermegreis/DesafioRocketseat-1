import styles from "./InputTask.module.css";
import ToDoLogo from "../assets/ToDoLogo.svg";
import { PlusCircle } from "phosphor-react";

export function InputTask() {
  return (
    <div className={styles.coreDiv}>
      <div className={styles.headerDiv}>
        <img src={ToDoLogo} alt="Logo" className={styles.todoLogo} />{" "}
        <span className={styles.spanTo}>to</span>
        <span className={styles.spanDo}>do</span>
      </div>

      <div className={styles.inputItems}>
        <input
          placeholder="Adicione uma tarefa"
          className={styles.typingTask}
        />
        <button className={styles.createButton}>Criar <PlusCircle size={19} weight="bold" style={{ marginLeft: '3px'}}/></button>
      </div>
    </div>
  );
}
