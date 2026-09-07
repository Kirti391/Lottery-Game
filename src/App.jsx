import Lottery from './Lottery'
import './App.css'
import TicketNum from './TicketNum'
import Ticket from './Ticket'
function App() {
  

  return (
    <>
      <Lottery />
      {/* <TicketNum num="6"/>
      <TicketNum num="4"/>
      <TicketNum num="2"/> */}
      <Ticket ticket={[6,4,2]}/>
    </>
  )
}

export default App
