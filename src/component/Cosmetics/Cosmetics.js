import React, {useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';



const Cosmetics = () => {
    const [cosmetics,setCosmetics] = useState([]);
    useEffect(()=>
        {
            fetch('Data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data));
            
        },[])
    return (
        <div>
            <h1>Welcome to Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic => 
                <Cosmetic 
                    cosmetic = {cosmetic}
                    key = {cosmetic.id}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;