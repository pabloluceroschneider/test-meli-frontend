import React from 'react'

const Product = ({item}) => {
    return (
        <div className="product-wrapper">

            <a href={`items/${item.id}`} className="photo">
                <img src={item.thumbnail} alt=""></img>
            </a>
            
        </div>
    )
}
export default Product;
