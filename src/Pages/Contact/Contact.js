import React, { useRef, useState } from "react";
import { BsFillTelephoneFill, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci/index";
import { MdLocationPin } from "react-icons/md/index";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import "sweetalert2/src/sweetalert2.scss";
import "./Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const Swal = require("sweetalert2");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        // setLoading(true),
        "service_d7n4p8o",
        "template_ogvu902",
        form.current,
        "ewGhlBBTWQx6s-ala"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "",
            text: "Message sent successfully!",
            // icon,
            confirmButtonText: "Cool",
            position: "top-end",
            width: "25em",
            height: "20em",
            background: "#3d3d3d",
            color: "#ffffff",
            timer: 3000,
            timerProgressBar: true,
          });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            title: "",
            text: "Failed to send!",
            // icon,
            confirmButtonText: "Cool",
            position: "top-end",
            width: "25em",
            height: "20em",
            background: "#e36262",
            color: "#ffffff",
            timer: 3000,
            timerProgressBar: true,
          });
          setLoading(false);
        }
      );
  };

  return (
    <>
      <section className="contact">
        <div className="header"></div>
        <div className="contact-section">
          <div className="contact-form">
            <h2>Contact Us For General Inquiries</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label>Your Name</label>
              <input type="text" name="user_name" />
              <label>Your Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" className="textArea" />
              <input
                type="submit"
                value={loading === true ? "Sending..." : "Send"}
                className="submit"
                style={
                  loading === true
                    ? { backgroundColor: "#000", outline: "none" }
                    : { backgroundColor: "" }
                }
              />
            </form>
          </div>
          <div className="mapContainer">
            <h3>Send Us a Message</h3>
            <p>
              If you have any questions, comments, or concerns, please do not
              hesitate to contact us using the form provided on our website or
              by emailing us directly at <em>business@swatinipower.com </em>. We
              look forward to hearing from you!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
