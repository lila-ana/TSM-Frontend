/* eslint-disable no-unused-vars */
import {
  MdWatchLater,
  MdFactCheck,
  MdLeaderboard,
  MdOutlineError,
  MdBugReport,
  MdPayments,
} from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";

import { HiDocumentReport } from "react-icons/hi";

import { FaChalkboardTeacher } from "react-icons/fa";
import { TbFileAnalytics } from "react-icons/tb";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "Dashboard",
    label: "Dashboard",
    path: "Dashboard",
    icon: <MdWatchLater />,
  },
  {
    key: "CreateTask",
    label: "Create Task",
    path: "createtask",
    icon: <MdWatchLater />,
  },
  {
    key: "Tasks",
    label: "My Tasks",
    path: "tasks",
    icon: <MdWatchLater />,
  },
  {
    key: "ProgressDevation",
    label: "Progress Devation",
    path: "progressdevation",
    icon: <MdWatchLater />,
  },
  {
    key: "Contact",
    label: "Contact",
    path: "contact",
    icon: <MdWatchLater />,
  }
  
];
