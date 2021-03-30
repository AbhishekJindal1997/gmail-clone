import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SendMail from "./components/sendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import Login from "./components/Login";
import { auth } from "./firebase";

import "./App.css";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          {sendMessageIsOpen && <SendMail />}

          <div className="app_body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/compose">
                <SendMail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
