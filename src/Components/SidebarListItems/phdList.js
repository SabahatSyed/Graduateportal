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

export const phdListitems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/Dashboard/HomePhDCor",
  },

  {
    text: "Student",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Students",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageStudents",
      },

      {
        text: "Add Student",
        icon: <PersonAddIcon />,
        path: "/Dashboard/AddStudent",
      },
      /* {
        text: "View Detail",
        icon: <PageviewIcon />,
        path: "/Dashboard/ViewPhDStudentDetails",
      }, */
    ],
  },
  {
    text: "Progress Report",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Report",
        icon: <DonutSmallIcon />,
        path: "/Dashboard/ManageProgressReport",
      },

      {
        text: "Add Report",
        icon: <AutoStoriesIcon />,
        path: "/Dashboard/AddProgressReport",
      },
    ],
  },

  {
    text: "Supervisory Committee",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Committee",
        icon: <DashboardIcon />,
        path: "/Dashboard/ManageSupervisoryCommittee",
      },

      {
        text: "Add Committee",
        icon: <AddModeratorIcon />,
        path: "/Dashboard/AddSupervisoryCommittee",
      },
    ],
  },
  {
    text: "Manage Submission Deadline",
    icon: <AddModeratorIcon />,
    path: "/Dashboard/ManageDeadline",
  },

  {
    text: "Synopsis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageSynopsisSchedule",
      },
      {
        text: "Create a Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/CreateSynopsisSchedule",
      },
      /*    {
        text: "Evaluate Synopsis PhD",
        icon: <MapIcon />,
        path: "/Dashboard/EvaluateSynopsis(PhD)",
      }, */
      /* {
        text: "Generate Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/GenerateSynopsisReport",
      }, */
      // {
      //   text: "View Report",
      //   icon: <LayersIcon />,
      //   path: "/Dashboard/ViewSynopsisReport",
      // },

      {
        text: "Evaluate Synopsis",
        icon: <PersonAddIcon />,
        path: "/Dashboard/SendSynopsisReport",
      },
    ],
  },

  {
    text: "Thesis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/ManageThesisSchedule",
      },
      {
        text: "Create a Schedule",
        icon: <LayersIcon />,
        path: "/Dashboard/CreateThesisSchedule",
      },
      // {
      //   text: "Evaluate Thesis PhD",
      //   icon: <MapIcon />,
      //   path: "/Dashboard/EvaluateThesis(PhD)",
      // },
      /*   {
        text: "Pending Thesis",
        icon: <EditNotificationsIcon />,
        path: "/Dashboard/PendingThesis",
      }, */
      /* {
        text: "Generate Report",
        icon: <PersonAddIcon />,
        path: "/Dashboard/GenerateThesisReport",
      }, */
      // {
      //   text: "View Report",
      //   icon: <LayersIcon />,
      //   path: "/Dashboard/ViewThesisReport",
      // },

      {
        text: "Evaluate Thesis",
        icon: <PersonAddIcon />,
        path: "/Dashboard/SendThesisReport",
      },
    ],
  },
  {
    text: "Update Thesis/Synopsis Status",
    icon: <PersonAddIcon />,
    path: "/Dashboard/UpdateStatus",
  },

  /* {
    text: "Evaluate Synopsis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: " Synopsis PhD",
        icon: <MapIcon />,
        path: "/Dashboard/EvaluateSynopsis(PhD)",
      },
    ],
  }, */

  /* {
    text: "Evaluate Thesis",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Thesis PhD",
        icon: <MapIcon />,
        path: "/Dashboard/EvaluateThesis(PhD)",
      },
    ],
  }, */

  {
    text: "Notification",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Manage Notification",
        icon: <EditNotificationsIcon />,
        path: "/Dashboard/ManageNotification",
      },

      {
        text: "Send Notification (PhD)",
        icon: <CampaignIcon />,
        path: "/Dashboard/SendNotification(PhD)",
      }, {
        text: "Auto Send Notification (PhD)",
        icon: <NotificationsActiveIcon />,
        path: "/Dashboard/autoSendNotification(PhD)",
      },
    ],
  },

  {
    text: "Student Details",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      
      {
        text: "PhD Students",
        icon: <ContentPasteSearchIcon />,
        path: "/Dashboard/ViewPhDStudentDetails",
      },
    ],
  },

  /* {
    text: "Reports",
    icon: <ListIcon />,
    active: false,
    subMenu: [
      {
        text: "Processed Report",
        icon: <ScreenSearchDesktopIcon />,
        path: "/Dashboard/ProcessedReports",
      },
      {
        text: "In Process Report",
        icon: <PageviewIcon />,
        path: "/Dashboard/InprocessReports",
      },
      {
        text: "Program-Wise Report",
        icon: <LeaderboardIcon />,
        path: "/Dashboard/ProgramWiseReport",
      },

      {
        text: "Session-Wise Report",
        icon: <ScreenSearchDesktopIcon />,
        path: "/Dashboard/SessionWiseReport",
      },
      {
        text: "Supervisor Wise Report",
        icon: <PieChartIcon />,
        path: "/Dashboard/SupervisorWiseReport",
      },
      {
        text: "Summary Report",
        icon: <PieChartIcon />,
        path: "/Dashboard/summary-report",
      },
    ],
  }, */
  /* {
    text: "View Notification",
    icon: <ManageAccountsIcon />,
    path: "/Dashboard/ViewNotification",
  },
  {
    text: "View Announcement",
    icon: <ManageAccountsIcon />,
    path: "/Dashboard/ViewAnnouncement",
  }, */
  {
    text: "Change Password",
    icon: <ChangeCircleIcon />,
    path: "/Dashboard/ChangePassword",
  },
];
