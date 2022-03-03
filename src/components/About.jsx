import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import navChange from "../hooks/navChange";

export default function About({ navigation, setNavigation }) {
  return (
    <div className="absolute dark:bg-gray-900 bg-gray-200 w-full">
      <div className="dark:bg-gray-900 my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight dark:text-gray-200 text-gray-800">
            About
          </h4>
         
        </div>
   
      </div>
      <motion.div
        className="flex justify-center flex-col"
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", delay: 0.2 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full bg-gray-200 dark:bg-gray-900 px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex  md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
              <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute  -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQFncExWI0q-nw/profile-displayphoto-shrink_400_400/0/1638999049230?e=1651104000&v=beta&t=k_V52XTfucbUwCKieNMXsB01FKFVFoa0BnUc84ak7-0"
                        alt="profile-pic"
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      Nick Yozov
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      Jr Full Stack Developer
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      Web development bootcamp grad looking for an opportunity
                      to continue to advance my skills by working with industry
                      professionals.
                    </p>
                    <Link
                      to="/contact"
                      onClick={() => {
                        navChange(navigation[3], navigation, setNavigation);
                      }}
                    >
                      <div className="mt-3 rounded-md shadow flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Contact Me
                      </div>
                    </Link>
                    <a target="_blank" href="https://resume.creddle.io/resume/dykdi4p41za" className="mt-3 rounded-md shadow flex items-center justify-center px-2 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-black">
                      My Resume
                    </a>

                    <div className="w-full flex justify-center pt-5 pb-5">
                      <div className="flex items-center">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/nyozov/"
                        >
                          <div className="w-16 h-12 focus:text-brand dark:focus:text-brand hover:text-brand text-gray-800 hover:text-gray-600 flex justify-center items-center cursor-pointer">
                            <LinkedInIcon />
                          </div>
                        </a>
                        <a target="_blank" href="https://github.com/nyozov">
                          <div className="w-16 h-12 focus:text-brand dark:focus:text-brand hover:text-brand text-gray-800 hover:text-gray-600 flex justify-center items-center cursor-pointer">
                            <GitHubIcon />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
