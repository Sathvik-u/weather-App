import { useState } from 'react';
import './App.css';
import Apis from './components/FunctionalComponents/Apis'
import AqiDisplay from './components/DisplayComponents/AqiDisplay';
import IpAddress from './components/FunctionalComponents/IpAddress'
import Location from './components/FunctionalComponents/Location'
import LocationDispaly from './components/DisplayComponents/LocationDisplay';


function App() {
  let [data,setdata]=useState({'current':{},
                                  'location':{'name':"Loading..."},});
 
  let transfer=(use)=>{setdata(use)}
  return (
    <div className="container-fluid">
      <h2 className='text-center '>Weather</h2>
      <Apis transfer={transfer} />
      <LocationDispaly location={data}/>

    </div>
  );
}

export default App;
