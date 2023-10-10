import {BrowserRouter as Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import RegistrationForm from './Pages/RegistrationForm';
import Tasks from './Components/Sidebar/Tasks';
import SingleTask from './Components/Sidebar/SingleTask';
import CreateTaskForm from './Components/Sidebar/CreateTaskForm';
import Dashboard from './Components/Sidebar/Dashboard';



const router = createBrowserRouter (
  createRoutesFromElements (
    
    <Route>
      <Route path='/' element={<LandingPage/>} />
      <Route path="/landingpage" element={<LandingPage/> }  />
      <Route path="login" element={<Login/> }  />
      <Route path="registrationForm" element={<RegistrationForm/> }  />
      <Route path="tasks" element={<Tasks/> }  />
      <Route path="/dashboard/progressdevation" element={<SingleTask/> }  />
      <Route path="/dashboard/createtask" element={<CreateTaskForm/> }  />
      <Route path="/dashboard/Daskboard" element={<Dashboard/> }  />

      

      {/* <Route path="/dashboard/" element={<SingleTask/> }  /> */}

    </Route>

    // <Route path="/" element={<RootLayout/> }  >
    //   {/* <Route element={AuthLayout}> */}
    //     <Route path="/home" element={<Home/> }  />
    //     <Route path='contact' element={<ContactUs/> }  />
    //     <Route path="createTask" element={<TaskForm/> }  />
    //   {/* </Route> */}
    //   <Route  path="login" element={<Login/> } />
    //   <Route  path="registrationForm" element={<RegistrationForm/> } />
    //   {/* <Route  path="help" element={<HelpLayout/> } >
    //     <Route path="faq"/>
    //     <Route path="contact"/>x
    //   </Route> */}
    // </Route>
  )
)
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App;
