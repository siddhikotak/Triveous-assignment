import React,{useEffect} from "react";
import { Typography } from "@material-ui/core";
import Layout from "../../components/Layout";
import { makeStyles } from "@material-ui/core";
import TopNews from "../../components/TopNews";
import { paddingGenerator,marginGenerator } from "../../theme/utils";
import { Grid } from "@material-ui/core";
import LatestNews from "../../components/LatestNews";
import NewsByCategory from "../../components/NewsByCategory"

const useStyles = makeStyles((theme) => ({
catContainer:{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
...paddingGenerator(["pt-15","pb-15","pr-40","pl-40"]),
...marginGenerator(["mr-40","ml-40"])
},
category:{
  fontSize:"16px",
  fontWeight:"500",
  cursor:"pointer",
  color:"#333333",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  textTransform:"uppercase",
  ...marginGenerator(["mr-40","ml-40"])
}
}));

const HomePage = () => {
  const classes = useStyles();
  const [data,setData] = React.useState([]);
  const [category,setCategory] = React.useState("General");

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/sources?apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(data => setData(data.sources))
  },[])
  

  const cats =  [...new Set(data.map(q => q.category))]

  const handleChange = (name,i) => (e) => {
    setCategory(name)
  }

  return ( 
    <Layout>
      <div className={classes.catContainer}>
       {cats.map((cat,i) =>(
         <div key={i} onClick={handleChange(cat,i)}>
         <Typography className={classes.category}>{cat}</Typography>
         </div>
       ))}
      </div>
        <TopNews />
        <Grid container>
          <Grid item xs={12} sm={8}>
            <NewsByCategory category={category}/>
           </Grid> 
           <Grid item xs={12} sm={4}>
             <LatestNews />
            </Grid>  
        </Grid>
    </Layout >
  );
};

export default HomePage;
