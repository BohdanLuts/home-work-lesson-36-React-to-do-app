import React from 'react';
import ToDoList from '../../components/ToDoList';
import ToDoForm from '../../components/forms/ToDoForm';
import styles from './ToDoPage.module.sass';

function ToDoPage () {
  return (
    <section className={styles.list}>
      <h2>Todos</h2>
      <ToDoForm />
      <ToDoList />
    </section>
  );
}

export default ToDoPage;
