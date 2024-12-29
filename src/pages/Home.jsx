import React,  { useEffect, useState } from "react";
import Hero from "./miniComponents/Hero";
import Timeline from "./miniComponents/Timeline";
import Skills from "./miniComponents/Skills";
import About from "./miniComponents/About";
import Portfolio from "./miniComponents/Portfolio";
import Contact from "./miniComponents/Contact";
import axios from "axios";
const server = import.meta.env.VITE_SERVER;

const Home = () => {
  const [user, setUser] = useState({
      fullName: "",
      objective: "",
      aboutMe: "",
      resume: {
        url: "",
      },
      githubURL: "",
      leetCodeURL: "",
      hackerRankURL: "",
      linkedInURL: "",
      facebookURL: "",
    });

    const getMyProfile = async () => {
      try{
        const { data } = await axios.get(
          `${server}/api/v1/user/portfolio/me`,
          { withCredentials: true }
        );
  
        setUser(data.user);  
      } catch( e ){
        console.log( e );
      }
    };
    useEffect(() => {
      getMyProfile();
    }, []);
  return (
    <article className="px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14">
      <Hero user = {user}/>
      <Timeline />
      <About user = {user}/>
      <Skills />
      <Portfolio />
      <Contact />
    </article>
  );
};

export default Home;
