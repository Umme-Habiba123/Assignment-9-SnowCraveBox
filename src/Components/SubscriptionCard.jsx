import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router';
import SubscribeItem from '../Pages/SubscribeItem';
import { FaPaw } from "react-icons/fa";



const SubscriptionCard = () => {
    const [subscription, setSubscription]=useState([])
 

    useEffect(()=>{
        fetch('/catDog.json').then(res=>res.json())
        .then(data=>setSubscription(data))
    },[])
   
    return (
        <div className='w-10/12 mx-auto'>
           <div className='my-15'>
           <h1 className='text-4xl text-center flex justify-center gap-4 text-gray-500 satisfy-font'>Be Part of Our Community – Join Now!<FaPaw size={40}/></h1>
           <p className='text-lg font-semibold satisfy-font text-center mt-4'>Each month your dog will receive a themed box full of toys, snacks, and other presents catered to the size and breed of your dog.</p>
           </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 mx-1 gap-10'>
                {
                    subscription.map((item => <SubscribeItem key={item.id} item={item}></SubscribeItem> ))
                }

                
            </div>
                 
            
        </div>
    );
};

export default SubscriptionCard;