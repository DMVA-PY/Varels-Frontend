import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleCarritoVisibility } from '/home/vare/project/farm_varels/Varels-Frontend/src/redux/services/carritoVisibilitySlice.ts';

const Carrito = () => {
    const dispatch = useDispatch();

    const handleCarritoToggle = () => {
      dispatch(toggleCarritoVisibility());
    };
    
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
                        onClick={handleCarritoToggle}
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