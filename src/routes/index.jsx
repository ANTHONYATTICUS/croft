import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import LandIndex from "../views/ProfilePage/Sections/index.component";
import Create from "../views/ProfilePage/Sections/create.component"
var indexRoutes = [
  { path: "/blog-post", name: "BlogPostPage", component: BlogPostPage },
  { path: "/index", name: "index.component", component: LandIndex },
  { path: "/create", name: "create.component", component: Create },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/signup", name: "SignupPage", component: SignupPage },
  { path: "/", name: "LandingPage", component: LandingPage },
];

export default indexRoutes;
