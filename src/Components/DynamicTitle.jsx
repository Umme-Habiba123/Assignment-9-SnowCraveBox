import React from 'react';
import {Helmet} from "react-helmet";

const DynamicTitle = ({title}) => {
    return (
        <div>
           <Helmet>
            <title>{title} </title>
           </Helmet>
            
        </div>
    );
};

export default DynamicTitle;