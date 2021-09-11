import React from 'react';
import '../Community/Community.css';
import ImgBg from "../../Assests/bg.png";
const Community = () => {
    return (
        <div className="com-div" style={{background:`url(${ImgBg})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
            <h1>COMMUNITY</h1>
            <p style={{marginBottom:"20px"}}>If you’d like to donate to the Devs, send ETH, ICT, VADR or DROID here. Thank you for your support!</p>
            <p>Our community keeps growing everyday. Please join our social platforms to get updates using the links below.<br/>
<br/>
There are 150k+ people in our different groups!</p>
<div className='comm-container' >
    <button id="btn-comm" >VADR TELEGRAM</button>
    <button  id="btn-comm" >TWITTER</button>
    <button  id="btn-comm" >DRIOD TELEGRAM</button>
    <button  id="btn-comm" >REDDIT</button>
    <button  id="btn-comm" >DISCORD</button>
</div>

        </div>
    )
}

export default Community;
