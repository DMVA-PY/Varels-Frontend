import React, { useState } from 'react'

const Carrito = ({isCarritoVisible, setIsCarritoVisible, toggleCarritoVisibility}) => {

    return (
        <>
            {/* CARRITO DESK */}
            <div
                /* className='js-modal-open js-fullscreen-modal-open btn btn-utility d-flex pr-0' */
                className="js-utility-col col-auto col-utility desktop-utility-col order-last"
                style={{ visibility: "visible", height: "auto" }}
            >
                <span className="utilities-container d-inline-block">
                    <div
                        id="ajax-cart"
                        className="cart-summary"
                        data-component="cart-button"
                    >
                        <a
                        data-toggle="#modal-cart"
                        data-modal-url="modal-fullscreen-cart"
                        className="js-modal-open js-fullscreen-modal-open btn btn-utility d-flex pr-0"
                        onClick={toggleCarritoVisibility}
                        >
                        <span className="utilities-text">Carrito</span>
                        <span className="js-cart-widget-amount badge">0</span>
                        </a>
                    </div>
                </span>
            </div>
        </>
    )
}

export default Carrito