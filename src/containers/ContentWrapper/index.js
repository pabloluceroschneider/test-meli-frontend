import React from 'react';
import TopNav from '../TopNav';

const ContentWrapper = props => {
    return (
        <div>
            { props.topnav ? <TopNav /> : null}
            { props.children }
        </div>
    )
}

export default ContentWrapper;
