import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import RegistrationForm from './Pages/RegistrationForm';
import Tasks from './Components/Sidebar/Tasks';
import CreateTaskForm from './Components/Sidebar/CreateTaskForm';
import Dashboard from './Components/Sidebar/Dashboard';
import ContactUs from './Components/Contact/ContactUs';
import Faq from './Components/Contact/FAQ';
import Settings from './Pages/Settings';
import GuestLayout from './Layouts/GuestLayout';
import AuthLayout from './Layouts/AuthLayout';
import TaskDetails from './Components/Sidebar/TaskDetails';
import ProgressDevation from './Components/Sidebar/ProgressDevation';

function App() {
  return (
    <Routes>
      <Route element={<GuestLayout/>}>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/landingpage" element={<LandingPage/> }  />
        {/* <Route path="login" element={<Login/> }  />
        <Route path="registrationForm" element={<RegistrationForm/> }  /> */}
      </Route>
      <Route element={<AuthLayout/>}>
        <Route path="dashboard/tasks" element={<Tasks/> }  />
        <Route path="dashboard/tasks/:id" element={<Tasks/> }  />
        {/* <Route path="dashboard/tasks/:id/compare-progress" element={<Dashboard/> }  /> */}
        <Route path="dashboard/taskdetails/:id" element={<TaskDetails/> }  />
        <Route path="dashboard/progressdevation:id" element={<ProgressDevation/> }  />
        <Route path="/dashboard/createtask" element={<CreateTaskForm/> }  />
        <Route path="/dashboard/Dashboard" element={<Dashboard/> }  />
        <Route path="/dashboard/contactus" element={<ContactUs/> }  />
        <Route path="/dashboard/faq" element={<Faq/> }  />
        <Route path="/dashboard/settings" element={<Settings/> }  />
      </Route>
    </Routes>
  )
}

export default App;

