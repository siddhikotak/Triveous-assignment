import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  navbar:{
  marginLeft:"10px"
  },
  search:{
    display:"flex",
    alignItems:"center",
  },
  searchbar:{
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    width:"400px",
    height:"40px",
    backgroundColor:"#ffffff",
    borderRadius:"4px"
  },
  input:{
    fontWeight: "bold", lineHeight: 1.5, letterSpacing: "normal", color: "#b3b3b3",width:"330px",border:"none",
    "&:focus":{
      outline:"none",
      color:"#333333"
    }
  }
}));


const Navbar = () => {
  const classes = useStyles();
  const [input,setInput] = React.useState("");

  const handleChange = (e) =>{
    setInput(e.target.value)

  } 
  return (
    <AppBar>
    <Toolbar>
      <Grid container>
        <Grid item xs={6}>
        <Typography variant="h2">Triveous News</Typography>
        <Typography variant="subtitle1">Get The Latest News</Typography>
        </Grid>
        <Grid container item justify="flex-end" xs={6} className={classes.search}>
        <div className={classes.searchbar}>
        <SearchIcon style={{width:"50px",color:"#333333"}} />
        <input className={classes.input} type="text" placeholder="Search" onChange={handleChange}/>
        </div>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
