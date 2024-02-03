"use client";
import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";

const ContactIntro = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
  const [formErrors, setFormErrors] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setFormErrors("");
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      // Email address is not valid
      setFormErrors("Please enter a valid email address.");
      return;
    }

    try {
      const res = await fetch("/api/contactForm", {
        method: "POST",
        body: JSON.stringify({ fullname, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.message === "success") {
        // Reset form values
        setFullname("");
        setEmail("");
        setMessage("");
        // Update submission status
        setIsSubmitted(true); // Update submission status
        setIsModalOpen(true); // Open the success modal
        return;
      } else {
        // Update form errors
        setFormErrors(data.message);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("page fully loaded");
  }, []);

  return (
    <div className="flex flex-col px-5 max-w-3xl w-full mt-20">
      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-offWhite dark:bg-offWhite text-darkGrey"
        >
          <h1 className="text-2xl font-bold dark:text-darkGrey">
            Send a message
          </h1>
          <p className="text-gray-500 font-light mt-2 dark:text-darkGrey">
            I&apos;ll get back to you as soon as possible.
          </p>
          <h3 className="text-red-500 font-light mt-2 dark:text-darkGrey">
            {formErrors}
          </h3>
          {isSubmitted && isModalOpen && (
            <>
          
            <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute w-[100vw] h-[100vh] bg-gray-500 bg-opacity-60 z-49">
            </div>
              <div className="bg-offWhite p-8 rounded-lg shadow-[0_0px_8px_0px_#383840] z-50">
                <p className="text-green-500 font-semibold dark:text-green-500">
                  Message sent successfully!
                </p>
                <button
                  className="shadow-lg flex flex-row justify-center items-center bg-darkGrey border border-gray-300  offWhite rounded-lg text-sm py-2 px-5 hover:bg-offWhite hover:darkGrey ease-in duration-150 mt-8"
                  onClick={() => setIsModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
            </>
          )}
          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-500"
          >
            Name<span className="text-red-500 dark:text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-500 mediumGrey hover:outline-none hover:rounded-md hover:ring-1 hover:ring-gray-500 "
            required
          />
          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-500"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-500 mediumGrey hover:outline-none hover:rounded-md hover:ring-1 hover:ring-gray-500 "
            required
          />
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-500"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray-500 mediumGrey hover:outline-none hover:rounded-md hover:ring-1 hover:ring-gray-500"
            required
          ></textarea>
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="shadow-lg flex flex-row justify-center items-center bg-darkGrey border border-gray-300  offWhite rounded-lg py-2 px-8 hover:bg-offWhite hover:darkGrey ease-in duration-150 mt-2"
            >
              Submit
              <BsFillSendFill className="ml-2" />
            </button>
      
          </div>
        </form>
        {/* <button onClick={() => {setIsModalOpen(true), setIsSubmitted(true)}} className="">
              Open Modal
        </button> */}
      </div>
    </div>
  );
};

export default ContactIntro;
