import LeadsLogin from "../../pages/leads/login";

const Routes = [
  {
    path: "/login",
    view: LeadsLogin,
    layout: "leads",
    permission: "user",
    title: "Your Account",
  },
];

export default Routes;
