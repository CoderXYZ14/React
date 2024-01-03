import Product from "./Product.jsx";

export default function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return (
        <div style={styles}>

            <Product title="Logitech MX Master" idx={0}/>
            <Product title="Logitech MX Master" idx={1}/>
            <Product title="Logitech MX Master" idx={2}/>
            <Product title="Logitech MX Master" idx={3}/>
        </div>
    );
}