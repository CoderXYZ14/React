import {useState} from "react";

export default function Counter(){
    let [count,setState]= useState(0);
    function incCount(){
        // setState(count+1);//new value of count in setState fn
        //Callbacks now work twice but if write setState(count+1); this two times then work once only due to async nature
        setState((counter)=>{return counter+1;});
        setState((counter)=>{return counter+1;});
    }
    return(<div>
        <h3>Count={count}</h3>
        <button onClick={incCount}>Increase Count</button>
    </div>)

}