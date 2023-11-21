import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ContactUs from './Pages/ContactUs';
import CreateTaskForm from './Pages/CreateTaskForm';
import Dashboard from './Pages/Dashboard';
import Faq from './Pages/FAQ';
import ProgressDevation from './Pages/ProgressDevation';
import Settings from './Pages/Settings';
import Tasks from './Pages/Tasks';
import TaskDetails from './Pages/TaskDetails';
import GuestLayout from './Auth/GuestLayout'
import AuthLayout from './Auth/AuthLayout'



function App() {
  return (
    <Routes>
      <Route element={<GuestLayout/>}>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/landingpage" element={<LandingPage/> }  />
      </Route>
      <Route element={<AuthLayout/>}>
        <Route path="dashboard/tasks" element={<Tasks/> }  />
        <Route path="dashboard/tasks/:id" element={<Tasks/> }  />
        <Route path="dashboard/taskdetails/:id" element={<TaskDetails/> }  />
        <Route path="dashboard/progressdevation" element={<ProgressDevation/> }  />
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

