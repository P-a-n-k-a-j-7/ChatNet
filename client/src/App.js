import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, Register, ResetPassword } from "./pages";
import { useSelector } from "react-redux";

function Layout() {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  console.log(user);

  return user?.token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} replace />
  );
}
function App() {
  return (
    <div className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id?" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
