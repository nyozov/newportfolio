import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import navChange from "../hooks/navChange";


export default function NameBox({navigation, setNavigation}) {
  return (
    <div className="relative dark:bg-gray-900 overflow-hidden">
      <motion.div className="max-w-7xl"
      initial={{ opacity: 0 }}
      transition={{ease:'easeIn', delay: 0.2}}
      animate={{ opacity: 1 }}>
        <div className="relative z-10 mt-36 lg:mt-48 pb-8 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:ml-12 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="dark:bg-gray-900 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="flex justify-center flex-col sm:text-center md:text-center dark:bg-gray-900">
              <h1 className="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="dark:text-white block xl:inline">
                  Hi, I'm
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Nick Yozov
                </span>
              </h1>
              <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Full Stack Web Developer
              </p>
              <div className="pt-4 pb-0 flex justify-center">
            <div className="bg-transparent border-2 border-gray-200 dark:border-gray-800 rounded flex items-center">
              <a target='_blank' href='https://www.linkedin.com/in/nyozov/'>
                <div className="w-16 h-12 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
                   <LinkedInIcon/>
                </div>
                </a>
                <a target="_blank" href="https://github.com/nyozov">
                <div className="w-16 h-12 focus:text-brand dark:focus:text-brand hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50 flex justify-center items-center cursor-pointer focus:bg-gray-100 dark:focus:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <GitHubIcon/>
                </div>
                </a>
               
            </div>
        </div>
              <div className="mt-5 sm:mt-8 flex justify-center">
              <Link
                to='/projects'
                onClick={()=>{
                  navChange(navigation[2], navigation, setNavigation)
                }}
                >
                <div className="mt-3 sm:mt-0 sm:ml-3 rounded-md shadow s:w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  
                    .projects
              
                </div>
                </Link>
                <Link
                to='/about'
                onClick={()=>{
                  navChange(navigation[1], navigation, setNavigation)
                }}
                >
                <div className="mt-3 sm:mt-0 sm:ml-3 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 dark:text-indigo-700 dark:bg-indigo-100 hover:bg-black dark:hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                 
                    .aboutMe
              
                </div>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </motion.div>
    </div>
  );
}
