import "./foodItem.css"
// import { useState } from 'react'

export const FoodItem = ({ imgUrl, itemName, itemDescn, itemCutPrice, itemPrice }) => {

    // const [] = useState()


    return (
        <div className="foodItem">

            <img src={imgUrl} alt="item image" />

            <div className="itemDetail">

                <div className="nameAndPrice">
                    {itemName}
                    <div className="price"> Price : <span className="cutPrice" > {itemCutPrice} </span> {itemPrice} </div>
                </div>
                <div className="description">
                    {itemDescn}
                    <hr />
                </div>

                <button>Add To Cart</button>

            </div>

        </div>
    )
}