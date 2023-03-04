import React from 'react';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {id,name,price} = props.cosmetic;
    const addToCard = (id) =>
        {
            console.log("item added",id);
        }
    // const addToCardWithParameter = ()=> {addToCard(id)} ###Line Number 17 shortcuts of this line and line number 15
    return (
        <div className='Cosmetic'>
            <h1>Id: {id}</h1>
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            {/* <button onClick={addToCardWithParameter}>Add to Cart</button>   Line Number 16 shortcuts of this line and line number 9*/}
            <button onClick={()=>addToCard(id)}>Add to Cart</button>

        </div>
    );
};

export default Cosmetic;