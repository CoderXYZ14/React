import Product from "./Product.jsx";

export default function ProductTab(){
    // let feature=["abc",2,3,4];
    return(
        <>
            {/*<Product title="Shahwaiz" features={feature}/>*/}
            {/*<Product title="Islam"/>*/}
            <Product title="Shahwaiz" price={30000}/>
            <Product title="Islam" price={35000}/>
        </>
    );
}