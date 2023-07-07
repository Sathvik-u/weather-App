import { useEffect, useState } from "react";
import Location from './Location'
function Apis(props){
    let [data,setData]=useState({'current':{},
                                    'location':{'name':"Loading..."},})
                                    
    let send=data;
    
    let value=Location();
    let q=value.latitude+","+value.longitude;
    let url="https://api.weatherapi.com/v1/current.json?"+"key=3e759917de8c42cb921171948230303"+"&q="+q+"&aqi=yes";
    useEffect(()=>{fetch(url)
    .then(res=>res.json())
    .then(jsndata=>setData(jsndata))
    .catch(err=>{console.log("Error is",err)});
},[]);
    console.log(url);
    props.transfer(data);
    return (<div>
        <h2>connected</h2>
   </div>)
};

export default Apis;