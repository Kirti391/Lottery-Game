import TicketNum from "./TicketNum.jsx"

export default function Ticket({ticket}){
    return (
        <div className="ticket"> 
            {/* <TicketNum num={ticket[0]}/>
            <TicketNum num={ticket[1]}/>
            <TicketNum num={ticket[2]}/>     */}

            {ticket.map((num,index)=>{
                return <TicketNum key={index} num={num}/>
            })}
        </div>
    )
}