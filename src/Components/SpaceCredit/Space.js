import React from 'react';
import "../SpaceCredit/Space.css";
import Logo  from "../../Assests/logo1.svg";
import Space1 from '../../Assests/space1.png';
import Space2 from '../../Assests/space2.png';
const Space = () => {
    return (
        <div className='space-main-div'>
           <div className='space-div'>
               <div className='space-inner'>
                   <h1 className='space-hddr' >SPACE CREDIT SWAP</h1>
                   <span><img id='space-img' src={Logo}/></span>
               </div>
               <div className='spce-p'>
                   <p>Imperial Swap is undergoing security tests, audits and final updates to prepare for a safe launch!</p>
               </div>
               <div className='img-space-div'>
                 <img id='space-id' src={Space1}/>
                 <img id='space-id' src={Space2}/>
               </div>
               </div> 
        </div>
    )
}

export default Space;
