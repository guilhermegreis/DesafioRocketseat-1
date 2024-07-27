import styles from './ListingTasks.module.css';
import { ClipboardText } from 'phosphor-react';

export function ListingTasks() {
    return(
        <div className={styles.backgroundList}>
            <div className={styles.createdCompletedTasks}>
                <span className={styles.createdTasks}>Tarefas criadas</span>
                <span className={styles.completedTasks}>Concluídas</span>
            </div>
        </div>
    )
}