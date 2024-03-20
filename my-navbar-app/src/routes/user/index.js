import Login from "../../views/user/Login";

const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "userLayout",
    permission: "user",
    title: "Login User",
  },
];

export default Routes;
