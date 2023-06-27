import React, { useState,useEffect } from 'react'
import "./Home.css"
import {  NavLink, Navigate } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { useNavigate } from "react-router-dom";
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Button, Typography } from '@mui/material';
import axios from "axios"
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CalculateIcon from '@mui/icons-material/Calculate';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { BarSeries, Category, ChartComponent,DataLabel,Inject,Legend,LineSeries, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { taxData } from './taxData';
import CloseIcon from '@mui/icons-material/Close';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    '&:hover': {
      backgroundColor: "lightblue",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Dashboard = (props) => {

const [authenticated, setauthenticated] = useState(null);

const [bar,setBar] = useState(true)

const Closebar = ()=>{
  if(bar === false){
    setBar(true)
  }
  else{
    setBar(false)
  }
}

  useEffect(() => {
          const loggedInUser = localStorage.getItem("authenticated");
          setauthenticated(localStorage.getItem("authenticated"))
          console.log(loggedInUser)
        }, []);
      
const [name,setName] = useState([])
 axios.get('/login')
.then((response) => {
    setName(response.data)})
.catch((error) => console.log(error))

// console.log(taxData)


const navigate = useNavigate();
// console.log(typeof(localStorage.getItem("authenticated")))
if (localStorage.getItem("authenticated") === 'false') 
{
    console.log("hello")
    return <Navigate replace to="/Signin" />;
} 

else {
        
    
    const Logout = () => {
        setauthenticated(false)
        console.log("hi")
        localStorage.setItem("authenticated",false)
        navigate("/Signin");
                }
  
  return (
    <Box sx={{ display:"flex" }}>
         {bar ? <Box sx={{ width:{xs:"40%",sm:"40%",md:"20%"},height:"100vh",backgroundColor:{xs:"white",md:"#8EAC50"},ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold" }}>

            <Box sx={{ mb:"5%" }}>
                <img src="https://storage.googleapis.com/pai-images/8a9673c9582b4cdca3073b09392a7ac0.jpeg" alt='client' style={{ borderRadius:"100%",width:"35%",marginTop:"5%"}}></img>

                <Typography sx={{ color:{xs:"black",sm:"black",md:"white"},fontFamily:"Roboto",fontSize:"18px" }}>
                {name.username}   </Typography>

                <Typography sx={{ color:{xs:"black",sm:"black",md:"white"},fontFamily:"Roboto",fontSize:"13px" }}> Client </Typography>
            </Box>

            <Button id='button1' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",fontFamily:"Calibri",fontSize:"13px",ml:"15%",paddingRight:"30px",paddingLeft:"20px",mb:"10px" }}> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/dashboard"><GridViewRoundedIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Dashboard</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex"  }} to="/payment"><CalculateIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> TaxCalculator</NavLink>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/payment"> <PaymentsIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Payment</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/notification"> <NotificationsSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Notifications</NavLink>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"18px",mb:"10px"} }> 
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} to="/payment"> <QuestionMarkSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Support</NavLink>
           </Button>

           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"18px",mb:"10px"} }>
             <Box sx={{ display:"flex" }}>
                    <a href onClick={Logout} style={{ display:"flex" }}>
                    <LogoutSharpIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/>  Logout</a>
             </Box>
           </Button>


           <Button id='button2' sx={{ color:{xs:"black",sm:"black",md:"white"},display:"flex",ml:"15%",fontFamily:"Calibri",fontSize:"13px",paddingRight:"30px",paddingLeft:"20px",mb:"10px"} }> 
                
                <NavLink style={{ textDecoration:"none",color:{xs:"black",sm:"black",md:"white"},display:"flex" }} onClick={Closebar}><CloseIcon sx={{ color:{xs:"black",sm:"black",md:"white"},mr:"15%" }}/> Close</NavLink>
           </Button>
        </Box>
       :""}



     
  <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold", }}>

        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor:"aliceblue" ,color:"black",borderRadius:"10px",boxShadow:"none",mb:"2%" }}>
        <Toolbar>
        <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
              <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex',fontFamily:"calibri",fontSize:"25px",letterSpacing:"2px",fontWeight:"bold" } }}
          >
            Analytic Overview
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>



    <Box sx={{ display:{sm:"block",md:"flex"},width:"100%",height:"100vh" }}>

          <Box style={{ width:"100%"}}>
            <Box sx={{ display:"flex" }}>
                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#D0F5BE",borderTopRightRadius:""  }} variant="outlined">
                  <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px"}}>
                    15
                  </Typography>
                  <Typography sx={{ color:"green" }}>
                      Taxes Delay
                  </Typography>
                </Card>

                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#99DBF5" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px", }}>
                    10
                  </Typography>
                  <Typography sx={{ color:"blue" }}>
                      Taxes Done
                  </Typography>
                </Card>

                <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",backgroundColor:"#FFD0D0" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"35px" }}>
                    15
                </Typography>
                <Typography sx={{ color:"red" }}>
                    Total Taxes
                </Typography>
                </Card>

          </Box>

      <Box sx={{ height:"95%",mt:"2%",width:"100%" }}>
        <ChartComponent title='Taxes Analysis' primaryXAxis={{ valueType:"Category",title:"Month" }} primaryYAxis={{ title:"Taxes" }} tooltip={{ enable:true}}>
            <Inject  services={[BarSeries,Category,DataLabel]}></Inject>
            <SeriesCollectionDirective>
              <SeriesDirective type="Bar" dataSource={taxData} xName='month' yName='taxes' name='taxes' marker={{dataLabel:{visible:true},visible:true}}></SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
</Box>
    </Box>
   
   

    <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>

        <Card sx={{ width:"100%",ml:"2%",mt:"10px",borderRadius:"15px",backgroundColor:"#FFD0D0" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Pay tax urgently
                </Typography>
                <Typography sx={{ color:"red" }}>
                  8:00 to 8:30 pm
                </Typography>
        </Card>

        <Card sx={{ width:"100%",ml:"2%",mt:"4%",borderRadius:"15px",backgroundColor:"#FFD0D0", }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Pay tax urgently
                </Typography>
                <Typography sx={{ color:"red" }}>
                  8:00 to 8:30 pm
                </Typography>
        </Card>

        <Card sx={{ width:"100%",ml:"2%",borderRadius:"15px",mt:"4%",mb:"2%",backgroundColor:"#D0F5BE" }} variant="outlined">
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold",fontSize:"25px" }}>
                    Tax has been paid
                </Typography>
                <Typography sx={{ color:"green" }}>
                  8:00 pm Monday
                </Typography>
        </Card>

    </Box>
</Box>

</Box>
</Box>
   
  )
}};

export default Dashboard