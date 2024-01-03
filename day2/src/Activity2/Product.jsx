import Price from "./Price.jsx";
import "./Product.css";
export default function Product({title,idx}){
    let oldPrices=["12,495","13,000","15,432","21.908"];
    let newPrices=["9999","9999","9999","9999"];
    let description=
        [["8000 DPI","Desc2"],["8000 DPI","Desc2"],["8000 DPI","Desc2"],["8000 DPI","Desc2"]];
    return (
        <div className="Product">
            <h3>{title}</h3>

            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

        </div>
    )
}