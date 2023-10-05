import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
        const formik = useFormik({
          initialValues: {
            name: '',
            email: '',
            message: '',
          },
          validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            message: Yup.string().required('Message is required'),
          }),
          onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
        },
    });
      
    return (
        <div>
          <h1>Contact Us</h1>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
export default ContactUs;

