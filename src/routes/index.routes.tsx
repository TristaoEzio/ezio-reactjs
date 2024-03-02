import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import {
  Home,
  NotFound,
  Results,
  Search,
  SignIn,
  //SignUp,
  //Profile,
  Biography,
} from "../pages";

const routes = [
  <Route path="/" element={<Home />} />,
  <Route path="/search" element={<Search />} />,
  <Route path="/results" element={<Results />} />,
  <Route path="/signin" element={<SignIn />} />,
//   <Route path="/profile" element={<Profile />} />,
  <Route path="/biography" element={<Biography />} />,
  <Route path="*" element={<NotFound />} />,
];

const router = createBrowserRouter(
  createRoutesFromElements(routes)
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
