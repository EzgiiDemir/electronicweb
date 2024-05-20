import React, { useEffect, useState } from "react";
import MapsGoogle from "../components/mapsGoogle";
import JustArrived from "../components/justArrived";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

function ContactPage() {
  const dataCollectionRef = collection(db, "contact-us");
  const [username, setUsername] = useState("");
  const [usermail, setUsermail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fireSubmit = async (event) => {
    event.preventDefault();

    // Email validation
    if (!usermail) {
      alert("Please enter a valid email.");
      return;
    }

    // Send data to Firebase
    try {
      await addDoc(dataCollectionRef, {
        name: username,
        mail_field: usermail,
        subject: subject,
        message: message,
        phone: phone,
      });

      setSuccessMessage("Submission sent successfully.");
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setUsername("");
        setUsermail("");
        setSubject("");
        setMessage("");
        setPhone("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="py-5 mb-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pb-3">
              <h1 className="page-title pb-2">Contact Us</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact Us
                  </li>
                </ol>
              </nav>
              <div className="contact-info">
                <p>
                  For any inquiries or suggestions, do not hesitate to contact
                  or visit us.
                </p>
                <div className="page-content d-flex flex-wrap">
                  <div className="col-lg-6 col-sm-12">
                    <div className="content-box text-dark pe-4 mb-5">
                      <h3 className="card-title">Office</h3>
                      <div className="contact-address pt-3">
                        <p>Polis Sk, Lefkoşa, TRNC</p>
                      </div>
                      <div className="contact-number">
                        <p>
                          <a href="tel:+905428772005">+90 542 877 20 05</a>
                        </p>
                        <p>
                          <a href="https://api.whatsapp.com/send?phone=+905428772005&text=Hello">
                            Whatsapp: +90 542 877 20 05
                          </a>
                        </p>
                      </div>
                      <div className="email-address">
                        <p>
                          <a href="mailto:ziya@alemdarteknik.com">
                            ziya@alemdarteknik.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light p-5 rounded-5">
                <h2 className="display-7 text-dark">Get in Touch</h2>
                <p>Use the form below to get in touch with us.</p>
                <form id="form" className="form-group flex-wrap">
                  <div className="row mb-3">
                    <div className="col">
                      <input
                        type="text"
                        name="name"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Name"
                        className="form-control"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="email"
                        name="email"
                        value={usermail}
                        onChange={(event) => setUsermail(event.target.value)}
                        placeholder="Email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      placeholder="Phone Number"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="subject"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Message"
                      className="form-control"
                      style={{ height: "150px" }}
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg text-uppercase btn-rounded-none"
                      onClick={fireSubmit}
                    >
                      Submit
                    </button>
                  </div>
                  {isSubmitted && (
                    <div
                      className="alert alert-success mt-3"
                      role="alert"
                    >
                      {successMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <JustArrived />
      <MapsGoogle />
    </>
  );
}

export default ContactPage;
