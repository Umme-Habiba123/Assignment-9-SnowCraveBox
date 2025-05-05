import React, { Suspense } from 'react';
import Slider from '../Components/Slider';
import CountUpSection from '../Components/CountUpSection';

import HowItWorks from '../Components/HowItWorks';
import SubscriptionCard from '../Components/SubscriptionCard';
import SubscriptionBoxes from '../Components/SubscriptionBoxes ';

const HomeLayout = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>
           <Slider></Slider>
           <SubscriptionCard></SubscriptionCard>
            <HowItWorks></HowItWorks>
            <CountUpSection></CountUpSection>
           <SubscriptionBoxes></SubscriptionBoxes>
           </Suspense>
            
        </div>
    );
};

export default HomeLayout;