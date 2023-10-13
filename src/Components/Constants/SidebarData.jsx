/* eslint-disable no-unused-vars */
import {
  MdCreateNewFolder,
  MdPersonalInjury,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { GrInProgress } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { TfiSettings } from "react-icons/tfi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "Dashboard",
    icon: <RxDashboard />,
  },
  {
    key: "CreateTask",
    label: "Create Task",
    path: "createtask",
    icon: <MdCreateNewFolder />,
  },
  {
    key: "Tasks",
    label: "My Tasks",
    path: "tasks",
    icon: <MdPersonalInjury />,
  },
  {
    key: "ProgressDevation",
    label: "Progress Devation",
    path: "progressdevation",
    icon: <GrInProgress />,
  },
  {
    key: "ContactUs",
    label: "Contact Us",
    path: "contactus",
    icon: <BiSolidMessageDetail />,
  },
  {
    key: "faq",
    label: "FAQ",
    path: "faq",
    icon: <FaQuestion />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <TfiSettings />,
  },
  
];
