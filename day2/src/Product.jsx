//or function Product(props){
// function Product({title,features}){
//
//     return <h1>This is a {title} and array is {features}</h1>;
//     //and here do {props.title} as props object as title key in it
// }

//for rendering array in form of a list in li tag
// function Product({ title, features }) {
//     const list = features.map((feature) => <li>{feature}</li>);
//     return (<>
//         <h1>This is a {title} and the array is {list}</h1>
//     </>);
// }

import "./Product.css";
function Product({title,price,features}){
    let styles={backgroundColor:price>30000?"blue":""};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
            {price>30000 && <p>Discount of 5%</p>}
        </div>
    );
}
export default Product;

