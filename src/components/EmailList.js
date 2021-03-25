import React from "react";
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

import "./styles/EmailList.css";

const MailList = () => {
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
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a testh cgdvcdtcsfrsd"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />

        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a testh cgdvcdtcsfrsd"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a testh cgdvcdtcsfrsd"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a testh cgdvcdtcsfrsd"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a testh cgdvcdtcsfrsd"
          time="10:00 pm"
        />
        <EmailRow
          title="twich"
          subject="Hey Just some dummy data"
          description="This is a test"
          time="10:00 pm"
        />
      </div>
    </div>
  );
};

export default MailList;
