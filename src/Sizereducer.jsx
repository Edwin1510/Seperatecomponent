 import { useState } from 'react'
import './App.css'
import Endcomponent from './Endcomponent'
import FirstComp from './Maincomponent'
import Siximage from './Rowuseimage'
import Imagecircle from './Imagecircle'

const Sizereducer=()=>{

    const [view,setview]=useState("laptop")



    return(
        <>

        <div className="mainstyle">
            <button className="stylebutton" onClick={()=>setview("laptop")}>Laptop</button>
            <button className="stylebutton" onClick={()=>setview("tablet")}>Tablet</button>
            <button className="stylebutton" onClick={()=>setview("mobile")}>Mobile</button>
        </div>
       <div className={`container-fluid ${view}`}>
          <FirstComp/>
          <Siximage/>
          <Imagecircle/>
          <Endcomponent/>
       </div>
        </>
    )
}

export default Sizereducer