import { useState } from "react";

function Location(){
    let [obj,setloc]= useState({'latitude':10.40000,
    'longitude':40.40000,
});

    setInterval(() => {
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position){
                setloc({'latitude':position.coords.latitude,
                    'longitude':position.coords.longitude,
            })
    }
    }, 10000);
    return (obj);
}
export default Location;