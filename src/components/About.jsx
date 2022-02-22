import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.div className="max-w-7xl"
      initial={{ opacity: 0 }}
      transition={{ease:'easeIn', delay: 0.2}}
      animate={{ opacity: 1 }}>
    <div className="container flex justify-center mx-auto pt-16">
        <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg text-center font-normal pb-3">ABOUT ME</p>
            <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
        </div>
    </div>
    <div className="w-full bg-gray-100 dark:bg-gray-800 px-10 pt-10">
        <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                    <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                            <div className="h-32 w-32">
                                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFncExWI0q-nw/profile-displayphoto-shrink_400_400/0/1638999049230?e=1651104000&v=beta&t=k_V52XTfucbUwCKieNMXsB01FKFVFoa0BnUc84ak7-0" alt className="rounded-full object-cover h-full w-full shadow-md" />
                            </div>
                        </div>
                        <div className="px-6 mt-16">
                            <div className="font-bold text-3xl text-center pb-1">Nick Yozov</div>
                            <p className="text-gray-800 text-sm text-center">Jr Full Stack Developer</p>
                            <p className="text-center text-gray-600 text-base pt-3 font-normal">
                              Recent web develoment bootcamp grad looking to continue to improve my skills by working with industry professionals.</p>
                            <div className="w-full flex justify-center pt-5 pb-5">
                               
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</motion.div>
  )
}
