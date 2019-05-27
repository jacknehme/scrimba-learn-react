import React from 'react';

function Product(props) {
    const product = props.product;
    
    return (
        <div>
            <h4>{product.name}</h4>
            <p><span>{product.price.toLocaleString("en-US",{style: "currency", currency:"USD"})} </span> - {product.description}</p>
            <hr/>
        </div>
    );
}


export default Product;