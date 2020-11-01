import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ContentWrapper from '../../containers/ContentWrapper';
import HttpRequestRepository from '../../utils/HttpRequestRepository';
import toCurrency from '../../utils/toCurrency';

const ItemDetail = () => {
    const [ result, setResult] = useState();
    let { id } = useParams()

    useEffect(()=>{
        let getData = async () => {
            let data = await HttpRequestRepository.fetchData(`/items/${id}`);
            setResult(data);
            console.log(data)
        }
        getData()
    },[id])

    console.log(toCurrency(result.price).split(",") )


    return (
        <ContentWrapper topnav breadscrumb>
            <div className="container">
                {result ? (
                    <div className="product-detail-wrapper">
                        
                        <div className="image">
                            <img src={result.pictures[0].url} alt={result.title}></img>
                        </div>
                            

                        <div className="data">
                            <div className="condition">
                                <div className="new">{result.condition ? "Nuevo" : null}</div>
                                <div className="sold_quantity">{result.sold_quantity} vendidos</div>
                            </div>
                            <div className="title">
                                {result.title}
                            </div>
                            <div className="price">
                                {toCurrency(result.price).split(",").map( (p,index) => {
                                    return <div key={index} className={index?"sup":null}>{p}</div>
                                })}
                            </div>
                            <div className="buy">
                                <button>Comprar</button>
                            </div>
                        </div>

                        <div className="description">
                            <div className="product-description">Descripción del Producto</div>
                            <div className="plain_text">{result.plain_text}</div>
                        </div>

                    </div>

                ) : null }
            </div>
        </ContentWrapper>
    )
}

export default ItemDetail;