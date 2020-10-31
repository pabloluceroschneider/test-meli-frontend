import React, { useState, useEffect } from 'react';
import HttpRequestRepository from '../../utils/HttpRequestRepository';
import ContentWrapper from '../../containers/ContentWrapper';
import Product from '../../components/Product';


const Items = () => {
    const [ results, setResults] = useState();
	const [ search ] = useState(new URLSearchParams(window.location.search).get('search') || '');


    useEffect(()=>{
        let getData = async () => {
            let data = await HttpRequestRepository.fetchData("/items", { q: search});
            setResults(data.results);
        }
        getData()
    },[search])

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