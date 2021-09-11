import React from 'react';
import "../Wallet/Wallet.css";
import Logo from '../../Assests/logo1.svg';
import Mobile from "../../Assests/mobile.png";
const Wallet = () => {
    return (
        <div className='wallet'>
            <div className='wallet-div'>
            <h1>VADR WALLET</h1>
            <img id='wallet-img' src={Logo}/>
            </div>
            <p className='wallet-paragraph'>Vader Wallet – Win a Trip to Space – Purchase Imperial Credits and/or refer users to the Vadr Wallet<br/>
<br/>
⦿SPACE TICKET – View your Leaderboard and send Referrals to win the Contest<br/>
⦿Buy Pre-Launched tokens. New tokens all the time! Get the best deals on Defi Coins<br/>
⦿Peer to peer transfers, send it to your friends<br/>
⦿Import your other wallets to Vader<br/>
⦿If you buy ICT coins you may win a trip to space<br/>
<br/>
Get other coins/tokens that you cant buy on exchanges<br/>
<br/>
Coins listed on Vadr Wallet.  Imperial Credits, Vader Coin, KKash, RedWave and BlueTornado.  Import, buy and store your tokens on the Vadr Wallet<br/>
<br/>
Get referral points for telling your friends.  convert points to coins and enter the Space race contest.  Download the Vadr App today to get started</p>
       <div className='w-img'>
           <img id="wallet-mobile" src={Mobile}/>
       </div>
        </div>
    )
}

export default Wallet;
