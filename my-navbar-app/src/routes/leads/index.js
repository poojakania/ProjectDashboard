import Login from "../../views/leads/Login";

const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "leadsLayout",
    permission: "leads",
    title: "Login Admin",
  },
];

export default Routes;
