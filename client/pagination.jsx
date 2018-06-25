import React from 'react'

export default ( {pages, onUpdate} ) => {
    let subpage = [];
    for(let i = 0; i < pages; i++){
        subpage[i] = <div key={i} className='paginationLink' onClick={()=>onUpdate('page', i)}>{i+1}</div>
    }
    return (
        <div className='paginationDiv'>
            {subpage}
        </div>
    )
}
