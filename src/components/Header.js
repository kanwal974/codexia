import React, { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import "./Header.css";
// import "./assets";

function Header() {
  return (
    <>
      <div className="row">
        <div className="container2">
          <Typography variant="subtitle1"> Media Management</Typography>
          <Typography variant="subtitle1"> Draft campaign</Typography>
        </div>
        <div className="container1">
          <Typography mb={3} ml={5} variant="subtitle1">
            {" "}
            Kanwal Mukhtar
          </Typography>
          <a className="left" href="javascript:void(0)">
            Change Profile
          </a>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </div>
    </>
  );
}

export default Header;
