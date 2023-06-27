import React, { useState,useEffect } from 'react'
import card from "./card.png"
import "./Home.css"
import { AccumulationChartComponent, AccumulationDataLabel, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, PieSeries,AccumulationLegend,AccumulationTooltip} from '@syncfusion/ej2-react-charts';
import {  NavLink, Navigate } from "react-router-dom";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import { useNavigate } from "react-router-dom";
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import { Button, Typography } from '@mui/material';
import axios from "axios"
import PaymentsIcon from '@mui/icons-material/Payments';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import CalculateIcon from '@mui/icons-material/Calculate';
import { styled, alpha } from '@mui/material/styles';
import CallMadeIcon from '@mui/icons-material/CallMade';
import Piedata from './Piedata';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ButtonGroup from '@mui/material/ButtonGroup';
import CallReceivedIcon from '@mui/icons-material/CallReceived';


const Payments = (props) => {

const [authenticated, setauthenticated] = useState(null);
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
const [ismonth,setIsmonth] = useState(true)
const [ismonths,setIsmonths] = useState(false)
const [isyear,setIsyear] = useState(false)
const [bar,setBar] = useState(true)

const Closebar = ()=>{
  if(bar === false){
    setBar(true)
  }
  else{
    setBar(false)
  }
}

const month = (e)=>{
    if( ismonth === false){
        setIsmonth(true)
        setIsmonths(false)
        setIsyear(false)
    }
}


const months = (e)=>{
    if( ismonths === false){
        setIsmonths(true)
        setIsmonth(false)
        setIsyear(false)
    }
}

const year = (e)=>{
    if( isyear === false){
        setIsyear(true)
        setIsmonths(false)
        setIsmonth(false)
    }
}

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
    <Box sx={{ display:"flex",mb:"2%" }}>
       
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

       



     
    <Box sx={{ width: bar ? {xs:"60%",sm:"60%",md:"80%"} : "100%" ,height:"90vh",backgroundColor:"white",ml:"2%",mt:"2%",mb:"0",mr:"2%",borderRadius:"30px",fontWeight:"bold"}}>

       
    <Typography sx={{ fontFamily:"calibri",fontSize:"28px",fontWeight:"bold",display:"flex",justifyContent:"flex-start",alignItems:"center" }}><ChevronLeftIcon/>Payment
    </Typography>


        <Box sx={{ mt:"2%",display:{sm:"block",md:"flex"} }}>
           <Box sx={{ display:"block",width:"100%" }}>
            <Box sx={{ display:"flex",justifyContent:"space-between"}}>
            <Button id='button2' sx={{ display:"flex",mr:"2%"} }> 
                <NavLink style={{ textDecoration:"none",color:"black",fontFamily:"Roboto",fontSize:"20px",display:"flex" }} onClick={Closebar}><MenuIcon sx={{ color:"black",mr:"5%",mt:"5%" }}/> Open</NavLink>
           </Button>
                <Typography sx={{ display:{xs:"none",sm:"none",md:"block" },fontSize:"20px",fontWeight:"bold",fontFamily:"Roboto" }}>Transactions</Typography>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                <Button sx={{ backgroundColor:"#8EAC50",color:"black" }} onClick={month}>Month</Button>
                <Button sx={{ backgroundColor:"#8EAC50",color:"black" }} onClick={months}>6 Months</Button>
                <Button sx={{ backgroundColor:"#8EAC50",color:"black" }} onClick={year}>Year</Button>
              </ButtonGroup>
            </Box>

            <Box sx={{ display:"flex", justifyContent:"space-around",mt:"2%",mb:"1%" }}>
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold" }}>Type</Typography>
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold" }}>Category</Typography>
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold" }}>Date</Typography>
                <Typography sx={{ fontFamily:"Roboto",fontWeight:"bold" }}>Amount</Typography>
              </Box>


            { ismonth ?
            <Box sx={{ height:"250px",width:"100%",border:"1px solid white",overflow:"auto"}}>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallMadeIcon sx={{ color:"green" }}/>Income</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>


              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

            </Box>:""}

            { ismonths ?
            <Box sx={{ height:"250px",width:"100%",border:"1px solid white",overflow:"auto"}}>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

            </Box>:""}
              

            { isyear ?
            <Box sx={{ height:"250px",width:"100%",border:"1px solid white",overflow:"auto"}}>
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallMadeIcon sx={{ color:"green" }}/>Income</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              

              
              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>

              <Box sx={{ display:"flex", justifyContent:"space-around" }}>
                <Typography sx={{ display:"flex",justifyContent:"center" }}><CallReceivedIcon sx={{ color:"red" }}/>Tax</Typography>
                <Typography>Salary</Typography>
                <Typography>15 March 2023</Typography>
                <Typography>$2000</Typography>
              </Box>
              

            </Box>:""}


            <Typography sx={{ fontFamily:"Calibri",fontWeight:"bold",fontSize:"25px",mt:"5%",display:"flex",justifyContent:"flex-start",mb:"3%" }}>Top Category</Typography>
            <Box sx={{ display:"flex",width:"100%",mb:"2%" }}>
                <Card sx={{ width:"32%",mr:"2%" }}>
                <Typography>
                    Total Spend in week
                </Typography>
                <Typography sx={{ fontFamily:"Roboto",fontSize:"35px",fontWeight:"bold" }}>
                    $531
                </Typography>
                </Card>

                <Card sx={{ width:"32%",mr:"2%" }}>
                <Typography >
                    Total Spend in week
                </Typography>
                <Typography sx={{ fontFamily:"Roboto",fontSize:"35px",fontWeight:"bold" }}>
                    $531
                </Typography>
                </Card>

                <Card sx={{ width:"32%" }}><Typography >
                    Total Spend in week
                </Typography>
                <Typography sx={{ fontFamily:"Roboto",fontSize:"35px",fontWeight:"bold" }}>
                    $531
                </Typography>
                </Card>
            </Box>
        </Box>
            <Box sx={{ width:{sm:"100%",md:"43%"} }}>
                <img src={card} alt='visa card' style={{ width:"90%",borderRadius:"20px",ml:"2%" }}></img>

            <Box sx={{ width:"100%",ml:"2%",height:{ sm:"300px",md:"250px"},color:"black"}}>
            <AccumulationChartComponent id='charts' title='Expense Chart' legendSettings={{position:"Bottom"}} tooltip={{enable:true}}>
                <Inject services={[PieSeries,AccumulationDataLabel,AccumulationLegend,AccumulationTooltip]} />
                <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective dataSource={Piedata} xName='x' yName='y' type='Pie' dataLabel={{ visible:true,name:"text",position:"Outside"}} innerRadius='50%' />
                </AccumulationSeriesCollectionDirective>
  </AccumulationChartComponent>
                </Box>
            </Box>
        </Box>
        
   </Box>

</Box> 
  )
}};

export default Payments