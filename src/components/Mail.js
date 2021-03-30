import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from "@material-ui/icons/Delete";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import AccessTimeTwoToneIcon from "@material-ui/icons/AccessTimeTwoTone";
import PlaylistAddCheckTwoToneIcon from "@material-ui/icons/PlaylistAddCheckTwoTone";
import LabelIcon from "@material-ui/icons/Label";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useHistory } from "react-router-dom";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

import "./styles/Mail.css";

const Mail = () => {
  const history = useHistory();
  const selectedMail = useSelector(selectOpenMail);

  return (
    <div className="mail">
      <div className="mail_tools">
        <div className="mail_toolsLeft">
          <IconButton onClick={() => history.push("./emailList")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MarkunreadIcon />
          </IconButton>
          <span className="mobile_display_hidden">
            <IconButton>
              <AccessTimeTwoToneIcon />
            </IconButton>
            <IconButton>
              <PlaylistAddCheckTwoToneIcon />
            </IconButton>
            <IconButton>
              <LabelIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </span>
        </div>
        <div className="mail_toolsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>

      <div className="mail_body">
        <div className="mail_bodyHeader">
          <h1>{selectedMail?.subject}</h1>
          <LabelImportantIcon className="mail_important" />
          <p>{selectedMail?.title}</p>
          <p className="mail_time">{selectedMail?.time} </p>
        </div>
        <p className="mail_message">{selectedMail?.description}</p>
      </div>
    </div>
  );
};

export default Mail;
