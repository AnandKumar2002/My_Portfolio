import React, { useState } from 'react'

function ContactRight() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    // e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
      <form
        action="https://api.web3forms.com/submit" 
        // action="https://formspree.io/f/mbjnpjng" 
        // action='https://getform.io/f/zaxdyjla'
        method="POST"
        className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5"
      >
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Your name
            </p>
            <input type="hidden"
              name="access_key"
              value="b0d0de09-b041-4751-83f8-0b27b7850265" />
            <input
              onChange={(e) => setUsername(e.target.value)}
              // value={username}
              name='username'
              className={`${errMsg === "Username is required!" &&
                "outline-designColor"
                } contactInput`}
              type="text"
            />
          </div>
          <div className="w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone Number
            </p>
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              // value={phoneNumber}
              name='phoneNumber'
              className={`${errMsg === "Phone number is required!" &&
                "outline-designColor"
                } contactInput`}
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Email
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            // value={email}
            name='email'
            className={`${errMsg === "Please give your Email!" &&
              "outline-designColor"
              } contactInput`}
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input
            onChange={(e) => setSubject(e.target.value)}
            // value={subject}
            name='subjects'
            className={`${errMsg === "Plese give your Subject!" &&
              "outline-designColor"
              } contactInput`}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Message
          </p>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            // value={message}
            name='message'
            className={`${errMsg === "Message is required!" && "outline-designColor"
              } contactTextArea`}
            cols="30"
            rows="8"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            onClick={handleSend}
            data-aos="flip-left"
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactRight;