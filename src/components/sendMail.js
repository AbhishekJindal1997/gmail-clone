import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";

import "./styles/sendMail.css";
import { db } from "../firebase";
import firebase from "firebase";

const SendMail = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    // e.preventDefault();
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };

  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          required
          ref={register}
        />

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          required
          ref={register}
        />
        <input
          type="text"
          name="message"
          placeholder="Message .."
          className="sendMail_message"
          required
          ref={register}
        />

        <div className="sendMail_options">
          <Button
            className="snedMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
