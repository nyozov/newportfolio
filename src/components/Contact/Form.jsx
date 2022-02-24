import { useState } from "react";

export default function Form() {
  const [formResults, setFormResults] = useState({
    name: "",
    message: "",
  });
  const [charNumber, setCharNumber] = useState(200);

  const handleWordCount = (e) => {
    const charCount = e.target.value.length;
    const charLeft = 200 - charCount;
    setCharNumber(charLeft);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
      
    
    setFormResults((values) => ({ ...values, [name]: value }));
    
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formResults)
  };

  

  return (
    <form id="login" onSubmit={handleSubmit}>
      <div className="bg-white dark:bg-gray-800 xl:px-4">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                Send Me An Email
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400"></div>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="name"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Your name or email"
                />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="messaget"
                  className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                >
                  Message
                </label>
                <textarea
                  onChange={handleChange}
                  maxLength="200"
                  id="message"
                  name="message"
                  required
                  className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                  placeholder="Send me a message"
                  rows={5}
                  defaultValue={""}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                  Character Limit: {charNumber}
                </p>
              </div>
              <button className="bg-indigo-600 px-4 py-1 my-4 w-1/4 text-white rounded hover:bg-indigo-700" type="submit">Send</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
