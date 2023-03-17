import React, { useRef, useState } from 'react';

// import emailjs from 'emailjs-com';
import "./Contact.css";


// const SERVICE_ID = 'service_3qy8lbc';
// const TEMPLATE_ID = 'template_s6gfci4';
// const USER_ID = 'RWSohpTYy2zdo_uXO';


const Contact = () => {
  const form = useRef();

  const [user, setUser] = useState("");
  // const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const x = document.querySelector(".validate");
    const y = document.querySelector(".invalidate");
    const x2 = document.querySelector(".validate2");
    const y2 = document.querySelector(".invalidate2");

    const { name, value } = event.target;
    
    if (name === "user_name") {
      console.log(value);
      setUser(value);
      if (value.length > 0) {
        console.log(value.length);
        console.log('good');
        x.style.display = "block";
        y.style.display = "none";
      } else {
        console.log('no name');
        x.style.display = "none";
        y.style.display = "block";
      }
    }
    if (name === "message") {
      console.log(value);
      setMessage(value);
      if (value.length > 0) {
        console.log(value.length);
        console.log('good');
        x2.style.display = "block";
        y2.style.display = "none";
      } else {
        console.log('no name');
        x2.style.display = "none";
        y2.style.display = "block";
      }
    }
  }

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   // const emailRegex = /^\S+@\S+\.\S+$/;
  //   // const validEmail = emailRegex.test(user_email) 

  //   const user_name = e.target.user_name.value;
  //   const message = e.target.message.value;
  //   const user_email = e.target.user_email.value;

  //   console.log(e.target.user_name.value);
  //   console.log(e.target.message.value);

  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
  //     .then((result) => {

  //       if (user_name && message && user_email) {
  //         console.log(result.text);
  //         form.current.reset();
  //       } else {
  //         console.log('All fields must be filled.');
  //         message.next().show();
  //         return false;
  //       }

  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }
 const sendEmail = () => {
  console.log('email sent');
 }
  return (

    <div className="container-contactme">
      <h3 className='title'>Contact Me</h3>
      <div className="row contact">
        <div className="col-lg-6 left-box">
          <form ref={form} onSubmit={sendEmail} >
            <label className="form-label">Name</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              type="text"
              value={user}
              name="user_name"
              placeholder="Name" />
            <div className='validate' id='here'>
              Looks good
              <i className="fa-solid fa-check color-green"></i>
            </div>
            <div className='invalidate'>
              required
              <i className="fa-solid fa-check"></i>
            </div>
            <label className="form-label">Email</label>
            <input
              className="form-control"
              onChange={handleInputChange}
              type="email"
              name="user_email"
              placeholder="example@example.com" />
            <label className="form-label">Message</label>
            <textarea
              className="form-control message"
              name="message"
              value={message}
              onChange={handleInputChange}
              placeholder="type your message..." />
            <div className='validate2'>
              Looks good
              <i className="fa-solid fa-check color-green"></i>
            </div>
            <div className='invalidate2'>
              required
              <i className="fa-solid fa-check"></i>
            </div>
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