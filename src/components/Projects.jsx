import { motion } from "framer-motion";
import therapifyImg from "../assets/therapify_image.png";
import aircallimg from "../assets/aircall_image.png";
import { useState } from "react";

export default function Projects() {
  const myProjects = [
    {
      name: "Etune",
      badges: ["React", "Express"],
      img: "https://github.com/nyozov/etune/raw/master/src/assets/wide-view.png?raw=true",
      url: "https://github.com/nyozov/etune",
      desc: "Online vehicle ECU tuning service where a user can fill out a form, pay through Stripe, and then receive an email copy of their purchase through Twilio SendGrid.",
    },
    {
      name: "Therapify",
      badges: ["React", "Express"],
      img: therapifyImg,
      url: "https://github.com/habibcodes/therapify",
      desc: "Tele-health service connecting a patient and a practitioner through features including a calendar for appointments, text-chat, and video-chat through WebRTC.",
    },
    {
      name: "Weather App",
      badges: ["React"],
      img: "https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true",
      url: "https://github.com/nyozov/weather-app",
      desc: "Simple weather app where a user can type in a location, and in return they will recieve a weather report including degrees, humidity, and conditions.",
    },
    {
      name: "Scheduler",
      badges: ["React"],
      img: "https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true",
      url: "https://github.com/nyozov/scheduler",
      desc: "A user can book an appointment by selecing a day, selecting an open spot, typing in their name, and selecting an interviewer from a list.",
    },
    {
      name: "Url Shortener",
      badges: ["Express", "Vanilla JS"],
      img: "https://github.com/nyozov/tinyapp/raw/master/docs/newurl-page.png?raw=true",
      url: "https://github.com/nyozov/tinyapp",
      desc: "Full stack web application that allows users to shorten long URLs (à la bit.ly). A user's URLs are saved to a PSQL database. Uses cookies and password encryption. ",
    },
    {
      name: "Tweeter",
      badges: ["JQuery"],
      img: "https://github.com/nyozov/tweeter/raw/master/docs/tweet_widescreen.png?raw=true",
      url: "https://github.com/nyozov/tweeter",
      desc: "Single-page AJAX based Twitter clone that uses jQuery, HTML5, and CSS3. A user can write a message, and it will show up on their profile.",
    },
    {
      name: "Aircall",
      badges: ["React"],
      img: aircallimg,
      url: "https://github.com/nyozov/aircall",
      desc: "Frontend coding challenge - a user can look through phone calls, see call information, and archive them. Uses given api to POST requests through Axios.",
    },
  ];

  return (
    <div className="absolute dark:bg-gray-900 bg-gray-200 w-full h-screen">
      <div className="dark:bg-gray-900 bg-gray-200">
        <div className="dark:bg-gray-900 my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight dark:text-gray-200 text-gray-800">
              Recent Projects
            </h4>
           
          </div>
        </div>
        {/* Page title ends */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", delay: 0.3 }}
          animate={{ opacity: 1 }}
          className="container sm:justify-center dark:bg-gray-900 mx-auto px-6"
        >
   
     
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
           
            {myProjects.map((project) => {
              return (
                <div className="relative max-w-sm bg-white p-2 m-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="h-52 w-96 object-cover rounded-t-lg"
                    src={project.img}
                    alt=""
                  />

                  <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.name}
                    </h5>
                    <div className="flex">
                      {project.badges.map((badge) => {
                        return (
                          <div className="border border-gray-300 dark:border-gray-700 h-8 w-24 mb-4 md:mb-0 rounded-md flex items-center justify-center">
                            <div className="flex items-center">
                              <div className="h-1 w-1 rounded-full bg-indigo-700 mr-1" />
                              <span className="text-xs text-gray-800 dark:text-gray-100 font-normal">
                                {badge}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <p className="mb-3 my-2 mb-8 font-normal text-gray-700 dark:text-gray-400">
                      {project.desc}
                    </p>
                    
                  <a
                      target='_blank'
                      href={project.url}
                      className="absolute bottom-4 left-6 items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                    >
                      Code
                    </a>
                    
                
                  </div>
               
                </div>
                
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
