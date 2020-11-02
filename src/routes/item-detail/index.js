import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ContentWrapper from '../../containers/ContentWrapper';
import HttpRequestRepository from '../../utils/HttpRequestRepository';
import toCurrency from '../../utils/toCurrency';


const ItemDetail = () => {
    const [ result, setResult] = useState();
    let { id } = useParams();
	const { t } = useTranslation()

    useEffect(()=>{
        let getData = async () => {
            let { item } = await HttpRequestRepository.fetchData(`/items/${id}`);
            setResult(item)
        }
        getData()
    },[id])

    return (
        <ContentWrapper topnav breadscrumb>
            <section className="container">
                {result ? (
                    <div className="product-detail-wrapper">
                        
                        <div className="image">
                            <img src={result.picture} alt={result.title}></img>
                        </div>
                            

                        <div className="data">
                            <div className="condition">
                                <div className="new">{t(result.condition)}</div>
                                <div className="sold_quantity">
                                    { t("label.sold_quantity").replace("sold_quantity", result.sold_quantity) }
                                </div>
                            </div>
                            <div className="title">
                                {result.title}
                            </div>
                            <div className="price">
                                <div className="currency">{t(result.price.currency)}</div>
                                <div className="amount">{toCurrency(result.price.amount)}</div>
                                {result.price.decimals ? (
                                    <sup className="decimals">{result.price.decimals}</sup>
                                ) : null}
                            </div>
                            <div className="buy">
                                <button>{t("label.buy")}</button>
                            </div>
                        </div>

                        <div className="description">
                            <div className="product-description">{ t("label.product_description")}</div>
                            <div className="plain_text">{result.description}</div>
                        </div>

                    </div>

                ) : null }
            </section>
        </ContentWrapper>
    )
}

export default ItemDetail;