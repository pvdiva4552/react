
export const EachCard=(props)=>{
    const resdata=props.resdata;
    return(
        <div className='eachcard'>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resdata.cloudinaryImageId}`} />
                <div className='eachcarddesc'>
                    <h3>{resdata.name}</h3>
                    <p>{resdata.address}</p>
                    <p>{resdata.avgRating}</p>
                    <p>{resdata.costForTwoString}</p>
                    <p>{resdata.deliveryTime} minutes</p>
                </div>
        </div>
                
    )
}