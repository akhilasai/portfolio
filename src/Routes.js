import { useEffect } from "react";
import { Routes, Route, HashRouter ,Navigate  } from "react-router-dom";
import App from "./App";
import AdminPage from "./adminPages";
import Layout from "./Layout/Layout";
import Display from "./components/Display";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Slidebar from "./components/SlideBar";
import AdminLogin from "./adminPages/login";
import { ProtectedRoute } from "./utils/helper";
import {getAllDataApi} from './redux/actions';
import {useDispatch,useSelector} from 'react-redux';
import ErrorPage from "./components/errorPage";

export default function RoutesPage() {
  const dispatch=useDispatch();
  const userData=useSelector((state)=>state.data.userData)

  useEffect(()=>{
    if(userData?._id) getAllDataApi(dispatch,userData?._id);
  },[userData._id])
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
        <div className="pl-[25%]  w-screen back text-white  ">
        <Comp />
        </div>
      </Layout>
    );
  };

  return (
    <div>
      <HashRouter >
        <Routes>
          <Route>
            <Route path="/profile/:userName" element={publicRoutes(Display)} />
            <Route path="/profile/:userName/home" element={publicRoutes(Home)} />
            <Route path="/profile/:userName/about" element={publicRoutes(About)} />
            <Route path="/profile/:userName/resume" element={publicRoutes(Resume)} />
            <Route path="/profile/:userName/projects" element={publicRoutes(Projects)} />
            <Route path="/profile/:userName/contact" element={publicRoutes(Contact)} />
            <Route path="/" element={<Navigate replace to={`/profile/${userData.userName}`} />} />
            <Route path="/errorPage" element={<ErrorPage/>} />
            <Route path="/admin" element={handleProtectedRoutes(AdminPage)} />
            <Route path="/adminLogin" element={publicRoutes(AdminLogin)} />
          </Route>
        </Routes>
      </HashRouter >
    </div>
  );
}
