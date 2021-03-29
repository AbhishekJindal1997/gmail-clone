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

import "./styles/Mail.css";

const Mail = () => {
  const history = useHistory();
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
          <h1>Whatssup</h1>
          <LabelImportantIcon className="mail_important" />
          <p>Title</p>
          <p className="mail_time">10 pm </p>
        </div>
        <p className="mail_message">
          This is a message hey just tes5ibg the overflow text wrap will it woek
          lets see how does this goes i am really excited for this was wao-iting
          for a long time v This is a message hey just tes5ibg the overflow text
          wrap will it woek lets see how does this goes i am really excited for
          this was wao-iting for a long time This is a message hey just tes5ibg
          the overflow text wrap will it woek lets see how does this goes i am
          really excited for this was wao-iting for a long time
        </p>
      </div>
    </div>
  );
};

export default Mail;
