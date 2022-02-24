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
    },
    {
      name: "Therapify",
      badges: ["React", "Express"],
      img: therapifyImg,
      url: "https://github.com/habibcodes/therapify",
    },
    {
      name: "Weather App",
      badges: ["React"],
      img: "https://github.com/nyozov/weather-app/raw/master/public/weather-app-gif.gif?raw=true",
    },
    {
      name: "Scheduler",
      badges: ["React"],
      img: "https://github.com/nyozov/scheduler/raw/master/docs/creating-interview.png?raw=true",
    },
    {
      name: "Url Shortener",
      badges: ["Express", "Vanilla JS"],
      img: "https://github.com/nyozov/tinyapp/raw/master/docs/newurl-page.png?raw=true",
    },
    {
      name: "Tweeter",
      badges: ["JQuery"],
      img: "https://github.com/nyozov/tweeter/raw/master/docs/tweet_widescreen.png?raw=true",
    },
    { name: "Aircall", badges: ["React"], img: aircallimg },
  ];

  return (
    <div className="absolute dark:bg-gray-900 bg-gray-200 w-full h-screen">
      <div className="dark:bg-gray-900 bg-gray-200">
        <div className="dark:bg-gray-900 my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
          <div>
            <h4 className="text-2xl font-bold leading-tight dark:text-gray-200 text-gray-800">
              Recent Projects
            </h4>
            <ul className="flex flex-col md:flex-row items-start md:items-center text-gray-600 text-sm mt-3">
              <li className="flex items-center mr-3 mt-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-paperclip"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9 l6.5 -6.5" />
                  </svg>
                </span>
                <span>Active</span>
              </li>
              <li className="flex items-center mr-3 mt-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-trending-up"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="3 17 9 11 13 15 21 7" />
                    <polyline points="14 7 21 7 21 14" />
                  </svg>
                </span>
                <span> Trending</span>
              </li>
              <li className="flex items-center mt-3 md:mt-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-plane-departure"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path
                      d="M15 12h5a2 2 0 0 1 0 4h-15l-3 -6h3l2 2h3l-2 -7h3z"
                      transform="rotate(-15 12 12) translate(0 -1)"
                    />
                    <line x1={3} y1={21} x2={21} y2={21} />
                  </svg>
                </span>
                <span>Started on 29 Jan 2020</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Page title ends */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", delay: 0.3 }}
          animate={{ opacity: 1 }}
          className="container dark:bg-gray-900 mx-auto px-6"
        >
          {/* Remove class [ h-64 ] when adding a card block */}
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
            {/* Place your content here */}
            {myProjects.map((project) => {
              return (
                <div className="max-w-sm bg-white p-2 m-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
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

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>

                    <a
                      href="#"
                      class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Code
                      <svg
                        class="ml-2 -mr-1 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
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
