import { useEffect, useState } from "react";

function IpAddress(){
    useEffect(()=>{
        fetch("https://api.ipify.org/?format=json")
        .then(res=>res.json())
        .then(data=>console.log(data.ip))
        .catch(err=>{console.log("error is",err)})
},[])      


    return(<div>
        <h2>Ip Fetching</h2>
        </div>)
}

export default IpAddress;