import React from 'react'
import qs from "qs";

export default ({ onUpdate }) => {
    const params = qs.parse(location.search.slice(1));
    return(
        <div className='searchDiv'>
            <input value={params.search || ''} onChange={ (event) => onUpdate('search', event.target.value)} type='text' placeholder='Search products'/>
            <select onChange={ (event) => onUpdate('sort', event.target.value) }>
                <option defaultValue value='id asc'>Sorting</option>
                <option value='price asc'>Sort by price ascending</option>
                <option value='price desc'>Sort by price descending</option>
                <option value='name asc'>Sort by name ascending</option>
                <option value='name desc'>Sort by name descending</option>
            </select>
        </div>
    )
}