import {useState,useEffect} from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    let increment=()=>{
        setCount(count+1);
    };
    useEffect(function printSOmething(){
        console.log("Hello World");
    })
    return (
        <div>
            <h3>Count is {count}
            </h3>
            <button onClick={increment}>+1</button>
        </div>
)
}