import {useState} from "react";

export default function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);
    function toggleLike(){
        let newVal=!isLiked;
        setIsLiked(!isLiked);
    }
    let styles={color:"red"};
    return(<div>
        <p style={styles} onClick={toggleLike}>
            {isLiked ? (<i className="fa-regular fa-heart"></i>): (<i className="fa-solid fa-heart"></i>)}
        </p>
    </div>)
}