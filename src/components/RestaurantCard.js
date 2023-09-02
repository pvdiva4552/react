import { useState,useEffect } from 'react'
import {EachCard} from './EachCard'
import { resList } from '../utils/apidata'
export const RestaurantCard=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(resList)
    },[])
    const ratingFilter=()=>{
        setData(data.filter((e)=>e.data.avgRating>=4))
        console.log('ratingFilter triggered')
    }
    return(
        <>
        <button onClick={ratingFilter}>Top Rated Restaurants</button><br /><br />
        <div className='restaurantcard'>
            
        {
            data.map((e)=><EachCard resdata={e.data}  key={e.data.id}/>)
        }
        
            
        </div>
        </>
    )
}