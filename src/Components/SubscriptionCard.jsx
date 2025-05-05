import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router';
import SubscribeItem from '../Pages/SubscribeItem';

// const subscriptionPromise = fetch('/catDog.json').then(res => res.json())

const SubscriptionCard = () => {
    const [subscription, setSubscription]=useState([])
    // console.log(subscriptionPromise)

    useEffect(()=>{
        fetch('/catDog.json').then(res=>res.json())
        .then(data=>setSubscription(data))
    },[])
    // const subscriptions = use(subscriptionPromise)
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-4xl text-center my-15 text-gray-500 satisfy-font'>Be Part of Our Community – Join Now! {subscription.length}</h1>

            <div className='grid grid-cols-3'>
                {
                    subscription.map((item => <Link to={`/SubscribeItem/${item.id}`} key={item.id}><SubscribeItem item={item}></SubscribeItem> </Link>))
                }

                
            </div>

            
        </div>
    );
};

export default SubscriptionCard;