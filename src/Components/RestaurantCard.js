import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props)=>{
    
    const {resData} = props
    // console.log(resData);
    const {name, avgRating, locality, cuisines, costForTwo} = resData.info
    // console.log(name);

    return(
        <div className='res-card'>
            <img className='res-logo' src={CDN_URL+resData.info.cloudinaryImageId} alt="" />
            <h3>{name}</h3>
            {/* <p>{cuisines.join(", ")}</p> */}
            <p>{locality}</p>
            <p>{costForTwo}</p>
            <h4>{avgRating}</h4>
        </div>
    ) 
}

export default RestaurantCard