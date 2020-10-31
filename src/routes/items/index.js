import React, { useState, useEffect } from 'react';
import ContentWrapper from '../../containers/ContentWrapper';
import HttpRequestRepository from '../../utils/HttpRequestRepository'

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
            <div className="product-wrapper">
                {results?.map( item => {
                    return (
                        <div>{item.id}</div>
                    )
                })}
            </div>
        </ContentWrapper>
    )
}

export default Items;