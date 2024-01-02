//Instead of writing three Product component directly
// in App.jsx we write thrm seprately in a seprate compnent
import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
            <Product/>
            <Product/>
            <Product/>
        </>
    );
}
export default ProductTab