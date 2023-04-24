import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, updateTask } from '../../store/slices/toDoSlice';
import {
  BsFillTrashFill,
  BsFillCheckCircleFill,
  BsFillClockFill,
} from 'react-icons/bs';
import styles from './ToDoList.module.sass';

export const ToDoList = ({ tasks, remove, update }) => {
  const handleContactChange = (id, isDone) => update(id, { isDone: !isDone });

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.todosList}>
        {tasks.map(t => (
          <li className={styles.todosListItem} key={t.id}>
            <input
              className={styles.todosInput}
              type='checkbox'
              checked={t.isDone}
              onChange={() => handleContactChange(t.id, t.isDone)}
            />
            <span className={styles.task}>{t.task}</span>
            <span>
              {t.isDone ? (
                <BsFillCheckCircleFill className={styles.done} />
              ) : (
                <BsFillClockFill className={styles.notDone} />
              )}
            </span>
            <button className={styles.remove} onClick={() => remove(t.id)}>
              <BsFillTrashFill className={styles.removeIcon} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ toDoList }) => toDoList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(deleteTask(id)),
  update: (id, updatedData) => dispatch(updateTask({ id, updatedData })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
