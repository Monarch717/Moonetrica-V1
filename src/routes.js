
// Moonetrica Dashboard React layouts
import Main from "layouts/main";

// Moonetrica Dashboard React icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon size="15px" color="inherit" />,
    component: Main,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Main",
    key: "main",
    route: "/main",
    icon: <WbIridescentIcon size="15px" color="inherit" />,
    component: '',
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Donate",
    key: "donate",
    route: "/donate",
    icon: <VolunteerActivismIcon size="15px" color="inherit" />,
    component: '',
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Defi Protocols",
    key: "defi-protocols",
    route: "/protocols",
    icon: <TextSnippetIcon size="15px" color="inherit" />,
    component: '',
    noCollapse: true,
  },
];

export default routes;
