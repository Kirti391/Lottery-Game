import Lottery from './Lottery'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
import { sum } from './helper'
function App() {
   let winCondition=(ticket)=>{
    // return sum(ticket)===15;
    // return ticket.every((num)=>num===ticket[0]);
    return ticket[0]===0;
   }

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
      {/* <TicketNum num="6"/>
      <TicketNum num="4"/>
      <TicketNum num="2"/> */}
      {/* <Ticket ticket={[6,4,2]}/>
      <Ticket ticket={[5,3,4,2]}/> */}
    </>
  )
}

export default App
