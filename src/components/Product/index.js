import React from 'react';
import toCurrency from '../../utils/toCurrency';
import ic_shipping from '../../assets/ic_shipping@2x.png.png';

const Product = ({item}) => {
    return (
        <div className="product-wrapper">

            <a href={`items/${item.id}`} className="photo">
                <img src={item.thumbnail} alt=""></img>
            </a>

            <div className="description">
                <div className="price-shipping">
                    <div className="price"> {toCurrency(item.price)} </div>
                    {item.shipping.free_shipping ? 
                        <img className="shipping" src={ic_shipping} alt={item.id}></img>
                    : null}
                </div>
                <a className="title" href={`items/${item.id}`}>{item.title}</a>
            </div>

            <div className="state_name">
                <span>
                    {item.address.state_name}
                </span>
            </div>

        </div>
    )
}
export default Product;
