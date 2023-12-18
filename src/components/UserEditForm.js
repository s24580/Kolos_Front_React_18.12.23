import React, { useRef, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const userSchema = Yup.object().shape({
  firstName: Yup.string().required('Imię jest wymagane'),
  lastName: Yup.string().required('Nazwisko jest wymagane'),
  skills: Yup.string().required('Przynajmniej jedna umiejętność jest wymagana'),
});

const UserEditForm = ({ user, onSubmit }) => {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, []);

  return (
    <Formik
      initialValues={{
        firstName: user.name.first,
        lastName: user.name.last,
        skills: user.skills.join(', '),
      }}
      validationSchema={userSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit({
          ...user,
          name: { first: values.firstName, last: values.lastName },
          skills: values.skills.split(', '),
        });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field innerRef={firstInputRef} type="text" name="firstName" />
          <ErrorMessage name="firstName" component="div" />

          <Field type="text" name="lastName" />
          <ErrorMessage name="lastName" component="div" />

          <Field type="text" name="skills" />
          <ErrorMessage name="skills" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Zapisz
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UserEditForm;
