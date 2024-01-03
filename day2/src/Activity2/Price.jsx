export default function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine:"line-through"
    };
    let newStyles={
        fontWeight:"700"
    };
    let styles={
        backgroundColor:"#e0c367",
        height:"35px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    };
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;{/*for spaces*/}
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}