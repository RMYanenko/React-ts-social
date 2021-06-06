import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.scss";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className="main">
          <Route path="/profile" component={Profile} />
          <Route exact path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
        {/* <Dialogs /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
