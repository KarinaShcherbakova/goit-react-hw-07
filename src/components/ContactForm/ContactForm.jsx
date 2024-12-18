import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name cannot exceed 50 characters')
    .required('Name is required'),
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot exceed 50 characters')
    .required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(values)); 
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <Field id="name" name="name" type="text" className={styles.input} />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="number" className={styles.label}>Number</label>
          <Field id="number" name="number" type="text" className={styles.input} />
          <ErrorMessage name="number" component="div" className={styles.error} />
        </div>
        <button type="submit" className={styles.submitButton}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;