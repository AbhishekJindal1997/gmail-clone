import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

import "./styles/sendMail.css";

const sendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail_close" />
      </div>

      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <div className="sendMail_options">
          <Button className="snedMail_send">send</Button>
        </div>
      </form>
    </div>
  );
};

export default sendMail;
