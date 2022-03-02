import { motion } from "framer-motion";
import { useState } from "react";
import Form from "./Form";

export default function Footer() {
  


  return (
    <div className="absolute dark:bg-gray-900 bg-gray-200 w-full">
    <div className="dark:bg-gray-900 bg-gray-200">
      <div className="dark:bg-gray-900 my-6 lg:my-12 container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between pb-4 border-b border-gray-300">
        <div>
          <h4 className="text-2xl font-bold leading-tight dark:text-gray-200 text-gray-800">
            Contact
          </h4>
          
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
        <div className="container mx-auto">
          {/* Place your content here */}
          <Form/>
          
        </div>
      </motion.div>
    </div>
  </div>
  )
}
