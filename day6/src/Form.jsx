import {useState} from "react";

export default function Form() {
    // let [name, setName] = useState("");
    // let [username, setUsername] = useState("");
    let [formData,setForm]=useState({
        fullname:"",
        username:""
    });
    let handleInputChange=(event)=>{
        let fieldName=event.target.name;//so create a name prop in input tag
        let newValue=event.target.value;
        console.log(fieldName);
        console.log(newValue);
        setForm((currData)=>{
            currData[fieldName]=newValue;
            return {...currData};
        });
    };
    function handleSubmit(event){
        event.preventDefault();
        setForm({fullname:"",
            username:""});
    }
    // let handleNameChange = (event) => {
    //     setName(event.target.value)
    //     console.log(event.target.value);
    // }
    // let handleUsername = (event) => {
    //     setName(event.target.value)
    //     console.log(event.target.value);
    // }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name </label>
            <input name="fullname" placeholder="Enter name " value={/*fullname*/formData.fullname} id="fullname" onChange={handleInputChange}/*onChange={handleNameChange}*//>
            <br/><br/><br/>
            <label htmlFor="username">Username </label>
            <input name="username" placeholder="Enter username " value={/*username*/formData.username} id="username" onChange={handleInputChange}/*onChange={handleUsername}*//>
            <br/><br/>
            <button>Submit</button>
        </form>
    )
}