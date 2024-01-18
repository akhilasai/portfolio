
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
import { getUserDetailsByUserName } from "../redux/actions/user";
import { useDispatch } from "react-redux";
import "../App.css";

export default function Display() {
  const dispatch=useDispatch()
  const {userName}=useParams()
  console.log(userName)
  useEffect(()=>{
    if(userName){
      getUserDetailsByUserName(dispatch,userName.toLowerCase())
    }
  },[userName])
  return (
    <div className="pl-[25%]  w-screen back text-white  ">
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

