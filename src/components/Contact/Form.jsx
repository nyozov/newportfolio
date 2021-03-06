import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

export default function Form() {
  const [formResults, setFormResults] = useState({
    name: "",
    message: "",
  });
  const [charNumber, setCharNumber] = useState(200);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [mode, setMode] = useState("");

  const handleWordCount = (e) => {
    const charCount = e.target.value.length;
    const charLeft = 200 - charCount;
    setCharNumber(charLeft);
  };

  const handleChange = (event) => {
    
   
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'message'){
      handleWordCount(event)
    }
    

    setFormResults((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true)

    console.log(formResults);

    const { name, message } = formResults;

    axios
      .post("https://portfolio-api.netlify.app/.netlify/functions/api/email", {
        name,
        message,
      })
      .then((res) => {
        if (res.data.success) {
          setLoading(false)
          setMode("success");
        } else {
          setMode("error");
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
        setMode("error");
      });
  };

  return (
    <div>
      {mode === "error" && (
        <div className="dark:text-red-500 flex justify-center">
          Error sending email
        </div>
      )}
      {mode === "success" && (
        <div className="dark:text-green-500 flex justify-center">
          Email successfully sent
        </div>
      )}
      {loading && <Loading />}
      {success && <div className="dark:text-white">Email Sent!</div>}
      {!loading && mode === "" && (
        <form id="login" onSubmit={handleSubmit}>
          <div className="bg-white min-w-fit dark:bg-gray-800 lg:p-4 xl:p-4 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="container mx-auto bg-white dark:bg-gray-800 rounded ">
              <div className="m-1 border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
                <div className="flex w-11/12 mx-auto  rounded-lg justify-center items-center">
                  
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Send Me An Email
                  </p>
                  <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400"></div>
                  
                </div>
              </div>
              <div className="mx-auto">
                <div className=" w-11/12 mx-auto flex flex-col items-center justify-center ">
                <p className="dark:text-gray-500 text-gray-600 text-sm">
                    You can send me an email through this form or contact me through LinkedIn.
                  </p>
                  <div className="mt-16 flex flex-col  w-full">
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
                      maxLength="50"
                      required
                      className="border  border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                      placeholder="Your name or email"
                    />
                  </div>
                  <div className="mt-8 flex flex-col  w-full">
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
                  <button
                    className="bg-indigo-600 px-4 py-1 my-4 w-1/4 text-white rounded hover:bg-indigo-700"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
