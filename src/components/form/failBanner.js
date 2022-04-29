import React from 'react';
import Banner from './banner';


const FailBanner = ({message}) => {
    return (
        <Banner message={message} error={true}/>
    );
};

export default FailBanner; 
