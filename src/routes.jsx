import { TruckDetails } from "./common/truckDetails/truckDetails";
import { TruckMenu } from "./common/truckMenu/truckMenu";
import { Login } from "./pages/login/login";
import { Redirect } from "./pages/login/redirect";
import { P1 } from "./pages/p/p1";
import { P2 } from "./pages/p/p2";


export const routes = [
  //LOGIN
  { path: "/", component: <Login /> },
  { path: "/login", component: <Login /> },

  //Redireccion
  { path: "/redirect", component: <Redirect /> },

  //Menu 
  { path: "/menu", component: <TruckMenu /> },

  { path: "/details", component: <TruckDetails /> },

  { path: "/p1", component: <P1 /> },
  { path: "/p2", component: <P2 /> },
];
