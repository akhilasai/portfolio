import { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import AdminPage from "./adminPages";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Slidebar from "./components/SlideBar";
import AdminLogin from "./adminPages/login";
import { ProtectedRoute } from "./utils/helper";
import {getAllDataApi} from './redux/actions';
import {useDispatch,useSelector} from 'react-redux';
import errorPage from "./components/errorPage";

export default function RoutesPage() {
  const dispatch=useDispatch();
  const userDetails=useSelector((state)=>state.data.user)

  // useEffect(()=>{
  //   getAllDataApi(dispatch);
  // },[])
  const handleProtectedRoutes = (Comp) => {
    return (
      <ProtectedRoute>
        <Comp />
      </ProtectedRoute>
    );
  };
  const publicRoutes = (Comp) => {
    return (
      <Layout>
        <Slidebar />
        <Comp />
      </Layout>
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/:userName/profile" element={publicRoutes(Display)} />
            <Route path="/errorPage" element={publicRoutes(errorPage)} />
            <Route path="/admin" element={handleProtectedRoutes(AdminPage)} />
            <Route path="/adminLogin" element={publicRoutes(AdminLogin)} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
