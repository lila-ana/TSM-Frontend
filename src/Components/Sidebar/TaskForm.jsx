import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_BASE_URL } from '../../api/endpoint';

const initialValues = {
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  assignedTo: '', // This will be a dropdown with options from registered users
  plannedProgress: ''
};

const onSubmit = values => {
  console.log(values);
  
}
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  startDate: Yup.date().required('Start Date is required'),
  endDate: Yup.date().required('End Date is required').min(Yup.ref('startDate'), 'End Date must be after Start Date'),
  assignedTo: Yup.string().required('Assigned To is required'),
  plannedProgress: Yup.string().required('Planned Progress is required'),
});



const TaskForm = () => {
  
  const handleBlur = (event) => {
    // You can implement onBlur validation logic here if needed
  };

  console.log(initialValues);
  

  const handleSubmit = async (values) => {
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const response = await axios.post(`${API_BASE_URL}tasks`, values);
      console.log('Task created:', response.data);
      // You can also redirect the user or perform other actions upon success
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
//     <div>
//     <div className="relative flex flex-col justify-center items-center  min-h-screen overflow-hidden font-quicksand">
//         <div className="border-[1px] border-primary w-full p-6 m-auto bg-secondary rounded-md shadow-xl shadow-third  lg:max-w-xl">
//         <h1 class="text-xl font-bold leading-tight tracking-tight text-fourth md:text-2xl dark:text-white justify-center items-center flex">
//               Sign Up
//           </h1>
//             <form 
//                 onSubmit={handleUserTypeChange}
//                 className="mt-6">
//                 <div className="mb-2">
//                     <label
//                         for="name"
//                         className="block text-sm font-semibold text-fourth"
//                     >
//                         Full Name
//                     </label>
//                     <input 
//                       type="text" 
//                       id="name"
//                       onChange={(e) => setFullName(e.target.value)} 
//                       className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="Full Name"
//                       required/>
                      
//                 </div>
//                 <div className="mb-2">
//                     <label
//                         for="email"
//                         className="block text-sm font-semibold text-fourth"
//                     >
//                         Email
//                     </label>
//                     <input 
//                       type="email" 
//                       id="email"
//                       onChange={(e) => setEmail(e.target.value)} 
//                       className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="email@ienetworks.com"
//                       required/>
                      
//                 </div>
//                 <div className="mb-2">
//                     <label
//                         for="password"
//                         className="block text-sm font-semibold text-fourth"
//                     >
//                         Password
//                     </label>
//                     <input 
//                       type="password" 
//                       id="password" 
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="password"
//                       required/>
                      
//                 </div>
//                 <div className="mb-2">
//                     <label
//                         for="password"
//                         className="block text-sm font-semibold text-fourth"
//                     >
//                        Confirm Password
//                     </label>
//                     <input 
//                       type="password" 
//                       id="password" 
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                       className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                       placeholder="confirm password"
//                       required/>
                      
//                 </div>
                
//                 <div className="mb-2">
//                     <label
//                         for="role"
//                         className="block text-sm font-semibold text-fourth"
//                     >
//                        Role
//                     </label>
//                         <select value={userType} onChange={handleUserTypeChange} 
//                             className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                         >
//                             <option selected>Choose role</option>
//                             <option value="admin">Admin</option>
//                             <option value="user">User</option>
//                             <option value="user">Guest</option>
//                         </select>
//                     {/* <input 
//                       type="role" 
//                       id="role" 
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="block w-full px-4 py-2 mt-2 text-sixth bg-white border rounded-md focus:border-[#d99000] focus:ring-[#9671274b] focus:outline-none focus:ring focus:ring-opacity-40"
//                       required/> */}
                      
//                 </div>
                
//                 <div className="flex m-[10px] gap-[50px] items-center justify-center">
//                   <button
//                     type="submit"
//                     className="bg-[#AD8317] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "
//                   >
//                     Register
//                   </button>
//                   <button
//                     type="reset"
//                     className="bg-[#ffff] border-[#d99000] border-[1px] font-nunito text-sm text-[#d99000] rounded-[12px]  p-[10px] w-[150px] "
//                   >
//                     Cancel
//                   </button>
//                 </div>
//             </form>

            
//         </div>
//         <section class="bg-gray-50 dark:bg-fourth">
// </section>
//     </div>
//   {/* <Footer/> */}
// </div>
    <div
    className="relative flex flex-col justify-center items-center overflow-hidden"
    >
      <h1>Create a New Task</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title:</label>
            <Field 
              className='font-quicksand'
              type="text" id="title" name="title" onBlur={handleBlur} />
            <ErrorMessage name="title" component="div" />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <Field as="textarea" id="description" name="description" onBlur={handleBlur} />
            <ErrorMessage name="description" component="div" />
          </div>

          <div>
            <label htmlFor="startDate">Start Date:</label>
            <Field type="date" id="startDate" name="startDate" onBlur={handleBlur} />
            <ErrorMessage name="startDate" component="div" />
          </div>

          <div>
            <label htmlFor="endDate">End Date:</label>
            <Field type="date" id="endDate" name="endDate" onBlur={handleBlur} />
            <ErrorMessage name="endDate" component="div" />
          </div>

          <div>
            <label htmlFor="assignedTo">Assigned To:</label>
            {/* Create a dropdown for assignedTo using registered users */}
            <Field as="select" id="assignedTo" name="assignedTo" onBlur={handleBlur}>
              <option value="">Select a user</option>
              {/* Map registered users as options */}
              {/* Example: <option value="user1">User 1</option> */}
            </Field>
            <ErrorMessage name="assignedTo" component="div" />
          </div>

          <div>
            <label htmlFor="plannedProgress">Planned Progress:</label>
            <Field type="text" id="plannedProgress" name="plannedProgress" onBlur={handleBlur} />
            <ErrorMessage name="plannedProgress" component="div" />
          </div>

          <button type="submit">Create Task</button>
        </Form>
      </Formik>
    </div>
  );
};

export default TaskForm;
