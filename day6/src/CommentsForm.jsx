import {useState} from "react";

export default function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remarks:"",
        rating:5
    });
    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return {...currData,[event.target.name]:event.target.value}
        })
    };
    let handleSubmit=(event)=>{
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating:5
        });
    }
    return(
        <div onSubmit={handleSubmit}>
            <h4>Give a comment!</h4>
            <form>
                <label htmlFor="username">Username: </label>
                <input name="username" id="username"placeholder="username" type="text" value={formData.username} onChange={handleInputChange}/>
                <br/><br/>
                <label htmlFor="remarks">Remarks: </label>
                <textarea name="remarks" id="remarks"placeholder="Add few remarks" value={formData.remarks}
                          onChange={handleInputChange}></textarea>
                <br/><br/>
                <label htmlFor="rating">Rating: </label>
                <input name="rating"id="rating"placeholder="rating" type="number" min={1} max={5} value={formData.rating}
                       onChange={handleInputChange}/>
                <br/><br/>
                <button>Submit</button>
            </form>

        </div>

    )
}