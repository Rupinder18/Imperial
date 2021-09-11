import React from 'react';
import "../Home/Home.css";
import Warrior from '../../Assests/warrrior.png';
import BgImg from "../../Assests/bg.png";
import Logo from "../../Assests/logo1.svg";
import Unicorn from "../../Assests/unicorn.png";
import Rocket from "../../Assests/howto.png";
import Space from '../SpaceCredit/Space';
import Ticket from '../SpaceTicket/Ticket';
import Wallet from '../Wallet/Wallet';
import NewBlog from '../Blog/NewBlog';
const Home = () => {
    return (
        
       <div className='main-div' >
            <div className='home-main-div'  style={{background:`url(${BgImg})`,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundAttachment:"fixed"}}>
        <div className='home-hddr-div'>
            <h1>Decentralized Meme Tokens that grew <br/> into a vibrant ecosystem <br/>
ImperialSwap. Fun tokens. Space fun and Fan of Space travel. Growing Community <br/> & more lift off on the event horizon!</h1>
<button className='home-btn'><a href="#">READ OUR  DROIDPAPER!</a></button>
        </div>
        <div className='home-img-div'>
            <img id='img-div' src={Warrior}/>
            </div>            
        </div>
      
      <div style={{margin:"100px 0px"}}>
      <div className="inner-div">
            <div className='innner-div-one'>
                <img src={Logo}/> 
                <label id='label1'>ECOSYSTEM</label>
            </div>
            <div className='inner-div-two'>
                <p><span id='para-span'>⦿ ICT</span> (IMPERIAL CREDIT TOKEN) is an experiment in decentralized spontaneous STAR WARS coin. ICT token is our first token and allows user to have the the only form of STAR WARS currency. ICT allows you to hold in your wallets an actual token that has nothing to do with STAR WARS .  This BEP-20 ONLY token can remain well under a penny and still outpace Dogecoin in a small amount of time (relatively speaking). Popular worldwide, and ready for ale Vader token ($ICT) is the first cryptocurrency token to be listed and incentivized on ImperialSwap, our decentralized exchange.</p>
                 <p id='para-two'>We locked 50% of the total supply to VADR (Wallet)  and threw away the keys!</p>
                 <div className="uni-main" >
                     <div className="unicorn" >
                         <img id="uni-img" src={Logo} />
                         <p>Frist burn to VB</p>
                     </div>
                     <div className="unicorn" >
                         <img id="uni-img"  src={Unicorn}/>
                         <p>Unicorn Status</p>
                     </div> <div className="unicorn" >
                         <img id="uni-img"   src={Logo}/>
                         <p>Second burn to VB</p>
                     </div>
                 </div>
             <div id="paragraph-div">
             <p><span id='color-span-div'>⦿ ICT – Imperial Credits</span>  was originally set to be a rebase token pegged to the price of ??. Now, it has been unleashed and will not rebase. With a total circulation of ONLY 1 for each person on earth, it has the opposite appeal of the high number / high volume craze! (which has a much larger supply).</p>
                 <p><span id='color-span-div' >⦿ VADR</span> coin  is our next token! <span id='color-span-div' >COMING SOON</span>, Vader Coin, takes the power of Defi to the next level.  This coin is currently accessable via a partnership wiht the folks at Vadr Wallet. You can aquire directly from them in the app for a discount!  Details on how to acquire this token, OUTSIDE of the Wallet and tokenomics and incentives will be announced with the reveal of ImperialSwap. VADR is tied to the VADR WALLET, and enables a 1% pool fee back to holders and a 1% pool addition back to liquidity pools</p>
                 <p><span id='color-span-div' >⦿ VADR WALLET</span> Is the Wallet associated with the VADR and IMPERICAL CREDIT tokens <span id='color-span-div' >WALLET CURRENTLY IN BETA</span> We are committed to this project and process, and are fully invested in the build of the walletCheck your status in the Leaderboard for a Ticket to Space. Buy coins, Buy pre-sale coins.</p>
                 <p><span id='color-span-div' >⦿ SPACE TICKET</span> What is the Space Ticket? <span id='color-span-div' >We ant to create value so that Dreams can come tru and willing and able people that want to goto space can do so.</span></p>
           
             </div>
            </div>
        </div>
      </div>
        {/* how to buy div */}
      <div className="inner-div">
      <div className='innner-div-one'>
                <img src={Logo}/> 
                <label id='label2'>HOW TO BUY</label>
            </div>
           <div className='how-to-div'>
           <div className='par-divi'>
               <p className='p1'>The only place to buy or sell <span id='color-span-div' >VADR</span> or IMPERIAL CREDITS safely is on PS and/or the Vadr Wallet. There are some centralized exchanges that have listed VADR, but CEXs have a history of locking funds. If you can, it is safer to trade on a decentralized exchange like PS or to buy direct in the Vadr Wallet</p>
               <p className='p1' ><span id='color-span-div' >VADR</span> is not available yet , but will be able to acquire soon.</p>
               <p className='p1' >See the Live Chart analytics:<br/>
               <span id='color-span-div' >VADR</span> / <span id='color-span-div' >ICT</span></p>
               <span id="span-button"><button id='p-btn'><a href="#">BUY VADR</a></button><button id='p-btn' ><a href="#">BUY DRIOD</a></button></span>
           </div>
           <div className="par-img-divi">
               <img id='rocket-img' src={Rocket}/>
           </div>
           
           </div>
           
      </div>
      <div>
      
               <Space/>
           
      </div>
      <div>
          <Ticket/>
      </div>
      <div style={
          {marginTop:"100px"}
      }>
          <Wallet/>
      </div>
      <div>
          <NewBlog/>
      </div>
       </div>
       
    )
}

export default Home;
