import React from 'react'

function Footer() {
    return (
        <footer className='footer text-muted d-flex mt-5'>
            <div className="container">
                <div className="footer-text">
                    <div className="footer-text-top">
                        <p>Terms of Service</p><span className='footer-devider px-3'>|</span>
                        <p>Privacy Policy</p><span className='footer-devider px-3'>|</span>
                        <p>Subscription Policy</p>
                    </div>
                    <div className="footer-text-bottom">
                        <p>©Copyright  © 2020 PlantIn.</p> 
                        <p>All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
