import React from "react";
function Index() {
    return (
        <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
                <h1 className=" xl:text-5xl md:text-3xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">Skills</h1>
                <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto">Our success has come from being committed to the property and investing in the development of the product to maximize sales. At the same time and maintaining the integrity.</p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center  xl:pb-10 pb-16 items-center">
                    <img src="https://www.feroot.com/wp-content/uploads/1200px-Unofficial_JavaScript_logo_2.svg.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                    <img src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center   xl:pb-10 pb-16 pt-4 items-center">
                    <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--rQS9VcWG--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zojuy79lo3fn3qdt7g6p.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pb-10 pb-16 items-center">
                    <img src="https://pbs.twimg.com/profile_images/1012243829477392387/m3cEA33V_400x400.jpg" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                    <img src="https://avatars.githubusercontent.com/u/4223" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 items-center">
                    <img src="https://webapp.io/content/images/2019/11/postgres.png" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                    <img src="https://www.influxdata.com/wp-content/uploads/GitHub-logo.jpg" alt />
                </div>
                <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                    <img src="https://www.gartner.com/imagesrv/peer-insights/vendors/logos/cypress.jpg" alt />
                </div>
            </div>
        </div>
    );
}

export default Index;