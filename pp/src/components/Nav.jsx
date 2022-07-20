import index from "../resources";
import { Tabs, Tab, AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import "../styles/Nav.scss";
import { useHistory } from "react-router-dom";

export default function Nav() {
  const history = useHistory();

  const navigate = (route) => {
    console.log("navigation", route);
    history.push(route);
  };

  const createNavigationTabs = index.navigationTabs.map((tab, index) => (
    <Tab
      key={index}
      label={tab}
      onClick={() => navigate(tab)}
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
    >
      <Toolbar className="nav_toolbar">{createNavigationTabs}</Toolbar>
    </AppBar>
  );
}
