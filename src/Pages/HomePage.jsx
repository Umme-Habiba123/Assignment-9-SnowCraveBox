import React from 'react';
import DynamicTitle from '../Components/DynamicTitle';
import HomeLayout from '../Layouts.jsx/HomeLayout';

const HomePage = () => {
    const pageTitle = 'Home - SnowCraveBox'
    
    return (
        <div>
            <DynamicTitle title={pageTitle}> 
              <HomeLayout></HomeLayout>  
            </DynamicTitle>
        </div>
    )

}

export default HomePage;