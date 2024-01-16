import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";


function Layout(){
  const user = null;
  const location = useLocation();

  return user?.token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to={{ pathname: "/login", state: { from: location } }} />
  );
}
function App() {
  return <div className="w-full min-h-[100vh]"></div>;
}

export default App;
