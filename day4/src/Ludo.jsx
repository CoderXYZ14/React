import {useState} from "react";
export default function Ludo(){
   //istead of making useState of each color we make a object inside useState
    let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let updateBlue=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1};
        });
    }
    let updateyellow=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,yellow:prevMoves.yellow+1};
        });
    }
    let updategreen=()=>{
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1};
        });
    }
    let updatered=()=>
    {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1};
        });
    }
    return(
        <div>
            <h1>Game Begins</h1>
            <div className="board">
                <p>Blue moves={moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Yellow moves={moves.yellow}</p>
                <button onClick={updateyellow} style={{backgroundColor:"yellow"}}>+1</button>
                <p>Green moves={moves.green}</p>
                <button onClick={updategreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves={moves.red}</p>
                <button onClick={updatered} style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}