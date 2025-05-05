import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router';
import SubscribeItem from '../Pages/SubscribeItem';
import { FaPaw } from "react-icons/fa";

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
           <div className='my-15'>
           <h1 className='text-4xl text-center flex justify-center gap-4 text-gray-500 satisfy-font'>Be Part of Our Community – Join Now!<FaPaw size={40}/></h1>
           <p className='text-lg font-semibold satisfy-font text-center mt-4'>Each month your dog will receive a themed box full of toys, snacks, and other presents catered to the size and breed of your dog.</p>
           </div>

            <div className='grid grid-cols-3 space-y-6 mx-1'>
                {
                    subscription.map((item => <Link to={`/SubscribeItem/${item.id}`} key={item.id}><SubscribeItem item={item}></SubscribeItem> </Link>))
                }

                
            </div>

            
        </div>
    );
};

export default SubscriptionCard;