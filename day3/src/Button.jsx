function printHello(event){
    console.log("Hello World");
    console.log(event);
}
function printPara(){
    console.log("Hello Para Shahwaiz ")
}
function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printPara}>This is for event demo</p>
        </div>
    );
}
export default Button