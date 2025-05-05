import React, { use } from 'react';
import { Link } from 'react-router';
import SubscribeItem from '../Pages/SubscribeItem';

const subscriptionPromise = fetch('/public/catDog.json').then(res => res.json())

const SubscriptionCard = () => {
    console.log(subscriptionPromise)
    const subscriptions = use(subscriptionPromise)
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-4xl text-center my-15 text-gray-500 satisfy-font'>Be Part of Our Community – Join Now! {subscriptions.length}</h1>

            <div className='grid grid-cols-3'>
                {
                    subscriptions.map((item => <Link to={`/SubscribeItem/${item.id}`} key={item.id}><SubscribeItem item={item}></SubscribeItem> </Link>))
                }

                
            </div>

            
        </div>
    );
};

export default SubscriptionCard;