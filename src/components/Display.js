
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
  return (
    <div>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

