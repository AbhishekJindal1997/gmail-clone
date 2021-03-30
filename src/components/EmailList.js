import React, { useEffect, useState } from "react";
import EmailRow from "./EmailRow";
import Section from "./Section";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { IconButton, Checkbox } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

import "./styles/EmailList.css";

const MailList = () => {
  const [emails, setEmails] = useState([]);
  const dispatch = useDispatch();
  const handleCompose = () => {
    dispatch(openSendMessage());
  };

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      {/* Email List top bar */}
      <div className="emailList_settings">
        <div className="emailList_settings_left">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settings_right">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="#d93025" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="#188038" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          />
        ))}
      </div>

      <div className="compose_mobile_button">
        <Button
          startIcon={
            <img
              src="http://www.gstatic.com/images/icons/material/colored_icons/1x/create_32dp.png"
              className="sidebar_compose_icon"
              alt="compose button icon"
            />
          }
          className="sidebar_compose"
          onClick={handleCompose}
        >
          Compose
        </Button>
      </div>
    </div>
  );
};

export default MailList;
