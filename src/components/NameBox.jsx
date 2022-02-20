import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function NameBox() {
  return (
    <div className="h-screen relative dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="dark:bg-gray-900 mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center dark:bg-gray-900 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="dark:text-white block xl:inline">
                  👋 Hi, I'm
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Nick Yozov
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Full Stack Web Developer
              </p>
              <div className="lg:mx-0 md:mt-5 md:text-xl text-gray-800 dark:text-white">
                <button className="hover:text-gray-400">
                  <GitHubIcon />
                </button>
                <button className="hover:text-gray-400">
                  <LinkedInIcon />
                </button>
              </div>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    My Resume
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black dark:text-indigo-700 dark:bg-indigo-100 hover:bg-gray-800 dark:hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
