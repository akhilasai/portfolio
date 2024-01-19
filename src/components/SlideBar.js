
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import {userSelect} from '../redux/actions';
import { getUserDetailsByUserName } from "../redux/actions/user";
import { Link,useParams } from "react-router-dom";

import "../App.css";

export default function Slidebar() {
  const userData=useSelector(userSelect);
  const dispatch=useDispatch()
  const {userName}=useParams()

  useEffect(()=>{
    if(userName){
      getUserDetailsByUserName(dispatch,userName.toLowerCase())
    }
  },[userName])
  
  return (
    <div className="flex-none  bg-black h-screen min-w-[25%] fixed ">
      <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
        <div data-aos="slide-down">
          <img
            src={userData.imageUrl}
            alt={userData.userName}
            className="rounded-full border-solid cursor-pointer  border-[8px] border-stone-600 min-h-fit mx-auto  max-w-[190px]"
          />
          <h3 className="text-white name py-4 font-medium ">
            {userData.displayName}
          </h3>
        </div>
        <p
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            window.location.hash.includes('home') ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="200"
        >
          <Link to={`/profile/${userData.userName}/home`} >Home</Link>
          {/* <a href="/#">Home</a> */}
        </p>
        <p
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            window.location.hash.includes('about') ? "text-blue-600 " : ""
          }`}
          data-aos-delay="600"
          data-aos="slide-left"
        >
          <Link to={`/profile/${userData.userName}/about`} >About Me</Link>
          {/* <a href="/#about"> About Me</a> */}
        </p>
        <p
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            window.location.hash.includes('resume') ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1000"
        >
          <Link to={`/profile/${userData.userName}/resume`} >Resume</Link>

          {/* <a href="#resume">Resume</a> */}
        </p>
        <p
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            window.location.hash.includes('projects') ? "text-blue-600 " : ""
          }`}
          data-aos="slide-left"
          data-aos-delay="1400"
        >
          <Link to={`/profile/${userData.userName}/projects`} >Projects</Link>

          {/* <a href="#projects">Projects</a> */}
        </p>
        <p
          className={`cursor-pointer hover:text-blue-600 hover:-translate-y-0.5 hover:text-xl transition hover:transition ${
            window.location.hash.includes('contact') ? "text-blue-600 " : ""
          }`}
          data-aos="slide-right"
          data-aos-delay="1800"
        >
          <Link to={`/profile/${userData.userName}/contact`} >Contact</Link>

          {/* <a href="#contact">Contact</a> */}
        </p>
      </div>
      <div
        className="text-white flex flex-row gap-5 w-fit mx-auto pt-7"
        data-aos="slide-up"
        data-aos-delay="2300"
      >
        <div
          onClick={() =>
            window.open("https://github.com/daniel-jebarson", "_blank")
          }
        >
          <GitHubIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.instagram.com/daniel_diago2003", "_blank")
          }
        >
          {" "}
          <InstagramIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/daniel-jebarson-k-a727a822a",
              "_blank"
            )
          }
        >
          {" "}
          <LinkedInIcon className="cursor-pointer hover:scale-105" />
        </div>
        <div
          onClick={() =>
            window.open("https://www.facebook.com/daniel.jebarson.9", "_blank")
          }
        >
          <FacebookIcon className="cursor-pointer hover:scale-105" />
        </div>
      </div>
    </div>
  );
}
