'use client'
import React from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/styles/async.css'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useAppDispatch } from '@/redux/hooks';
import { toggleCarritoVisibility } from '/home/vare/project/farm_varels/Varels-Frontend/src/redux/services/carritoVisibilitySlice';

const CarritoSmart = () => {

    const dispatch = useAppDispatch();

    const handleCarritoToggle = () => {
      dispatch(toggleCarritoVisibility());
    };

    const isCarritoVisible = useSelector((state: RootState) => state.carritoVisibility.isCarritoVisible);

    return (
        <div
            className={`${isCarritoVisible ? "modal-show" : ''} modal-right modal modal-cart modal-right modal-right-md transition-slide modal-docked-md transition-soft hide-scrollbar`}            
            data-component="cart"
        >
            <form
            action="https://barnesindustries.com.ar/comprar/"
            method="post"
            className="js-ajax-cart-panel h-100 "
            data-store="cart-form"
            >
            <div className="js-modal-close js-fullscreen-modal-close  modal-header  ">
                <div className="row no-gutters align-items-center">
                    <div className="col p-3 text-center">Carrito de compras </div>
                        <div className="col-auto">
                            <a className="js-modal-close modal-close">
                                <svg
                                    className="icon-inline icon-lg svg-icon-text"
                                    onClick={handleCarritoToggle}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    d="M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                    <path 
                                    d="M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                </div>
            </div>

            <div className="modal-body h-100">

                <div className="js-ajax-cart-list"></div>
                <div className="js-empty-ajax-cart">
                <div
                    className="alert alert-info text-center"
                    data-component="cart.empty-message"
                >
                    El carrito de compras está vacío.{" "}
                </div>
                </div>
                <div id="error-ajax-stock" style={{ display: "none" }}>
                <div className="alert alert-warning m-3">
                    ¡Uy! No tenemos más stock de este producto para agregarlo al
                    carrito. Si querés podés
                    <a
                    href="https://barnesindustries.com.ar/productos/"
                    className="btn-link font-small ml-1"
                    >
                    ver otros acá
                    </a>
                </div>
                </div>
                <div className="cart-row">
                <div className="subtotal-price hidden" data-priceraw={0} />
                <div id="store-curr" className="hidden">
                    ARS
                </div>
                <div
                    className="js-visible-on-cart-filled row mb-3 font-weight-normal"
                    style={{ display: "none" }}
                    data-store="cart-subtotal"
                >
                    <span className="col-7">
                    <span className="font-weight-bold">Subtotal</span>
                    <small className="js-subtotal-shipping-wording">
                        {" "}
                        (sin envío)
                    </small>
                    :
                    </span>
                    <span
                    className="js-ajax-cart-total js-cart-subtotal font-weight-bold col text-right"
                    data-priceraw={0}
                    data-component="cart.subtotal"
                    data-component-value={0}
                    >
                    $0,00
                    </span>
                </div>
                <div className="js-total-promotions text-accent">
                    <span className="js-promo-in" style={{ display: "none" }}>
                    en
                    </span>
                    <span className="js-promo-all" style={{ display: "none" }}>
                    todos los productos
                    </span>
                    <span className="js-promo-buying" style={{ display: "none" }}>
                    {" "}
                    comprando
                    </span>
                    <span
                    className="js-promo-units-or-more"
                    style={{ display: "none" }}
                    >
                    {" "}
                    o más
                    </span>
                </div>
                <div
                    className="js-fulfillment-info js-allows-non-shippable cart-fulfillment-info my-4 pb-2"
                    style={{ display: "none" }}
                >
                    <div className="js-visible-on-cart-filled js-has-new-shipping js-shipping-calculator-container">
                    <div
                        className="js-shipping-method-unavailable alert alert-warning row row mx-0 mb-3"
                        style={{ display: "none" }}
                    >
                        <div className="col-11 text-left pl-1 pr-0">
                        <div className="mb-1">
                            El medio de envío que habías elegido ya no se encuentra
                            disponible para este carrito.{" "}
                        </div>
                        <div>¡No te preocupes! Podés elegir otro.</div>
                        </div>
                    </div>
                    <div
                        id="cart-shipping-container"
                        style={{ display: "none" }}
                        data-shipping-url="/envio/"
                    >
                        <span
                        id="cart-selected-shipping-method"
                        data-code=""
                        className="hidden"
                        />
                        <div data-store="shipping-calculator">
                        <div className="js-shipping-calculator-head shipping-calculator-head position-relative transition-soft with-form ">
                            <div className="js-shipping-calculator-with-zipcode  mt-1 w-100 transition-up position-absolute">
                            <div className="font-small">
                                <span>
                                <span>Entregas para el CP:</span>
                                <strong className="js-shipping-calculator-current-zip" />
                                </span>
                                <a
                                className="js-shipping-calculator-change-zipcode btn btn-link font-small ml-2"
                                href="https://barnesindustries.com.ar/#"
                                >
                                Cambiar CP
                                </a>
                            </div>
                            </div>
                            <div className="js-shipping-calculator-form shipping-calculator-form transition-up position-absolute w-100 transition-up-active">
                            <div className="form-group mb-3">
                                <div className=" mb-2" style={{ display: "none" }}>
                                <span className="text-accent">Envío gratis</span>{" "}
                                superando los
                                <span />
                                </div>
                                <div
                                className=" text-accent mb-2"
                                style={{ display: "none" }}
                                >
                                ¡Genial! Tenés envío gratis
                                </div>
                                <div className=" font-weight-bold mb-1">
                                Medios de envío
                                </div>
                                <div className="position-relative">
                                <div className="form-control-container ">
                                    <input
                                    type="tel"
                                    className=" form-control js-shipping-input d-block form-control-line form-control-inline"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    name="zipcode"
                                    placeholder="Tu código postal"
                                    aria-label="Tu código postal"
                                    data-component="cart"
                                    />
                                </div>
                                <div
                                    className="js-calculate-shipping btn form-control-btn form-control-line-btn mt-2 pt-1"
                                    aria-label="Calcular envío"
                                >
                                    <span className="js-calculate-shipping-wording d-inline-block">
                                    Calcular
                                    </span>
                                    <span
                                    className="loading ml-1"
                                    style={{ display: "none" }}
                                    >
                                    <svg className="icon-inline icon-spin icon-md ml-2">
                                        <use xlinkHref="#spinner-third" />
                                    </svg>
                                    </span>
                                </div>
                                </div>
                                <a
                                className="btn-link font-small my-2 d-inline-block "
                                href="https://www.correoargentino.com.ar/formularios/cpa"
                                target="_blank"
                                >
                                No sé mi código postal
                                </a>
                                <div
                                className="js-ship-calculator-error invalid-zipcode alert alert-danger mt-1"
                                style={{ display: "none" }}
                                >
                                No encontramos este código postal. ¿Está bien escrito?
                                </div>
                                <div
                                className="js-ship-calculator-error js-ship-calculator-common-error alert alert-danger"
                                style={{ display: "none" }}
                                >
                                Ocurrió un error al calcular el envío. Por favor
                                intentá de nuevo en unos segundos.
                                </div>
                                <div
                                className="js-ship-calculator-error js-ship-calculator-external-error alert alert-danger"
                                style={{ display: "none" }}
                                >
                                El calculo falló por un problema con el medio de
                                envío. Por favor intentá de nuevo en unos segundos.
                                </div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="js-shipping-calculator-spinner pt-3 pb-4"
                            style={{ display: "none" }}
                        >
                            <div className="row no-gutters mx-0 mb-4">
                            <div className="col">
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative mb-3 col-10 col-md-8"></div>
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative col-6 col-md-3"></div>
                            </div>
                            <div className="col-auto">
                                <div className="placeholder-line placeholder-shipping-price placeholder-color placeholder-shine position-relative"></div>
                            </div>
                            </div>
                            <div className="row no-gutters mx-0">
                            <div className="col">
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative mb-3 col-10 col-md-8"></div>
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative col-6 col-md-3"></div>
                            </div>
                            <div className="col-auto">
                                <div className="placeholder-line placeholder-shipping-price placeholder-color placeholder-shine position-relative"></div>
                            </div>
                            </div>
                        </div>
                        <div
                            className="js-shipping-calculator-response transition-soft  radio-buttons-group"
                            style={{ display: "none" }}
                        />
                        </div>
                        <div className="js-accordion-private-container">
                        <div className="font-weight-bold mb-3">Nuestro local</div>
                        <div className="js-accordion-private-content mt-2 pt-1">
                            <div className="radio-buttons-group">
                            <ul className="radio-button-container list-unstyled">
                                <li
                                className="card mb-neg-1 radio-button-item p-3 mb-0"
                                data-store="branch-item-branch_207906"
                                >
                                <label
                                    className="js-shipping-radio js-branch-radio radio-button"
                                    data-loop="branch-radio-1"
                                >
                                    <input
                                    className="js-branch-method  shipping-method"
                                    data-price={0}
                                    type="radio"
                                    defaultValue="branch_207906"
                                    data-name="Punto de retiro Recoleta - Marcelo t de Alvear 1261
            Horario y Día de entrega a coordinar "
                                    data-code="branch_207906"
                                    data-cost="Gratis"
                                    name="option"
                                    style={{ display: "none" }}
                                    />
                                    <div className="shipping-option row-fluid radio-button-content">
                                    <div className="radio-button-icons-container">
                                        <span className="radio-button-icons">
                                        <span className="radio-button-icon unchecked" />
                                        <span className="radio-button-icon checked" />
                                        </span>
                                    </div>
                                    <div className="radio-button-label ml-1">
                                        <div className="row">
                                        <div className="col font-small pr-3">
                                            <div>
                                            Punto de retiro Recoleta - Marcelo t de
                                            Alvear 1261 Horario y Día de entrega a
                                            coordinar{" "}
                                            </div>
                                        </div>
                                        <div className="col-auto text-right">
                                            <p className="text-accent mb-0 d-inline-block">
                                            Gratis
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </label>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div
                    className="js-cart-total-container js-visible-on-cart-filled"
                    style={{ display: "none" }}
                    data-store="cart-total"
                >
                    <div className="row  mb-3 h4 font-family-body">
                    <span className="col-auto ">Total:</span>
                    <span
                        className="js-cart-total   col text-right "
                        data-component="cart.total"
                        data-component-value={0}
                    >
                        $0,00
                    </span>
                    <span className="col-12 ">
                        <div
                        style={{ display: "none" }}
                        data-interest={0}
                        data-cart-installment={1}
                        className="js-installments-cart-total cart-installments font-small font-weight-normal mt-1 text-right "
                        >
                        O hasta
                        <span className="js-cart-installments-amount cart-installments-amount ">
                            1
                        </span>
                        <span>
                            <span className="installment-short-separator">x</span>
                        </span>
                        <span className="js-cart-installments cart-installments-money ">
                            $0,00
                        </span>
                        </div>
                    </span>
                    </div>
                    <div className="total-price hidden">Total: $0,00</div>
                </div>
                <div
                    className="js-visible-on-cart-filled"
                    style={{ display: "none" }}
                >
                    <div className="js-ajax-cart-submit mb-3" id="ajax-cart-submit-div">
                    <input
                        className="btn btn-primary btn-big btn-block"
                        type="submit"
                        name="go_to_checkout"
                        defaultValue="Iniciar Compra"
                        data-component="cart.checkout-button"
                    />
                    </div>
                    <div
                    className="js-ajax-cart-minimum alert alert-warning mb-2 text-center"
                    style={{ display: "none" }}
                    id="ajax-cart-minumum-div"
                    >
                    El monto mínimo de compra es de $0,00 sin incluir el costo de
                    envío
                    </div>
                    <input
                    type="hidden"
                    id="ajax-cart-minimum-value"
                    defaultValue={0}
                    />
                    <div className="text-center w-100 mb-md-2 pb-3">
                    <a
                        href="https://barnesindustries.com.ar/#"
                        className="js-modal-close js-fullscreen-modal-close btn-link font-small"
                    >
                        Ver más productos
                    </a>
                    </div>
                </div>
                </div>
                
            </div>
            
            </form>
        </div>
    )
}

export default CarritoSmart