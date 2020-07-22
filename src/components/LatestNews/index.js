import React,{useEffect} from 'react';
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { paddingGenerator,marginGenerator } from "../../theme/utils";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    ...marginGenerator(["mt-30"])
  },
  card:{
      display:"flex",
      width:"100%",
      height:"100px",
      boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.2), 3px 3px 6px rgba(0, 0, 0, 0.19)",  
      ...marginGenerator(["mt-10","mb-10"])
  },
  image:{
      width:"120px",
      height:"100px",
      objectFit:"cover"
  },
  link:{
    textDecoration:"none",
    "&:hover":{
       textDecoration:"underline"
    },
}
}));

export default function LatestNews() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const[header1,setHeader1] = React.useState([])
  const[header2,setHeader2] = React.useState([])
  const[header3,setHeader3] = React.useState([])

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/top-headlines?country=in&apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(header1 => setHeader1(header1.articles))
  },[header1])

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/top-headlines?country=us&apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(header2 => setHeader2(header2.articles))
  },[header2])

  useEffect(() =>{
    fetch(`
    https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=25c3c8444267479f83ccc747eb7865ef`)
    .then(res => res.json())
    .then(header3 => setHeader3(header3.articles))
  },[header3])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Latest" {...a11yProps(0)} />
          <Tab label="Top" {...a11yProps(1)} />
          <Tab label="Featured" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{height:"500px",overflowY:"auto"}}>
      {header2.map((data,index) => (
          <div className={classes.card} key={index}>
            <img className={classes.image} src={data.urlToImage} alt="" />
           <div style={{ ...paddingGenerator(["pt-5", "pb-10", "pl-10", "pr-10"])}}>
                <Link className={classes.link} to="">  <div style={{fontSize:"14px",color:"#333333",...paddingGenerator(["pb-10"])}} > {data.title} </div></Link>
                <Typography variant="subtitle2">{data.publishedAt}</Typography>
            </div>
          </div>))}
      </TabPanel>
      <TabPanel value={value} index={1} style={{height:"500px",overflowY:"auto"}}>
      {header1.map((data,index) => (
          <div className={classes.card} key={index}>
            <img className={classes.image} src={data.urlToImage} alt="" />
           <div style={{ ...paddingGenerator(["pt-5", "pb-10", "pl-10", "pr-10"])}}>
                <Link className={classes.link} to="">  <div style={{fontSize:"14px",color:"#333333",...paddingGenerator(["pb-10"])}} > {data.title} </div></Link>
                <Typography variant="subtitle2">{data.publishedAt}</Typography>
            </div>
          </div>))}
      </TabPanel>
      <TabPanel value={value} index={2} style={{height:"500px",overflowY:"auto"}}>
      {header3.map((data,index) => (
          <div className={classes.card} key={index}>
            <img className={classes.image} src={data.urlToImage} alt="" />
           <div style={{ ...paddingGenerator(["pt-5", "pb-10", "pl-10", "pr-10"])}}>
                <Link className={classes.link} to="">  <div style={{fontSize:"14px",color:"#333333",...paddingGenerator(["pb-10"])}} > {data.title} </div></Link>
                <Typography variant="subtitle2">{data.publishedAt}</Typography>
            </div>
          </div>))}
      </TabPanel>
    </div>
  );
}
