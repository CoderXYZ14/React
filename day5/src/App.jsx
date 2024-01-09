
import './App.css'
// import Lottery from "./Lottery.jsx";
// import TicketNum from "./LotteryAdvanced/TicketNum.jsx";
// import Ticket from "./LotteryAdvanced/Ticket.jsx";
import Lottery from "./LotteryAdvanced/Lottery.jsx";

function App() {

  return (
    // <Lottery/>
    //   <TicketNum num={5}/>
    //   <Ticket ticket={[0,1,2,3]}/>
      <Lottery n={3} winningSum={15}/>
  )
}

export default App
