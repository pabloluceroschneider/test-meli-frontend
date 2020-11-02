import React from 'react';
import TopNav from '../TopNav';
import Breadscrumb from '../../components/Breadscrumb'

const ContentWrapper = props => {
    return (
        <>
            <header>
                { props.topnav ? <TopNav /> : null}
            </header>
            <main>
                { props.breadscrumb ? <Breadscrumb /> : null}
                { props.children }
            </main>
        </>
    )
}

export default ContentWrapper;
