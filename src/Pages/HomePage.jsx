import React from 'react';
import DynamicTitle from '../Components/DynamicTitle';

import MyProfile from '../Pages/MyProfile';


const HomePage = () => {
    const pageTitle = 'Home - SnowCraveBox'
    
    return (
        <div>
            <DynamicTitle  title={pageTitle}/>
          <MyProfile></MyProfile>
            
        </div>
    )

}

export default HomePage;