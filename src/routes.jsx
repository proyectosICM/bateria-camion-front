
import { IncidentDetails } from "./pages/IncidentPanel/incidentDetails";
import { IncidentPanel } from "./pages/IncidentPanel/incidentPanel";
import { Login } from "./pages/login/login";
import { Redirect } from "./pages/login/redirect";
import { P1 } from "./pages/p/p1";
import { P2 } from "./pages/p/p2";
import { TruckDetails } from "./pages/truckDetails/truckDetails";
import { TruckMenu } from "./pages/truckMenu/truckMenu";


export const routes = [
  //LOGIN
  { path: "/", component: <Login /> },
  { path: "/login", component: <Login /> },

  //Redireccion
  { path: "/redirect", component: <Redirect /> },

  //Menu 
  { path: "/menu", component: <TruckMenu /> },

  { path: "/details", component: <TruckDetails /> },

  { path: "/incidents", component: <IncidentPanel /> },
  
  { path: "/incident-details", component: <IncidentDetails />},

  { path: "/p1", component: <P1 /> },
  { path: "/p2", component: <P2 /> },
];
