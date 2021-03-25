import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";

import { useHistory } from "react-router-dom";
import "./styles/EmailRow.css";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push("/mail")} className="emailRow">
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>

      <div className="emailRow_title">
        <h3>{title}</h3>
      </div>

      <div className="emailRow_message">
        <h4>
          {subject} {""}
          <span className="emailRow_description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
