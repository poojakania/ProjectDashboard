import Login from "../../views/user/Login";
import Signup from "../../views/user/Signup";

const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "userLayout",
    permission: "user",
    title: "Login User",
  },
  {
    path: "/signup",
    view: Signup,
    layout: "userLayout",
    permission: "user",
    title: "Signup User",
  },
];

export default Routes;
