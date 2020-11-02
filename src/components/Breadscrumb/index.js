import React, { useContext } from 'react';
import { AppContext } from '../../store';

const Breadscrumb = () => {
    const { store } = useContext(AppContext);
    return (
        <div className="breadscrumb-wrapper">
            {store?.categories?.map( (cat, index) => {
                return (
                    <div key={index} className="category">
                        {cat}
                    </div>
                )
            })}
        </div>
    )
}
export default Breadscrumb;