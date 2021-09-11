import React from 'react'
import "../Navbar/Navbar.css";
import Logo from "../../Assests/logo1.svg";
const Navbar = () => {
    let open = false;
   
    const change = () => {
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("overlay");
      if (!open) {
        hamburger.classList.add("open");
        menu.classList.add("menu");
      } else {
        hamburger.classList.remove("open");
        menu.classList.remove("menu");
      }
      open = !open;
    };
  
   
    
    return (
        <div className='nav-main-div'>
            <div className='nav-logo-div'>
                <div className='nav-logo'>
                    <a href="#"><img id='logo-img' src={Logo}/></a>
                </div>
                <div className='nav-header'>
                    <h1>IMPERIAL CREDITS</h1>
                </div>
            </div>
            <div  id="hamburger" onClick={change} >
                <div></div>
            </div>
            <div className='nav-link-div'>
                <ul id="overlay"  className='nav-ul'>
                 <li id="link-li" ><a id='link-a' href="#">Ecosystem</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Buy</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Imperial Swap</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Vadr</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Space Ticket</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Blog</a></li>
                 <li id="link-li" ><a id='link-a' href="#">Community</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
