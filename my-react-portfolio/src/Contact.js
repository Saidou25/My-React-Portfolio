import React, { useRef, useState } from 'react';

import emailjs from 'emailjs-com';
import "./Contact.css";


const SERVICE_ID = 'service_3qy8lbc';
const TEMPLATE_ID = 'template_s6gfci4';
const USER_ID = 'RWSohpTYy2zdo_uXO';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (
    <div className="container">
    <div className="row contact">
      <div className="col-lg-6 left-box">
        <form ref={form} onSubmit={sendEmail}>
          <label className="form-label">Name</label>
          <input
            className="form-control"
          
            type="text"
            name="user_name"
            placeholder="Name" />
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            name="user_email"
            placeholder="example@example.com" />
          <label className="form-label">Message</label>
          <textarea
            className="form-control message"
            name="message"
         
            placeholder="type your message..." />
          <button className="btn btn-primary"
            type="submit"
            value="Send">Submit</button>
        </form>
      </div>

      <div className="col-lg-6 right-box">
        <div className="box">
          <div className="inner">
            <span>Async</span>
          </div>
          <div className="inner">
            <span>Await</span>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};
export default Contact;