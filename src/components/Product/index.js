import React from 'react';
import ic_shipping from '../../assets/ic_shipping@2x.png.png';
import toCurrency from '../../utils/toCurrency'

const Product = ({item}) => {
    console.log("item: ", item)
    return (
        <div className="product-wrapper">

            <a href={`items/${item.id}`} className="photo">
                <img src={item.picture} alt=""></img>
            </a>

            <div className="description">
                <div className="price">
                    <div className="currency"> {item.price.currency} </div>
                    <div className="amount"> {toCurrency(item.price.amount)} </div>
                    {item.price.decimals ? 
                        <div className="decimals"> {item.price.decimals} </div>
                    : null}
                    {item.free_shipping ? 
                        <img className="shipping" src={ic_shipping} alt={item.id}></img>
                    : null}
                </div>
                <a className="title" href={`items/${item.id}`}>{item.title}</a>
            </div>

            <div className="state_name">
                <span>
                    {item.address}
                </span>
            </div>

        </div>
    )
}
export default Product;
