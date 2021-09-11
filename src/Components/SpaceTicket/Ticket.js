import React from 'react';
import '../SpaceTicket/Ticket.css';
import Logo from "../../Assests/logo1.svg";
import Plane from '../../Assests/plane.png';
const Ticket = () => {
    return (
        <div className='ticket-div'>
            <div id='tikt'>
                <img id="ticket-img" src={Logo}/>
                <h1>SPACE TICKET</h1>
                <img  id="plane-id" src={Plane}/>
            </div>
            <p className='ticket-para'>Our SPACE TICKET incubator, thats right.. we said space incubator. Why should only rich get to goto space.. our plan is to create a comminity of like minded peple that want to goto space.. but don't have the means. Phase 2 of the Imperical Credits and Vadr Wallet are to create a system of a leaderboard and Referral system build on ICT ownership and Referrals. We will allocate a certain number of ICT tokens for "space slots". When those number of tokens reach a THE Value, they will be locked in USD. Then the top 5 leaderboard slots will be allocet to those particluare holders. You must hold ICT tokens in the VADR wallet to be eligabl The leaderboards can be seen in the Vadr Wallet and.. We are using 2 leaderboards for the allocation of space tickets.. 1 is holders.. the top 5 holders will recieve the space ticket allocations. The 6ths spot is allocated to the Vadr Wallet user with the most referrals.. it doesn't cost you anything to send referrals!! So no excuses, hustle up!</p>
        </div>
    )
}

export default Ticket;
