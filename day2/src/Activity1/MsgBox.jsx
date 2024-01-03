
//show hello message to user with diff color
function MsgBox({userName,textColor}){
    let styles={color:textColor}
    return(

            <h1 style={styles}>Hello {userName}</h1>

    );
}
export default MsgBox;