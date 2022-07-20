import index from "../resources";
import { Tabs, Tab, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import "../styles/Nav.scss";
import { useNavigate } from "react-router-dom";
// import {useNavigate} from "react-router"
const Nav = () => {
  const navigate = useNavigate();
  console.log("TEST");
  const navigation = (route) => {
    if (route == "home") route = "";
    console.log("navigate to..", route);
    navigate(`/${route}`);
  };
  const linkResume = (url) => {
    window.open(url)
  }

  const createNavigationTabs = index.navigationTabs.map((tab, ind) => (
    <Tab
      key={ind}
      label={tab}
      // onClick={() => navigation(tab)}
      onClick={() => {
        tab === "resume" ? linkResume(index.info[tab]) : navigation(tab)
      }}
      className="nav_tab"
    />
  ));

  return (
    <AppBar
      sx={
        {
          // backgroundColor: {
          //   lg: "blue", // 1200
          //   sm: "black", // 601~1199
          // },
        }
      }
      position="static"
    >
      <Toolbar className="nav_toolbar">{createNavigationTabs}</Toolbar>
    </AppBar>
  );
};

export default Nav;
