import React from 'react'
import pic from '/light.jpg'


const Modal = ( {open, modalClose} ) => {
    
    if(!open) return null

    return (
        <div onClick={modalClose} className='overlay'>
            <div className="modalContainer">
                <img src={pic} className="light" alt="Lighting Offers" />
                <div className="modalRight">
                    <p onClick={modalClose} className="closeBtn">x</p>
                    <div className="content">
                    <h3>ONE TIME OFFER DISCOUNT</h3>
                    <p>$500 </p>
                    <p>For your first Purchase</p>
                </div>
                <div className="btnContainer">
                    <button className="btn">Register and Get it NOW</button>
                </div>
            </div>
        </div>    
    </div>
    )
}

export default Modal