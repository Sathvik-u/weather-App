import { useState } from "react";

function LocationDispaly(props){
    return (<div className="container card">
        <div className="card-header">
            <h5>{props.location.location.name}</h5>
        </div>
    </div>)
}
export default LocationDispaly;