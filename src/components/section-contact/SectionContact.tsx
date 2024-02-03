import React, { useState, useRef } from "react";
import { Element } from "react-scroll";
import classes from "./SectionContact.module.scss";
import EmailMeForm from "./email-me-form/EmailMeForm"; // Import the EmailMeForm component

enum EmailStatus {
  Unsent,
  Sending,
  Sent,
}

type EmailFields = {
  name: string | undefined;
  email: string | undefined;
  subject: string | undefined;
  message: string | undefined;
};

const SectionContact: React.FC = () => {
  const [emailSentStatus, setEmailSentStatus] = useState<EmailStatus>(
    EmailStatus.Unsent
  );
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  const [emailMessageContent, setEmailMessageContent] = useState(
    "Something went wrong"
  );

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateForm = () => {
    return (
      nameRef.current?.value &&
      emailRef.current?.value &&
      subjectRef.current?.value &&
      messageRef.current?.value
    );
  };

  const resetForm = () => {
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    subjectRef.current!.value = "";
    messageRef.current!.value = "";
  };

  const sendEmail = async (emailFields: EmailFields) => {
    try {
      const response = await fetch(
        "https://duke-of-gordon-menu-interface-d83c02c0eebd.herokuapp.com/api/v1/portfolio/send-email",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(emailFields),
        }
      );

      const data = await response.json();
      if (data.status === "fail") {
        setEmailMessageContent("Failed to send email, please try again later");
      } else if (data.status === "success") {
        setEmailMessageContent("Email sent successfully");
        setTimeout(() => setShowEmailMessage(false), 5000);
        resetForm();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setEmailSentStatus(EmailStatus.Unsent);
      setShowEmailMessage(true);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSentStatus(EmailStatus.Sending);

    if (!validateForm()) {
      setEmailSentStatus(EmailStatus.Unsent);
      setShowEmailMessage(true);
      setEmailMessageContent("All fields must be completed!");
      return;
    }

    await sendEmail({
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      subject: subjectRef.current?.value,
      message: messageRef.current?.value,
    });
  };

  return (
    <section className={classes["section-contact"]}>
      <Element name="anchor-contact" className="element">
        <h3>Contact</h3>
      </Element>

      <EmailMeForm
        emailSentStatus={emailSentStatus}
        showEmailMessage={showEmailMessage}
        emailMessageContent={emailMessageContent}
        nameRef={nameRef}
        emailRef={emailRef}
        subjectRef={subjectRef}
        messageRef={messageRef}
        onSubmit={submitHandler}
      />
    </section>
  );
};

export default SectionContact;
