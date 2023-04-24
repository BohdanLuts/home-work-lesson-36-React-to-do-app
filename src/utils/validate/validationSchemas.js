import * as yup from 'yup';

export const TODO_VALIDATION_SCHEMA = yup.object({
  task: yup.string().trim().min(5).max(20).required(),
});
