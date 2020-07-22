import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: "70px",
    position: "relative",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default Layout;
