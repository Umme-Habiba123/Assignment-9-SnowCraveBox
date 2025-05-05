import React from 'react';

const SubscribeItem = ({item}) => {
    const {thumbnail,name,description} = item
    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={thumbnail}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Subscribe</div>
                        <div className="badge badge-outline">Details</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeItem;