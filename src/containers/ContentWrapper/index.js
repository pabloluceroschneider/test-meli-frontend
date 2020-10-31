import React from 'react';
import TopNav from '../TopNav';
import Breadscrumb from '../../components/Breadscrumb'

const ContentWrapper = props => {
    return (
        <div>
            { props.topnav ? <TopNav /> : null}
            { props.breadscrumb ? <Breadscrumb /> : null}
            { props.children }
        </div>
    )
}

export default ContentWrapper;
