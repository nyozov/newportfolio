import { motion } from "framer-motion";
import myProjects from "./myProjects";

export default function Projects() {
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
          className=" container dark:bg-gray-900 mx-auto px-6"
        >
          <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pt-6 gap-8">
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
                      target="_blank"
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
