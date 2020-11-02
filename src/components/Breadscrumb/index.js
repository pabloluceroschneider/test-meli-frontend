import React, { useContext } from 'react';
import { AppContext } from '../../store';

const Breadscrumb = () => {
    const { store } = useContext(AppContext);
    return (
        <section className="breadscrumb-wrapper">
            {store?.categories?.map( (cat, index) => {
                return (
                    <div key={index} className="category">
                        {cat}
                    </div>
                )
            })}
        </section>
    )
}
export default Breadscrumb;