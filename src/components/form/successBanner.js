import React from 'react';
import Banner from './banner';

const SuccessBanner = ({message}) => {
    return (
        <Banner message={message} success={true} />
    );
};

export default SuccessBanner; 
