import React from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/login/login.css' 
import Link from 'next/link'
import { LoginForm } from '@/components/forms'

const page = () => {
  return (
    <div className='login-container'>

        {/* 1 */}
        <div className="d-none d-md-block ">
            <div className="js-alert-added-to-cart notification-floating notification-cart-container notification-hidden notification-fixed position-absolute position-fixed-md" style={{"display":"none","top":"93px"}}>
                <div className="notification notification-primary notification-cart p-0">
                    <div className="js-cart-notification-close notification-close">
                    <svg className="icon-inline icon-2x notification-icon">
                        <use xlinkHref="#times" />  
                    </svg>
                    </div>
                    <div className="js-cart-notification-item row no-gutters align-items-center" data-store="cart-notification-item">
                    <div className="col-auto pr-0 notification-img">
                        <img className="js-cart-notification-item-img img-absolute-centered-vertically" />
                    </div>

                    <div className="col text-left pl-2 pr-4 font-body">
                        <div className="mb-1 mr-2 text-transform font-weight-bold">
                        <span className="js-cart-notification-item-name" />
                        <span className="js-cart-notification-item-variant-container" style={{"display":"none"}}>
                            (<span className="js-cart-notification-item-variant" />)
                        </span>
                        </div>
                        <div className="mb-1">
                        <span className="js-cart-notification-item-quantity" />
                        <span> x </span>
                        <span className="js-cart-notification-item-price" />
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
        {/* 2 */}
        <div id="nav-search" className="js-modal modal modal-nav-search modal-fade modal- modal--md transition-slide modal- transition-soft" style={{"display":"none"}}>
            <div className="modal-header">
                <div className="row no-gutters align-items-center">
                    <div className="col p-3 text-center" />
                    <div className="col-auto">
                    <a className="js-modal-close modal-close">
                        <svg className="icon-inline icon-lg svg-icon-text">
                        <use xlinkHref="#times" />
                        </svg>
                    </a>
                    </div>
                </div>
            </div>

            <div className="modal-body h-100">
                <form className="js-search-form search-form w-100" action="/search/" method="get">
                    <div className="form-group m-0">
                    <input className="js-search-input form-control search-input" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" />
                    <button type="submit" className="search-btn search-submit-btn" value="Buscar" aria-label="Buscar">
                        Buscar
                    </button>
                    </div>
                </form>
            <div className="js-search-form-suggestions search-suggestions position-relative mt-5 w-100" style={{"display":"none"}} />
            </div>
        </div>

        {/* 3 */}
       
        <div id="nav-hamburger" className="js-modal modal modal-nav-hamburger modal-docked-md pb-0 modal-left modal-left-md transition-slide modal-full transition-soft" style={{"display":"none"}}>
            
            <div className="modal-with-fixed-footer">
                <div className="modal-scrollable-area">
                    <div className="js-modal-close modal-header modal-header-no-title js-toggle-menu-close p-3">
                    <svg className="icon-inline icon-lg svg-icon-text">
                        <use xlinkHref="#times" />
                    </svg>
                    </div>

                    <div className="modal-body nav-body">

                    <div className="d-block d-md-none position-relative">
                        <form className="js-search-form search-form" action="/search/" method="get">
                        <div className="form-group m-0">
                            <input className="js-search-input form-control search-input" autoComplete="off" type="search" name="q" placeholder="¿Qué estás buscando?" aria-label="¿Qué estás buscando?" />
                            <button type="submit" className="search-btn search-submit-btn" value="Buscar" aria-label="Buscar">
                            Buscar
                            </button>
                        </div>
                        </form>
                        <div className="js-search-form-suggestions search-suggestions" style={{"display":"none"}} />
                    </div>

                    <div className="nav-primary">
                        <ul className="nav-list" data-store="navigation" data-component="menu">
                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                            <a className="nav-list-link" href="/">INICIO</a>
                        </li>
                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                            <a className="nav-list-link" href="https://barnesindustries.com.ar/new-collection/">NEW COLLECTION</a>
                        </li>
                        <li className="nav-item item-with-subitems" data-component="menu.item">
                            <a className="js-toggle-menu-panel align-items-center nav-list-link position-relative" href="#">PRODUCTOS
                            <span className="nav-list-arrow ml-1">
                                <svg className="icon-inline icon-md svg-icon-text">
                                <use xlinkHref="#chevron" />
                                </svg>
                            </span>
                            </a>
                            <ul className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md list-subitems" style={{"display":"none"}}>
                                <div className="modal-header">
                                    <div className="row no-gutters">
                                    <div className="col">
                                        <a className="js-toggle-menu-back" href="#">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                            <span className="modal-back pr-2 mr-1">
                                                <svg className="icon-inline icon-flip-horizontal svg-icon-text">
                                                <use xlinkHref="#chevron" />
                                                </svg>
                                            </span>
                                            </div>
                                            <div className="col my-3 text-center">PRODUCTOS</div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="col-auto">
                                        <a className="js-toggle-menu-close js-modal-close modal-close">
                                        <svg className="icon-inline icon-lg modal-close-icon">
                                            <use xlinkHref="#times" />
                                        </svg>
                                        </a>
                                    </div>
                                    </div>
                                </div>

                                <div className="modal-body p-0">
                                    <li className="nav-item py-1">
                                    <a className="nav-list-link position-relative font-body py-3" href="https://barnesindustries.com.ar/productos/">
                                        Ver todos los productos
                                    </a>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/new-collection/">NEW COLLECTION</a>
                                    </li>
                                    <li className="nav-item item-with-subitems" data-component="menu.item">
                                    <a className="js-toggle-menu-panel align-items-center nav-list-link position-relative" href="#">Abrigos
                                        <span className="nav-list-arrow ml-1">
                                        <svg className="icon-inline icon-md svg-icon-text">
                                            <use xlinkHref="#chevron" />
                                        </svg>
                                        </span>
                                    </a>
                                    <ul className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md list-subitems" style={{"display":"none"}}>
                                        <div className="modal-header">
                                        <div className="row no-gutters">
                                            <div className="col">
                                            <a className="js-toggle-menu-back" href="#">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <span className="modal-back pr-2 mr-1">
                                                    <svg className="icon-inline icon-flip-horizontal svg-icon-text">
                                                        <use xlinkHref="#chevron" />
                                                    </svg>
                                                    </span>
                                                </div>
                                                <div className="col my-3 text-center">
                                                    Abrigos
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                            <div className="col-auto">
                                            <a className="js-toggle-menu-close js-modal-close modal-close">
                                                <svg className="icon-inline icon-lg modal-close-icon">
                                                <use xlinkHref="#times" />
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="modal-body p-0">
                                        <li className="nav-item py-1">
                                            <a className="nav-list-link position-relative font-body py-3" href="https://barnesindustries.com.ar/abrigos/">
                                            Ver todo en Abrigos
                                            </a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/abrigos/sweaters/">Sweaters</a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/abrigos/jackets/">Jackets</a>
                                        </li>
                                        </div>
                                    </ul>
                                    </li>
                                    <li className="nav-item item-with-subitems" data-component="menu.item">
                                    <a className="js-toggle-menu-panel align-items-center nav-list-link position-relative" href="#">Remeras
                                        <span className="nav-list-arrow ml-1">
                                        <svg className="icon-inline icon-md svg-icon-text">
                                            <use xlinkHref="#chevron" />
                                        </svg>
                                        </span>
                                    </a>
                                    <ul className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md list-subitems" style={{"display":"none"}}>
                                        <div className="modal-header">
                                        <div className="row no-gutters">
                                            <div className="col">
                                            <a className="js-toggle-menu-back" href="#">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <span className="modal-back pr-2 mr-1">
                                                    <svg className="icon-inline icon-flip-horizontal svg-icon-text">
                                                        <use xlinkHref="#chevron" />
                                                    </svg>
                                                    </span>
                                                </div>
                                                <div className="col my-3 text-center">
                                                    Remeras
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                            <div className="col-auto">
                                            <a className="js-toggle-menu-close js-modal-close modal-close">
                                                <svg className="icon-inline icon-lg modal-close-icon">
                                                <use xlinkHref="#times" />
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="modal-body p-0">
                                        <li className="nav-item py-1">
                                            <a className="nav-list-link position-relative font-body py-3" href="https://barnesindustries.com.ar/remeras-oversize/">
                                            Ver todo en Remeras
                                            </a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/remeras-oversize/boxy/">Boxy</a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/remeras-oversize/oversize/">Oversize</a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/remeras-oversize/heavyweight/">Heavyweight</a>
                                        </li>
                                        </div>
                                    </ul>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/pants/">Pants</a>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/shorts/">Shorts</a>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/sale/">SALE</a>
                                    </li>
                                    <li className="nav-item item-with-subitems" data-component="menu.item">
                                    <a className="js-toggle-menu-panel align-items-center nav-list-link position-relative" href="#">Accesorios
                                        <span className="nav-list-arrow ml-1">
                                        <svg className="icon-inline icon-md svg-icon-text">
                                            <use xlinkHref="#chevron" />
                                        </svg>
                                        </span>
                                    </a>
                                    <ul className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md list-subitems" style={{"display":"none"}}>
                                        <div className="modal-header">
                                        <div className="row no-gutters">
                                            <div className="col">
                                            <a className="js-toggle-menu-back" href="#">
                                                <div className="row no-gutters align-items-center">
                                                <div className="col-auto">
                                                    <span className="modal-back pr-2 mr-1">
                                                    <svg className="icon-inline icon-flip-horizontal svg-icon-text">
                                                        <use xlinkHref="#chevron" />
                                                    </svg>
                                                    </span>
                                                </div>
                                                <div className="col my-3 text-center">
                                                    Accesorios
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                            <div className="col-auto">
                                            <a className="js-toggle-menu-close js-modal-close modal-close">
                                                <svg className="icon-inline icon-lg modal-close-icon">
                                                <use xlinkHref="#times" />
                                                </svg>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="modal-body p-0">
                                        <li className="nav-item py-1">
                                            <a className="nav-list-link position-relative font-body py-3" href="https://barnesindustries.com.ar/accesorios/">
                                            Ver todo en Accesorios
                                            </a>
                                        </li>
                                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                            <a className="nav-list-link" href="https://barnesindustries.com.ar/accesorios/beanies/">Beanies</a>
                                        </li>
                                        </div>
                                    </ul>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/ver-todo/">Ver Todo</a>
                                    </li>
                                    <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                                    <a className="nav-list-link" href="https://barnesindustries.com.ar/gift-card1/">Gift Cards</a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li className="js-desktop-nav-item nav-item" data-component="menu.item">
                            <a className="nav-list-link" href="https://barnesindustries.com.ar/sale/">SALE</a>
                        </li>

                        </ul>

                    </div>
                </div>
            </div>

                    <div className="modal-footer text-right hamburger-footer mb-0 p-0">
                        <div className="d-block d-md-none">
                            <div className="nav-secondary text-left" data-store="account-links">
                                <div className="p-3">
                                <span className="utilities-container text-transform">
                                    <a href="/account/logout"> ¡Hola, Dan!</a>
                                    <span className="mx-1">/</span>
                                    <a href="/account/logout"  className="ml-1">Cerrar sesión</a>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>

        {/* 4  */}
        <div className="js-modal-overlay modal-overlay" data-modal-id="#nav-hamburger" style={{"display":"none"}} />
        <div id="modal-cart" className="js-modal js-fullscreen-modal modal modal-cart modal-right modal-right-md transition-slide modal-docked-md transition-soft" style={{"display":"none"}} data-component="cart">
            <form action="/comprar/" method="post" className="js-ajax-cart-panel h-100" data-store="cart-form">
            <div className="js-modal-close js-fullscreen-modal-close modal-header">
                <div className="row no-gutters align-items-center">
                <div className="col p-3 text-center">Carrito de compras</div>
                <div className="col-auto">
                    <a className="js-modal-close modal-close">
                    <svg className="icon-inline icon-lg svg-icon-text">
                        <use xlinkHref="#times" />
                    </svg>
                    </a>
                </div>
                </div>
            </div>
            <div className="modal-body h-100">
                <div className="js-ajax-cart-list">
                <div className="js-cart-item js-cart-item-shippable cart-item row no-gutters pb-4" data-item-id={1826267925} data-store="cart-item-210678589" data-component="cart.line-item">
                    <div className="col-auto">
                    <a href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-racing-team/?variant=901418056" className="d-block cart-item-image-col text-center">
{/*                         <img src="//acdn.mitiendanube.com/stores/001/785/816/products/rodraxph-040-aac600a2f52596bac417143923339212-320-0.webp" className="img-fluid d-inline-block cart-item-image" />
 */}                    </a>
                    </div>
                    <div className="col pt-2 pl-3 align-items-center">
                    <div className="row align-items-center">
                        <div className="col-12 mb-3">
                        <div className="row w-100 no-gutters">
                            <div className="cart-item-name-container col" data-component="line-item.name">
                            <a href="https://barnesindustries.com.ar/productos/remera-oversize-heavy-weight-racing-team/?variant=901418056" data-component="name.short-name" className="cart-item-name d-block">
                                REMERA HEAVYWEIGHT &quot;RACING TEAM&quot;
                                <div className="font-small mt-1" data-component="name.short-variant-name">
                                (talle 1)
                                </div>
                            </a>
                            </div>
                            <div className="col-auto text-center">
                            <button type="button" className="btn btn-link font-small pr-0 pl-2"  data-component="line-item.remove">
                                Borrar
                            </button>
                            </div>
                        </div>
                        </div>
                        <span className="col cart-item-subtotal">
                        <span className="js-cart-item-subtotal font-weight-bold" data-line-item-id={1826267925} data-component="subtotal.value" data-component-value="$39.200,00'">$39.200,00</span>
                        </span>
                        <div className="cart-item-quantity col-auto" data-component="line-item.subtotal">
                        <div className="form-group float-left form-quantity cart-item-quantity small p-0 mb-0">
                            <div className="form-row m-0 align-items-center">
                            <span className="js-cart-quantity-btn form-quantity-icon icon-30px font-small"  data-component="quantity.minus">
                                <svg className="icon-inline">
                                <use xlinkHref="#minus" />
                                </svg>
                            </span>
                            <div className="form-control-container js-cart-quantity-container col px-0">
                                <input type="number" className="form-control js-cart-quantity-input text-center py-1 form-control-inline" autoCorrect="off" autoCapitalize="off" pattern="\d*" name="quantity[1826267925]" defaultValue={1} data-item-id={1826267925} data-component="quantity.value" />
                            </div>
                            <span className="js-cart-input-spinner cart-item-spinner" style={{"display":"none"}}>
                                <svg className="icon-inline icon-spin svg-icon-text">
                                <use xlinkHref="#spinner-third" />
                                </svg>
                            </span>
                            <span className="js-cart-quantity-btn form-quantity-icon icon-30px font-small"  data-component="quantity.plus">
                                <svg className="icon-inline">
                                <use xlinkHref="#plus" />
                                </svg>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="js-empty-ajax-cart" style={{"display":"none"}}>
                <div className="alert alert-info text-center" data-component="cart.empty-message">
                    El carrito de compras está vacío.
                </div>
                </div>
                <div id="error-ajax-stock" style={{"display":"none"}}>
                <div className="alert alert-warning m-3">
                    ¡Uy! No tenemos más stock de este producto para agregarlo al
                    carrito. Si querés podés<a href="/productos/" className="btn-link font-small ml-1">ver otros acá</a>
                </div>
                </div>
                <div className="cart-row">
                <div className="subtotal-price hidden" data-priceraw={3920000} />
                <div id="store-curr" className="hidden">ARS</div>
                <div className="js-visible-on-cart-filled row mb-3 font-weight-normal" data-store="cart-subtotal">
                    <span className="col-7">
                    <span className="font-weight-bold">Subtotal</span>
                    <small className="js-subtotal-shipping-wording"> (sin envío)</small>
                    :
                    </span>
                    <span className="js-ajax-cart-total js-cart-subtotal font-weight-bold col text-right" data-priceraw={3920000} data-component="cart.subtotal" data-component-value={3920000}>$39.200,00</span>
                </div>
                <div className="js-total-promotions text-accent">
                    <span className="js-promo-in" style={{"display":"none"}}>en</span>
                    <span className="js-promo-all" style={{"display":"none"}}>todos los productos</span>
                    <span className="js-promo-buying" style={{"display":"none"}}>
                    comprando</span>
                    <span className="js-promo-units-or-more" style={{"display":"none"}}>
                    o más</span>
                </div>
                <div className="js-fulfillment-info js-allows-non-shippable cart-fulfillment-info my-4 pb-2">
                    <div className="js-visible-on-cart-filled js-has-new-shipping js-shipping-calculator-container">
                    <div className="js-shipping-method-unavailable alert alert-warning row row mx-0 mb-3" style={{"display":"none"}}>
                        <div className="col-11 text-left pl-1 pr-0">
                        <div className="mb-1">
                            El medio de envío que habías elegido ya no se encuentra
                            disponible para este carrito.
                        </div>
                        <div>¡No te preocupes! Podés elegir otro.</div>
                        </div>
                    </div>
                    <div id="cart-shipping-container" data-shipping-url="/envio/">
                        <span id="cart-selected-shipping-method" data-code className="hidden" />
                        <div data-store="shipping-calculator">
                        <div className="js-shipping-calculator-head shipping-calculator-head position-relative transition-soft with-form">
                            <div className="js-shipping-calculator-with-zipcode mt-1 w-100 transition-up position-absolute">
                            <div className="font-small">
                                <span>
                                <span>Entregas para el CP:</span>
                                <strong className="js-shipping-calculator-current-zip" />
                                </span>
                                <a className="js-shipping-calculator-change-zipcode btn btn-link font-small ml-2" href="#">Cambiar CP</a>
                            </div>
                            </div>
                            <div className="js-shipping-calculator-form shipping-calculator-form transition-up position-absolute w-100 transition-up-active">
                            <div className="form-group mb-3">
                                <div className="mb-2" style={{"display":"none"}}>
                                <span className="text-accent">Envío gratis</span>
                                superando los <span />
                                </div>
                                <div className="text-accent mb-2" style={{"display":"none"}}>
                                ¡Genial! Tenés envío gratis
                                </div>
                                <div className="font-weight-bold mb-1">Medios de envío</div>
                                <div className="position-relative">
                                <div className="form-control-container">
                                    <input type="tel" className="form-control js-shipping-input d-block form-control-line form-control-inline" autoCorrect="off" autoCapitalize="off" name="zipcode" placeholder="Tu código postal" aria-label="Tu código postal" data-component="cart" />
                                </div>
                                <div className="js-calculate-shipping btn form-control-btn form-control-line-btn mt-2 pt-1" aria-label="Calcular envío">
                                    <span className="js-calculate-shipping-wording d-inline-block">
                                    Calcular
                                    </span>
                                    <span className="loading ml-1" style={{"display":"none"}}>
                                    <svg className="icon-inline icon-spin icon-md ml-2">
                                        <use xlinkHref="#spinner-third" />
                                    </svg>
                                    </span>
                                </div>
                                </div>
                                <a className="btn-link font-small my-2 d-inline-block" href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">No sé mi código postal</a>
                                <div className="js-ship-calculator-error invalid-zipcode alert alert-danger mt-1" style={{"display":"none"}}>
                                No encontramos este código postal. ¿Está bien escrito?
                                </div>
                                <div className="js-ship-calculator-error js-ship-calculator-common-error alert alert-danger" style={{"display":"none"}}>
                                Ocurrió un error al calcular el envío. Por favor
                                intentá de nuevo en unos segundos.
                                </div>
                                <div className="js-ship-calculator-error js-ship-calculator-external-error alert alert-danger" style={{"display":"none"}}>
                                El calculo falló por un problema con el medio de
                                envío. Por favor intentá de nuevo en unos segundos.
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="js-shipping-calculator-spinner pt-3 pb-4" style={{"display":"none"}}>
                            <div className="row no-gutters mx-0 mb-4">
                            <div className="col">
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative mb-3 col-10 col-md-8" />
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative col-6 col-md-3" />
                            </div>
                            <div className="col-auto">
                                <div className="placeholder-line placeholder-shipping-price placeholder-color placeholder-shine position-relative" />
                            </div>
                            </div>
                            <div className="row no-gutters mx-0">
                            <div className="col">
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative mb-3 col-10 col-md-8" />
                                <div className="placeholder-line placeholder-color placeholder-shine position-relative col-6 col-md-3" />
                            </div>
                            <div className="col-auto">
                                <div className="placeholder-line placeholder-shipping-price placeholder-color placeholder-shine position-relative" />
                            </div>
                            </div>
                        </div>
                        <div className="js-shipping-calculator-response transition-soft radio-buttons-group" style={{"display":"none"}} />
                        </div>
                        <div className="js-accordion-private-container">
                        <div className="font-weight-bold mb-3">Nuestro local</div>
                        <div className="js-accordion-private-content mt-2 pt-1">
                            <div className="radio-buttons-group">
                            <ul className="radio-button-container list-unstyled">
                                <li className="card mb-neg-1 radio-button-item p-3 mb-0" data-store="branch-item-branch_207906">
                                <label className="js-shipping-radio js-branch-radio radio-button" data-loop="branch-radio-1">
                                    <input className="js-branch-method shipping-method" data-price={0} type="radio" defaultValue="branch_207906" data-name="Punto de retiro Recoleta - Marcelo t de Alvear 1261
        Horario y Día de entrega a coordinar " data-code="branch_207906" data-cost="Gratis" name="option" style={{"display":"none"}} />
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
                                            coordinar
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
                <div className="js-cart-total-container js-visible-on-cart-filled" data-store="cart-total">
                    <div className="row mb-3 h4 font-family-body">
                    <span className="col-auto">Total:</span>
                    <span className="js-cart-total col text-right" data-component="cart.total" data-component-value={3920000}>$39.200,00</span>
                    <span className="col-12">
                        <div data-interest={0} data-cart-installment={6} className="js-installments-cart-total cart-installments font-small font-weight-normal mt-1 text-right installment-no-interest">
                        O hasta
                        <span className="js-cart-installments-amount cart-installments-amount installment-no-interest">6</span>
                        <span>
                            <span className="installment-short-separator"> x </span>
                        </span>
                        <span className="js-cart-installments cart-installments-money installment-no-interest">$6.533,33</span>
                        <span> sin interés </span>
                        </div>
                    </span>
                    </div>
                    <div className="total-price hidden">Total: $39.200,00</div>
                </div>
                <div className="js-visible-on-cart-filled">
                    <div className="js-ajax-cart-submit mb-3" id="ajax-cart-submit-div">
                    <input className="btn btn-primary btn-big btn-block" type="submit" name="go_to_checkout" defaultValue="Iniciar Compra" data-component="cart.checkout-button" />
                    </div>
                    <div className="js-ajax-cart-minimum alert alert-warning mb-2 text-center" style={{"display":"none"}} id="ajax-cart-minumum-div">
                    El monto mínimo de compra es de $0,00 sin incluir el costo de
                    envío
                    </div>
                    <input type="hidden" id="ajax-cart-minimum-value" defaultValue={0} />
                    <div className="text-center w-100 mb-md-2 pb-3">
                    <a href="#" className="js-modal-close js-fullscreen-modal-close btn-link font-small">Ver más productos</a>
                    </div>
                </div>
                </div>
            </div>
            </form>
        </div>

        {/* 6 */}
        <div className="js-modal-overlay modal-overlay" data-modal-id="#modal-cart" style={{"display":"none"}} />

        {/* 7 */}
        <div className="container">
          <section className="page-header py-4 " data-store="page-title">
            <div className="breadcrumbs ">
              <Link href='/' className="crumb" title="Barnes Industries">Inicio</Link>
              <span className="separator">|</span>
              <Link href='/' className="crumb"  title="Mi Cuenta">Mi Cuenta</Link>
              <span className="separator">|</span>
              <span   className="crumb active">Login</span>
            </div>
          </section>
        </div>

        {/* form section */}
        <section className="login-container-3 account-page mb-4 login form">

            <div className="container">
                <div className="row-page">

                    {/* form && messages */}
                    <div className="col-md-5">

                        <div className="js-resend-validation-success mb-4" style={{"display":"none"}}>
                            <div className="alert alert-success">
                            ¡El link fue enviado correctamente!
                            </div>
                        </div>

                        <div className="js-resend-validation-error mb-4" style={{"display":"none"}}>
                            <div className="alert alert-danger">
                            No pudimos enviar el email, intentalo de nuevo en unos minutos.
                            </div>
                        </div>
                            
                        <div className="js-too-many-attempts alert alert-danger mb-4" style={{"display":"none"}}>
                            Superaste la cantidad de intentos permitidos. Volvé a probar en
                            <span className="js-too-many-attempts-countdown" />
                        </div>

                        <div className='justified-div'>
                            <h2 className="">Iniciar sesión</h2>
                        </div>

                        <LoginForm/>
                        
                        <div className="mt-2 mb-2 text-center font-small">
                            ¿No tenés cuenta aún?
                            <a href="/account/register" className="btn-link btn-link font-small mb-2 ml-1">Crear cuenta</a>
                        </div>

                        {/* form 
                        <form method="post" data-store="account-login">

                            <div >
                                <label 
                                    className="form-label" 
                                    htmlFor="email">
                                    Email
                                </label>

                                <input 
                                type="email" 
                                name="email"  
                                autoCorrect="off"
                                autoCapitalize="off" 
                                className="js-account-input form-control" 
                                required placeholder="ej.: tuemail@email.com" />
                            </div>

                            <div >
                            <label 
                                className="form-label" 
                                htmlFor="password">
                                Contraseña
                            </label>

                            <input type="password" name="password" autoCorrect="off" autoCapitalize="off" autoComplete="off" 
                            className="js-account-input js-password-input form-control" 
                            required placeholder="ej.: tucontraseña" />
                            <a aria-label="Ver contraseña" className="js-password-toggle password-toggle btn">
                                <span className="js-password-visible password-toggle-show" style={{"display":"none"}}>
                                Ocultar
                                </span>
                                <span className="js-password-hidden password-toggle-hide">
                                Mostrar
                                </span>
                            </a>
                            <div className="text-right mt-2 mb-2">
                                <a href="/account/reset" className="btn-link font-small mb-2 mr-1">¿Olvidaste tu contraseña?</a>
                            </div>
                            </div>

                            <button className="btn btn-primary btn-big btn-block mb-3" type="submit" value="Iniciar sesión" >
                                Iniciar sesión
                                <span className="js-form-spinner form-spinner icon-inline icon-spin svg-icon-mask ml-2" style={{"display":"none"}} />
                            </button>


                        </form>
                        */}
                    </div>
                </div>
            </div>
        </section>  
    </div>
  )
}

export default page