import React from 'react'

function Advertisement() {
    return (
        <div className='ads search-block d-flex'>
           <div className="ads-box">
            <div className="ads-text">
                <img className='ads-logo' src="./img/logo.png" alt='logo' />
                <h1 className='colored-heading ads-heading'>Get unlimited access to exclusive articles</h1>
                <h3 className='ads-text'>Get rid of limits and read everything you wish</h3>
                <button className='ads-btn'>Try For Free</button>
            </div>
            <div className="ads-img">
                <img src="./img/advertise-img.png" alt='advertisement' />
            </div>
            </div>
        </div>
    )
}

export default Advertisement
