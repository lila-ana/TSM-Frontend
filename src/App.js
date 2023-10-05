import {BrowserRouter as Router, Routes, Route, Switch, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Pages/Login';
import { Home } from './Pages/Home';
import RootLayout from './Layouts/RootLayout';
import HelpLayout from './Layouts/HelpLayout';
import RegistrationForm from './Pages/RegistrationForm';
import ContactUs from './Components/Contact/ContactUs';
import TaskForm from './Components/Sidebar/TaskForm';
import AuthLayout from './Layouts/AuthLayout';
import LandingPage from './Pages/LandingPage';
import SidebarData from './Components/Sidebar/SidebarData';


const router = createBrowserRouter (
  createRoutesFromElements (
    
    <Route>
      <Route path='/landingpage' element={<LandingPage/>} />
      <Route path="/home" element={<Home/> }  />
      {/* <Route path="/sidebar" element={<SidebarData/> }  /> */}

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
