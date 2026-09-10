import TicketNum from "./TicketNum.jsx"
import "./Ticket.css";
export default function Ticket({ticket}){
    return (
        <div className="ticket"> 
            {/* <TicketNum num={ticket[0]}/>
            <TicketNum num={ticket[1]}/>
            <TicketNum num={ticket[2]}/>     */}
             <p>Ticket</p>
            {ticket.map((num,index)=><TicketNum key={index} num={num} />)}
        </div>
    )
}