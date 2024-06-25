import React from 'react'
import RestaurantCard from './RestaurantCard'
import { resObj } from '../utils/data'
import {useState} from 'react'


const Body = ()=>{

    const [list, setList] = useState(resObj) 
      

    return(
        <div className="body">
            
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    // console.log("Before filter func... ", resObj.length)
                    filteredList = list.filter((item)=>item.info.avgRating>4.5  )
                    // console.log("After filter func... ",resObj.length)

                    setList(filteredList)
                }}
                >Top Rated</button>
            </div>
            
            <div className="res-container">

                {
                    list.map((restaurant)=>
                    (
                        <RestaurantCard key={restaurant.id} resData={restaurant}/>
                    ))
                }

            </div>
        </div>

    )
}

export default Body