import React from "react";
import Header from "./Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import SendMail from "./components/sendMail";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <SendMail />
        <div className="app_body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/emailList">
              <EmailList />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
