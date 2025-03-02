import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData)=>{
      // console.log(formData.entries());
      const formInputData = Object.fromEntries(formData.entries());
      console.log(formInputData);
    };
  return (
    <section className="section-contact">
    <h2 className="container-title">Feedback Form</h2>

    <div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
          name="username"
          required
          // autoComplete="off"
        />

        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          name="email"
          required
          // autoComplete="off"
        />

        <textarea
          className="form-control"
          rows="10"
          placeholder="Enter your feedback"
          name="message"
          required
          autoComplete="off"
        ></textarea>

        <button type="submit" value="send">
          Send
        </button>
      </form>
    </div>
  </section>
  );
};

export default Contact;
