import React from "react";
import { Button } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import KeyboardIcon from "@material-ui/icons/Keyboard";

import { useHistory } from "react-router-dom";
import "./styles/Sidebar.css";

const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <Button
        startIcon={
          <img
            src="http://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
            className="sidebar_compose_icon"
            alt="compose button icon"
          />
        }
        className="sidebar_compose"
      >
        Compose
      </Button>
      <div onClick={() => history.push("./emailList")}>
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={54}
          selected={true}
        />
      </div>
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={SendIcon} title="Sent" number={54} />
      <SidebarOption Icon={DraftsIcon} title="Drafts" number={54} />
      <SidebarOption Icon={NoteIcon} title="Categories" number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />

      <div className="sidebar_footer">
        <p className="sidebarMeet_heading">Meet</p>
        <SidebarOption Icon={VideoCallIcon} title="New meeting" />
        <SidebarOption Icon={KeyboardIcon} title="Join a meeting" />
      </div>
    </div>
  );
};

export default Sidebar;
