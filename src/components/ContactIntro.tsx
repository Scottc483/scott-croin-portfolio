"use client";
import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";

const ContactIntro = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(fullname, email, message);
    try{    const res = await fetch("/api/contactForm", {
      method: "POST",
      body: JSON.stringify({ fullname, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if ( data.message === 'success')
    {
      setFullname('');
      setEmail('');
      setMessage('');

    } else {

    }
  } catch (err){
    console.log(err);
  }

  };

  useEffect(() => {
    console.log('page fully loaded');
  }, []);

  



  return (
    <div className="flex flex-col px-5 max-w-3xl">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 offWhite ">
        Get In Touch
      </h2>
      <p className="text-lg mb-8 offWhite">
        Have a project in mind or want to collaborate? I&apos;d love to hear
        from you. Feel free to reach out using the contact form or through the
        provided channels below. Let&apos;s connect and bring your ideas to
        life.
      </p>
      <div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-offWhite dark:bg-blue-500"
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>
          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1  mediumGrey"
            required
          />
          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
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
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 mediumGrey"
            required
          />
          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 mediumGrey"
            required
          ></textarea>
          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-8 mt-8 py-2 bg-darkGrey offWhite font-light rounded-md text-md flex flex-row items-center"
            >
              Submit
              <BsFillSendFill className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactIntro;
