import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PieChartIcon from "@mui/icons-material/PieChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import TableChartIcon from "@mui/icons-material/TableChart";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import PageviewIcon from "@mui/icons-material/Pageview";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import MapIcon from "@mui/icons-material/Map";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PreviewIcon from "@mui/icons-material/Preview";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PollIcon from "@mui/icons-material/Poll";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";



export const MsStudentListitems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomeMs",
  },
  {
    text: "Submission",
    icon: null,
    active: false,
    subMenu: [
      {
        text: "Synopsis Submission",
        icon: <PollIcon />,
        path: "/Dashboard/SynopsisSubmission",
      },
      {
        text: "Thesis Submission",
        icon: <PollIcon />,
        path: "/Dashboard/ThesisSubmission",
      },
    ],
  },
  
  {
    text: "Result",
    icon: <PollIcon />,
    path: "/Dashboard/Studentresult",
  },
  {
    text: "Notification",
    icon: <ListIcon />,
    active: false,
    subMenu: [
     

      {
        text: "Send Notification",
        icon: <NotificationsActiveIcon />,
        path: "/Dashboard/SendNotification",
      },
      
    ],
  },

  {
    text: "Edit Profile",
    icon: <AddBoxIcon />,
    path: "/Dashboard/EditProfile",
  },

  {
    text: "Change Password",
    icon: <ChangeCircleIcon />,
    path: "/Dashboard/ChangePassword",
  },
];

export const PhdStudentListitems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomePhD",
  },

  {
    text: "Submission",
    icon: <PollIcon />,
    active: false,
    subMenu: [
      {
        text: "Synopsis Submission",
        icon: <PollIcon />,
        path: "/Dashboard/SynopsisSubmission",
      },
      {
        text: "Thesis Submission",
        icon: <PollIcon />,
        path: "/Dashboard/ThesisSubmission",
      },
    ],
  },
  
  {
    text: "Manage Supervisory Committee",
    icon: <DashboardIcon />,
    path: "/Dashboard/ManageCommittee",
  },
  {
    text: "Result",
    icon: <AddBoxIcon />,
    path: "/Dashboard/Studentresult",
  },
  {
    text: "Notification",
    icon: <ListIcon />,
    active: false,
    subMenu: [
     

      {
        text: "Send Notification",
        icon: <NotificationsActiveIcon />,
        path: "/Dashboard/SendNotification",
      },
      
    ],
  },
  {
    text: "Edit Profile",
    icon: <AddBoxIcon />,
    path: "/Dashboard/EditProfile",
  },

  {
    text: "Change Password",
    icon: <ChangeCircleIcon />,
    path: "/Dashboard/ChangePassword",
  },
];
export const verifiedlist = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomeMSS",
  },
  {
    text: "Verification",
    icon: <HomeIcon />,
    path: "/Dashboard/Verify",
  },
];
