import React, { useState, useRef } from "react";
import { Element } from "react-scroll";

import classes from "./SectionContact.module.scss";

const SectionContact: React.FC = () => {
  const [emailSentStatus, setEmailSentStatus] = useState("unsent"); //// unsent, sending
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [emailMessageContent, setEmailMessageContent] = useState(
    "Something went wrong"
  );

  //// Refs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  //// Functions
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSentStatus("sending");

    const currentName = nameRef?.current?.value;
    const currentEmail = emailRef?.current?.value;
    const currentSubject = subjectRef?.current?.value;
    const currentMessage = messageRef?.current?.value;

    if (!currentName || !currentEmail || !currentSubject || !currentMessage) {
      setEmailSentStatus("unsent");
      setShowEmailMessage(true);
      setEmailMessageContent("All fields must be completed!");
      return;
    }

    const emailFields = {
      name: currentName,
      email: currentEmail,
      subject: currentSubject,
      message: currentMessage,
    };

    try {
      const response = await fetch(
        "https://duke-of-gordon-menu-interface-d83c02c0eebd.herokuapp.com/api/v1/portfolio/send-email",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(emailFields),
        }
      );

      const data = await response.json();
      if (data.status === "fail") {
        setEmailSentStatus("unsent");
        setShowEmailMessage(true);
        setEmailMessageContent("Failed to send email, please try again later");
      } else if (data.status === "success") {
        setEmailSentStatus("unsent");
        setShowEmailMessage(true);
        setEmailMessageContent("Email sent successfully");
        setTimeout(() => {
          setShowEmailMessage(false);
        }, 5000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className={classes["section-contact"]}>
      <Element name="anchor-contact" className="element">
        <h3>Contact</h3>
      </Element>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Sender Name:</label>
        <input type="text" name="name" ref={nameRef} />
        <label htmlFor="email">Sender Email:</label>
        <input type="email" name="email" ref={emailRef} />
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" ref={subjectRef} />
        <label htmlFor="message">Message:</label>
        <textarea name="message" ref={messageRef} />
        {emailSentStatus === "unsent" && (
          <input
            id={classes["btn-send-email"]}
            type="submit"
            value="Send Email"
          />
        )}

        {emailSentStatus === "sending" && (
          <input
            id={classes["btn-send-email--sending"]}
            type=""
            defaultValue="Sending"
          />
        )}
        {showEmailMessage === true && (
          <p className={classes["email-error-message"]}>
            {emailMessageContent}
          </p>
        )}
      </form>
    </section>
  );
};

export default SectionContact;
