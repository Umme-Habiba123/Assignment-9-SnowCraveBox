import React from 'react';
import DynamicTitle from '../Components/DynamicTitle';




const HomePage = () => {
    const pageTitle = 'Home - SnowCraveBox'
    
    return (
        <div>
            <DynamicTitle  title={pageTitle}/>
        
            
        </div>
    )

}

export default HomePage;