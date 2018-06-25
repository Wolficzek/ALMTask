import React from 'react'

export default ({ match }) => {
    const errcode = match.params.code;
    let msg = "Something happened...";
    if (errcode === '404') {
        msg = "Not found.";
    } else if (errcode === '500') {
        msg = "Internal server error.";
    }

    return (
        <div className='errdiv'>
            <img src='img/error.png'/>
            <div className='errDetailDiv'>
                <h2>{msg}</h2>
                <h3>Code: {errcode}</h3>
            </div>
        </div>
    )
}