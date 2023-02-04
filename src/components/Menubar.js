import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "../assets/css/SearchResult.css";

class Menubar extends Component {
  render() {
    return (
        <div className="home__headerRight">
        <Link to="/gmail">Settings</Link>
        <Link to="/images">Images</Link>
        <MenuIcon />
      </div>
    );
  }
}

export default Menubar;