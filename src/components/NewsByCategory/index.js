import React,{useEffect} from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { paddingGenerator,marginGenerator } from "../../theme/utils";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
root:{
    ...paddingGenerator(["pl-50","pr-50"])
},
card:{
    boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2), 3px 3px 6px rgba(0, 0, 0, 0.19)", 
    ...marginGenerator(["mt-10","ml-10","mr-10","mb-10"])
},
image:{
    height:"150px",
    width:"100%",
    objectFit:"cover",
},
title:{
...paddingGenerator(["pt-5","pr-10","pl-10","pb-5"])
}
}));

const NewsByCategory = ({category}) => {
  const classes = useStyles();
  const [data,setData] = React.useState([]);

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(data => setData(data.articles))
  },[category])
  
  return ( 
        <div className={classes.root}>
        <Typography variant="h1" style={{textTransform:"capitalize"}}>{category}</Typography>
        <Grid container>
            {data.map((data,index) =>(
            <Grid item sm={6} xs={12} key={index}>
            <div className={classes.card}>
                <img src={data.urlToImage} className={classes.image} alt=""/>
                <Typography variant="h5" className={classes.title}>{data.title}</Typography>
                <Typography variant="subtitle2" className={classes.title}>{data.description}</Typography>
            </div>
        </Grid>
            ))}

        </Grid>
        </div>
  );
};

export default NewsByCategory;
