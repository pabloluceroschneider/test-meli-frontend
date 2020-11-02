import React, { useState, useEffect, useContext } from 'react';
import { AppContext, ACTIONS } from '../../store';
import HttpRequestRepository from '../../utils/HttpRequestRepository';
import ContentWrapper from '../../containers/ContentWrapper';
import Product from '../../components/Product';

const Items = () => {
    const { dispatch } = useContext(AppContext);
    const [ results, setResults] = useState();
	const [ search ] = useState(new URLSearchParams(window.location.search).get('search') || '');

    useEffect(()=>{
        let getData = async () => {
            let { items, categories } = await HttpRequestRepository.fetchData("/items", { q: search});
            setResults(items);
            dispatch( ACTIONS.setCategories(categories) )
        }
        getData()
    },[search, dispatch])

    return (
        <ContentWrapper topnav breadscrumb>
            <div className="container">
                {results?.map( item => {
                    return (
                        <Product key={item.id} item={item}/>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}

export default Items;