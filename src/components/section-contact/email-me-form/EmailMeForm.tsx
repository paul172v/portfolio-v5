import React from "react";
import { RefObject } from "react";

import classes from "./EmailMeForm.module.scss";

enum EmailStatus {
  Unsent,
  Sending,
  Sent,
}

interface EmailMeFormProps {
  emailSentStatus: EmailStatus;
  showEmailMessage: boolean;
  emailMessageContent: string;
  nameRef: RefObject<HTMLInputElement>;
  emailRef: RefObject<HTMLInputElement>;
  subjectRef: RefObject<HTMLInputElement>;
  messageRef: RefObject<HTMLTextAreaElement>;
  onSubmit: (e: React.FormEvent) => void;
}

const EmailMeForm: React.FC<EmailMeFormProps> = ({
  emailSentStatus,
  showEmailMessage,
  emailMessageContent,
  nameRef,
  emailRef,
  subjectRef,
  messageRef,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Sender Name:</label>
      <input type="text" name="name" id="name" ref={nameRef} />

      <label htmlFor="email">Sender Email:</label>
      <input type="email" name="email" id="email" ref={emailRef} />

      <label htmlFor="subject">Subject:</label>
      <input type="text" name="subject" id="subject" ref={subjectRef} />

      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" ref={messageRef} />

      {emailSentStatus === EmailStatus.Unsent && (
        <input
          id={classes["btn-send-email"]}
          type="submit"
          value="Send Email"
        />
      )}

      {emailSentStatus === EmailStatus.Sending && (
        <input
          id={classes["btn-send-email--sending"]}
          type="button"
          value="Sending..."
          disabled
        />
      )}

      {showEmailMessage && (
        <p className={classes["email-error-message"]}>{emailMessageContent}</p>
      )}
    </form>
  );
};

export default EmailMeForm;
