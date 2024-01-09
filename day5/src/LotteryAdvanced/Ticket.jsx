import TicketNum from "./TicketNum.jsx";
import "./Ticket.css";
export default function Ticket({ticket}){
    return(


            <div className="Ticket">
                <h2>Ticket</h2>
                {/*<TicketNum num={ticket[0]}/>*/}
                {ticket.map((num, idx) => (
                    <TicketNum num={num} key={idx}/>
                ))}
            </div>

    )
}