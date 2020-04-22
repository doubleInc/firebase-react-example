import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const Userpanel = (props) => {
  return (
    <Box color="text.primary" m={1}>
      <Avatar alt="Remy Sharp" src={props.usrImage} />
      <Typography variant="subtitle1">{props.usrName}</Typography>

      <Button variant="contained" color="primary" href="#contained-buttons">
        Log out
      </Button>
    </Box>
  );
};

export default Userpanel;
