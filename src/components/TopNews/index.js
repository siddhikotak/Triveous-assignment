import React,{useEffect} from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import { paddingGenerator,marginGenerator } from "../../theme/utils";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#eeeeee",
    ...paddingGenerator(["pt-10","pb-10","pl-5","pr-5"])
  },
  image: {
    height: "150px",
    width: "100%",
  },
  card: {
    backgroundColor:"#fff",
    boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2), 3px 3px 6px rgba(0, 0, 0, 0.19)", 
    ...marginGenerator(["mt-10", "mb-10", "ml-20", "mr-20"]),
  },
  content:{
    flex:"2"
  },
  link:{
      textDecoration:"none",
      "&:hover":{
         textDecoration:"underline"
      },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex:"1",
    ...paddingGenerator(["pb-5"]),
  },
  button: {
    borderRadius: "3px",
  },
  loader:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"400px"
  }
}));

const TopNews = () => {
  const classes = useStyles();
  const[header,setHeader] = React.useState([])

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/top-headlines?country=in&apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(header => setHeader(header.articles))
  },[])

const options={
  margin:10,
  responsive:{
      0:{
        items:1
      },
      400:{
        items:1,
      },
      700:{
        items:1,
      },
      1000:{
        items:4,
      },
  },
  rewind:false,
  autoplay:true,
  autoplayTimeout:4000,
  lazyLoad:true,
  autoplayHoverPause:true,
  dots:false,
  loop:true
}

  return (
      <div className={classes.root}>
          <Typography variant="h4" style={{marginLeft:"20px"}}>Latest News</Typography>
      {(header.length !== 0 )? (
        <OwlCarousel className="owl-theme" {...options} >
        {header.map((data,index) => (
          <div className={classes.card} key={index}>
             <img className={classes.image} src={data.urlToImage} alt="" />
           <div style={{ ...paddingGenerator(["pt-5", "pb-10", "pl-10", "pr-10"])}}>
            <Link className={classes.link} to="">
           <Typography variant="h5">
                  {data.title}
           </Typography>
           </Link>
           <div style={{ display: "flex",...marginGenerator(["mt-10"]) }}>
              <div className={classes.content}> 
                <Typography variant="subtitle2">
                  {data.publishedAt}
                </Typography>
            </div>
              <div className={classes.buttonContainer}>
                <Button variant="contained" size="small"  color="secondary" className={classes.button}>
                Read More
                </Button>
               </div>
            </div>
            </div>
            </div>
            ))}
    </OwlCarousel>
      ):(<div className={classes.loader}><Typography variant="h1">Loading...</Typography></div>)}
      </div>
  );
};

export default TopNews;
