import "../css/Auth/Index.module.css";
import "../css/reset.css";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./Root/Root-Layout";
import { Index } from "./Auth/Index";
import { Login, action as LoginAction } from "./Auth/Login";
import { Signup, action as SignupAction } from "./Auth/Signup";
import { AuthError } from "./Auth/AuthError";
import { ErrorPage } from "./Error/ErrorPage";
import {
  Profile,
  loader as ProfileLoader,
  action as ProfileAction,
} from "./ProtectedRoute/Profile";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import { Logout } from "./Auth/Logout";
import {
  App as ResumeApp,
  loader as ResumeLoader,
  action as ResumeAction,
} from "../resume/App";
import { Resume } from "../resume/components/Resume";
import { Print } from "../resume/components/Print";
import { Loading } from "../routes/Loading";

let router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Index },
      {
        path: "login",
        Component: Login,
        action: LoginAction,
        errorElement: <AuthError />,
      },
      {
        path: "signup",
        Component: Signup,
        action: SignupAction,
        errorElement: <AuthError />,
      },
    ],
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: "/profile/:pid",
        Component: Profile,
        loader: ProfileLoader,
        action: ProfileAction,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/resume/:rid",
        Component: ResumeApp,
        hydrateFallbackElement: <Loading />,
        loader: ResumeLoader,
        action: ResumeAction,
        children: [
          { index: true, Component: Resume },
          { path: "print", Component: Print },
        ],
      },
    ],
  },
  {
    path: "/logout",
    Component: Logout,
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
