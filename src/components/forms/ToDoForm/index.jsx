import { Formik, Form } from 'formik';
import React from 'react';
import { TODO_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './ToDoForm.module.sass';
import { connect } from 'react-redux';
import { createTask } from '../../../store/slices/toDoSlice';

function ToDoForm ({ createNewTask }) {
  const initialValues = { task: '' };

  const handleSubmit = (values, formikBag) => {
    createNewTask(values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label='Task:'
          type='text'
          name='tasks'
          placeholder='Enter todo here'
          autoFocus
          classes={classes}
        />
        <button type='submit' className={styles.submit}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createNewTask: v => dispatch(createTask(v)),
});

export default connect(null, mapDispatchToProps)(ToDoForm);
