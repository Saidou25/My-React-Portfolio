import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const SERVICE_ID = "service_g15laob";
const TEMPLATE_ID = "template_s6gfci4";
const USER_ID = "RWSohpTYy2zdo_uXO";

const Contact = () => {
  const form = useRef();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const x = document.querySelector(".validate");
    const y = document.querySelector(".invalidate");
    const x1 = document.querySelector(".validate1");
    const y1 = document.querySelector(".invalidate1");
    const x2 = document.querySelector(".validate2");
    const y2 = document.querySelector(".invalidate2");
    const emailRegex = /^\S+@\S+\.\S+$/;

    const { name, value } = event.target;

    if (name === "username") {
      setUser(value);
      if (value.length > 0) {
        x.style.display = "block";
        y.style.display = "none";
      } else {
        x.style.display = "none";
        y.style.display = "block";
      }
    }
    if (name === "email") {
      setEmail(value);
      if (emailRegex.test(value)) {
        x1.style.display = "block";
        y1.style.display = "none";
      } else {
        x1.style.display = "none";
        y1.style.display = "block";
      }
    }
    if (name === "message") {
      setMessage(value);
      if (value.length > 0) {
        x2.style.display = "block";
        y2.style.display = "none";
      } else {
        x2.style.display = "none";
        y2.style.display = "block";
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!user || !message || !email) {
      setErrorMessage("All fields need filled");
      return;
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );

    setMessage("");
    setEmail("");
    setUser("");
  };

  return (
    <div className="container contactme">
      <h3 className="title">Contact Me</h3>
      <div className="row contact">
        <div className="col-lg-6 left-box">
          <form ref={form} onSubmit={sendEmail}>
            <label className="form-label text-primary">Name</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              type="text"
              value={user}
              name="username"
              placeholder="Name"
            />
            <div className="validate">
              Looks good
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="invalidate">
              required
              <i className="fa-solid fa-check"></i>
            </div>
            <label className="form-label text-primary mt-5">Email</label>
            <input
              className="form-control"
              value={email}
              onChange={handleInputChange}
              type="email"
              name="email"
              placeholder="example@example.com"
            />
            <div className="validate1">
              Looks good
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="invalidate1">
              required
              <i className="fa-solid fa-check"></i>
            </div>
            <label className="form-label text-primary mt-5">Message</label>
            <textarea
              className="form-control message"
              name="message"
              value={message}
              onChange={handleInputChange}
              placeholder="type your message..."
            />
            <div className="validate2">
              Looks good
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="invalidate2">
              required
              <i className="fa-solid fa-check"></i>
            </div>
            {errorMessage && (
              <div className="message mt-5">
                <p className="message-p bg-danger text-light p-3">{errorMessage}</p>
              </div>
            )}
            <button className="btn btn-primary" type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6 right-box">
          <div className="box">
            <div className="inner">
              <span>Await</span>
            </div>
            <div className="inner">
              <span>Async</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
