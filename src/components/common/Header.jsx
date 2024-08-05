'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Carrito from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Carrito.jsx';
import CookieBanner from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/CookieBanner.jsx'
import CarritoSmart from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/CarritoSmart.jsx'

import "/home/vare/project/farm_varels/Varels-Frontend/src/styles/async.css"
import "/home/vare/project/farm_varels/Varels-Frontend/src/styles/critical.css"

const Header = () => {

  /* STATE */
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  /* CARRITO STATE */
  const [isCarritoVisible, setIsCarritoVisible] = useState(false);

  const toggleCarritoVisibility = () => {
    setIsCarritoVisible(!isCarritoVisible);
  };

  return (
    <div>
      {/* HEADER */}
      <header
        className="js-head-main head-main  head-colors position-sticky position-relative-md head-logo-center head-logo-md-center   head-md-visible-nav   transition-soft"
        data-store="head"
      >
        {/* BLACK BAR */}
        <section className="js-adbar section-adbar section-adbar-animated section-adbar-colors adbar-with-messages ">
          <div
            className="js-adbar-animated adbar-animated"
            style={{
              animation: "80.05s linear 0s infinite normal none running marquee"
            }}
          >
            <div className="js-adbar-text-container adbar-text-container align-items-center">
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  25% OFF EFECTIVO / TRANSFERENCIA
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/sale/">
                  6 CUOTAS SIN&nbsp;INTERÉS
                </a>
              </span>
              <span className="adbar-message mr-4 ">
                <a href="https://barnesindustries.com.ar/showroom/">
                  TENEMOS SHOWROOM VISITANOS
                </a>
              </span>
            </div>

          </div>
        </section>

        {/* BUTTONS */}
        <div className="head-logo-row position-relative transition-soft">
          <div className="container-fluid">
            <div className="js-nav-logo-bar row no-gutters align-items-center">

              {/* MENU BUTTON */}
              <div className="order-first col-3 order-md-first  col-md-auto col-utility d-md-none">
                <span className="utilities-container d-inline-block">
                  <a
                    className="js-modal-open utilities-item btn btn-utility pl-0 pl-md-0"
                    data-toggle="#nav-hamburger"
                    aria-label="Menú"
                    data-component="menu-button"
                  >
                    <span onClick={toggleVisibility} className="utilities-text">Menú</span>
                  </a>
                </span>
              </div>

              {/* LOGO */}
              <div className="js-logo-container col text-center col-md order-md-1 text-md-center ml-md-5">
                <div id="logo" className="logo-img-container ">
                  <a href="https://barnesindustries.com.ar/" title="">
                    <img
                      src="../barnes-logo.webp"
                      alt="Varels"
                      className="logo-img transition-soft logo-img-small"
                      width={474}
                      height={49}
                    />
                  </a>
                  <h1 style={{ display: "none" }}>Varels</h1>
                </div>
              </div>

              {/* BUSCAR BUTTON */}
              <div
                className="js-utility-col js-search-utility col-auto desktop-utility-col col-md-3 mr-md-5 col-utility  order-md-0"
                style={{ visibility: "visible", height: "auto" }}
              >
                <span className="d-none d-md-inline-block ">
                  <span className="utilities-container d-inline-block">
                  <Link href="/account/search"
                      className="js-search-button js-modal-open js-fullscreen-modal-open btn btn-utility utilities-item pl-md-0"
                      data-modal-url="modal-fullscreen-search"
                      data-toggle="#nav-search"
                      aria-label="Buscador"
                  >
                      <span className="utilities-text">Buscar</span>
                  </Link>

                  </span>
                </span>

              </div>

              {/* LOGIN BUTTON */}
              <div
                className="js-utility-col col-utility desktop-utility-col text-right d-none d-md-inline-block order-md-1 col-md-3"
                style={{ visibility: "visible", height: "auto" }}
              >
                <span className="utilities-container text-transform">
                  <Link
                    href="/account/login"
                    className="btn btn-utility"
                  >
                    <span className="utilities-text">Login</span>
                  </Link>
                </span>
              </div>

              {/* CARRITO BUTTON */}
              <Carrito isCarritoVisible={isCarritoVisible} setIsCarritoVisible={setIsCarritoVisible} toggleCarritoVisibility={toggleCarritoVisibility}/>

              <div className="d-block d-md-none">
                <div
                  className="js-alert-added-to-cart notification-floating notification-cart-container notification-hidden notification-fixed position-absolute position-fixed-md"
                  style={{ display: "none", top: 93, marginTop: "-1px" }}
                >
                  <div className="notification notification-primary notification-cart p-0">
                    <div className="js-cart-notification-close notification-close">
                      <svg className="icon-inline icon-2x notification-icon">
                        <use xlinkHref="#times" />
                      </svg>
                    </div>
                    <div
                      className="js-cart-notification-item row no-gutters align-items-center"
                      data-store="cart-notification-item"
                    >
                      <div className="col-auto pr-0 notification-img">
                        <img
                          src="https://barnesindustries.com.ar/"
                          className="js-cart-notification-item-img img-absolute-centered-vertically"
                        />
                      </div>
                      <div className="col text-left pl-2 pr-4 font-body">
                        <div className="mb-1 mr-2 text-transform font-weight-bold">
                          <span className="js-cart-notification-item-name" />
                          <span
                            className="js-cart-notification-item-variant-container"
                            style={{ display: "none" }}
                          >
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

            </div>
          </div>
        </div>

        {/* CATEGORIAS */}
        <div className="head-nav d-none d-md-block">
          <div className="container-fluid text-center">
            <div className="nav-desktop">

              <ul
                className="js-nav-desktop-list nav-desktop-list"
                data-store="navigation"
                data-component="menu"
              >
                <span
                  className="js-nav-desktop-list-arrow js-nav-desktop-list-arrow-left nav-desktop-list-arrow nav-desktop-list-arrow-left disable"
                  style={{ display: "none" }}
                >
                  <svg className="icon-inline icon-lg icon-flip-horizontal">
                    <use xlinkHref="#chevron" />
                  </svg>
                </span>

                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link selected"
                    href="https://barnesindustries.com.ar/"
                  >
                    INICIO
                  </a>
                </li>

                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link "
                    href="https://barnesindustries.com.ar/new-collection/"
                  >
                    NEW COLLECTION
                  </a>
                </li>

                {/*productos problema */}
                <li
                  className=" nav-item-desktop js-nav-main-item nav-dropdown nav-main-item nav-item item-with-subitems"
                  data-component="menu.item"
                >
                  <div
                  >
                    <a
                      href="https://barnesindustries.com.ar/productos/"
                    >
                      PRODUCTOS
                    </a>
                  </div>
                  <div
                    className="js-desktop-dropdown nav-dropdown-content desktop-dropdown"
                    style={{ maxHeight: 398, pointerEvents: "initial" }}
                  >
                    <div className="container-fluid desktop-dropdown-container">
                      <ul className="desktop-list-subitems  list-subitems">
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/new-collection/"
                          >
                            NEW COLLECTION
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/abrigos/"
                            >
                              Abrigos
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/abrigos/sweaters/"
                              >
                                Sweaters
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/abrigos/jackets/"
                              >
                                Jackets
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/remeras-oversize/"
                            >
                              Remeras
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/boxy/"
                              >
                                Boxy
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/oversize/"
                              >
                                Oversize
                              </a>
                            </li>
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/remeras-oversize/heavyweight/"
                              >
                                Heavyweight
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/pants/"
                          >
                            Pants
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/shorts/"
                          >
                            Shorts
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/sale/"
                          >
                            SALE
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item js-item-subitems-desktop nav-item-desktop  nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <div className="nav-item-container">
                            <a
                              className=" nav-list-link position-relative "
                              href="https://barnesindustries.com.ar/accesorios/"
                            >
                              Accesorios
                            </a>
                          </div>
                          <ul className="  list-subitems">
                            <li
                              className="js-desktop-nav-item  nav-item-desktop nav-item"
                              data-component="menu.item"
                            >
                              <a
                                className="nav-list-link "
                                href="https://barnesindustries.com.ar/accesorios/beanies/"
                              >
                                Beanies
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/ver-todo/"
                          >
                            Ver Todo
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item-desktop nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/gift-card1/"
                          >
                            Gift Cards
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>


                <li
                  className="js-desktop-nav-item js-nav-main-item nav-main-item nav-item-desktop nav-item"
                  data-component="menu.item"
                >
                  <a
                    className="nav-list-link "
                    href="https://barnesindustries.com.ar/sale/"
                  >
                    SALE
                  </a>
                </li>

                <span
                  className="js-nav-desktop-list-arrow js-nav-desktop-list-arrow-right nav-desktop-list-arrow nav-desktop-list-arrow-right"
                  style={{ display: "none" }}
                >
                  <svg className="icon-inline icon-lg">
                    <use xlinkHref="#chevron" />
                  </svg>
                </span>
              </ul>

            </div>
          </div>
        </div>

      </header>
      
    {/* SMART */}
    <>
      {/* COOKIES */}
      <CookieBanner/> 
        
      {/* MENU SMART */}
      <div className="d-none d-md-block">
        <div
          className="js-alert-added-to-cart notification-floating notification-cart-container notification-hidden notification-fixed position-absolute position-fixed-md"
          style={{ display: "none", top: 93, marginTop: "-1px" }}
        >
          <div className="notification notification-primary notification-cart p-0">
            <div className="js-cart-notification-close notification-close">
              <svg className="icon-inline icon-2x notification-icon">
                <use xlinkHref="#times" />
              </svg>
            </div>
            <div
              className="js-cart-notification-item row no-gutters align-items-center"
              data-store="cart-notification-item"
            >
              <div className="col-auto pr-0 notification-img">
                <img
                  src="https://barnesindustries.com.ar/"
                  className="js-cart-notification-item-img img-absolute-centered-vertically"
                />
              </div>
              <div className="col text-left pl-2 pr-4 font-body">
                <div className="mb-1 mr-2 text-transform font-weight-bold">
                  <span className="js-cart-notification-item-name" />
                  <span
                    className="js-cart-notification-item-variant-container"
                    style={{ display: "none" }}
                  >
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

      {/* BUSCAR */}
      <div
        id="nav-search"
        className="js-modal   modal modal-nav-search modal-fade modal- modal--md transition-slide modal- transition-soft "
        style={{ display: "none" }}
      >
        <div className="   modal-header  ">
          <div className="row no-gutters align-items-center">
            <div className="col p-3 text-center"></div>
            <div className="col-auto">
              <a className="js-modal-close modal-close">
                <svg className="icon-inline icon-lg svg-icon-text">
                  <use xlinkHref="#times" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* BUSCAR BUTTON */}
        <div className="modal-body h-100">
          <form
            className="js-search-form search-form w-100"
            action="https://barnesindustries.com.ar/search/"
            method="get"
          >
            <div className="form-group m-0">
              <input
                className="js-search-input form-control search-input "
                autoComplete="off"
                type="search"
                name="q"
                placeholder="¿Qué estás buscando?"
                aria-label="¿Qué estás buscando?"
              />
              <button
                type="submit"
                className=" search-btn search-submit-btn "
                value="Buscar"
                aria-label="Buscar"
              >
                Buscar
              </button>
            </div>
          </form>
          <div
            className="js-search-form-suggestions search-suggestions position-relative mt-5 w-100"
            style={{ display: "none" }}
          ></div>
        </div>

      </div>

      {/* HAMBURGER MENU SMARTPHONE */}
      <div
        id="nav-hamburger"
        className={`${isVisible ? "modal-show" : ''} js-modal modal modal-nav-hamburger modal-docked-md pb-0 modal-left modal-left-md transition-slide modal-full transition-soft`}
      >
        <div /*className="modal-with-fixed-footer" */>

          <div className="modal-scrollable-area">

            {/* X BUTTON */}
            <div className="js-modal-close modal-header modal-header-no-title js-toggle-menu-close p-3">
              <svg
                className="icon-inline icon-lg svg-icon-text"
                onClick={toggleVisibility}
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
            </div>

            <div className="modal-body nav-body">

              {/* BUSCAR BUTTON */}
              <div className="d-block d-md-none position-relative">
                <form
                  className="js-search-form search-form "
                  action="https://barnesindustries.com.ar/search/"
                  method="get"
                >
                  <div className="form-group m-0">
                    <input
                      className="js-search-input form-control search-input "
                      autoComplete="off"
                      type="search"
                      name="q"
                      placeholder="¿Qué estás buscando?"
                      aria-label="¿Qué estás buscando?"
                    />
                    <button
                      type="submit"
                      className=" search-btn search-submit-btn "
                      value="Buscar"
                      aria-label="Buscar"
                    >
                      Buscar
                    </button>
                  </div>
                </form>
                <div
                  className="js-search-form-suggestions search-suggestions "
                  style={{ display: "none" }}
                ></div>
              </div>
              
              {/* CATEGORIAS */}
              <div className="nav-primary">
                <ul
                  className="nav-list"
                  data-store="navigation"
                  data-component="menu"
                >
                  <li
                    className="js-desktop-nav-item  nav-item"
                    data-component="menu.item"
                  >
                    <a
                      className="nav-list-link selected"
                      href="https://barnesindustries.com.ar/"
                    >
                      INICIO
                    </a>
                  </li>
                  <li
                    className="js-desktop-nav-item  nav-item"
                    data-component="menu.item"
                  >
                    <a
                      className="nav-list-link "
                      href="https://barnesindustries.com.ar/new-collection/"
                    >
                      NEW COLLECTION
                    </a>
                  </li>
                  <li
                    className=" nav-item item-with-subitems"
                    data-component="menu.item"
                  >
                    <a
                      className="js-toggle-menu-panel align-items-center nav-list-link position-relative "
                      href="https://barnesindustries.com.ar/#"
                    >
                      PRODUCTOS
                      <span className="nav-list-arrow ml-1">
                        <svg className="icon-inline icon-md svg-icon-text">
                          <use xlinkHref="#chevron" />
                        </svg>
                      </span>
                    </a>
                    <ul
                      className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md  list-subitems"
                      style={{ display: "none" }}
                    >
                      <div className="modal-header">
                        <div className="row no-gutters">
                          <div className="col">
                            <a
                              className="js-toggle-menu-back"
                              href="https://barnesindustries.com.ar/#"
                            >
                              <div className="row no-gutters align-items-center">
                                <div className="col-auto">
                                  <span className="modal-back pr-2 mr-1">
                                    <svg className="icon-inline icon-flip-horizontal svg-icon-text">
                                      <use xlinkHref="#chevron" />
                                    </svg>
                                  </span>
                                </div>
                                <div className="col my-3 text-center">
                                  PRODUCTOS
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
                          <a
                            className="nav-list-link position-relative font-body py-3 "
                            href="https://barnesindustries.com.ar/productos/"
                          >
                            Ver todos los productos
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/new-collection/"
                          >
                            NEW COLLECTION
                          </a>
                        </li>
                        <li
                          className=" nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <a
                            className="js-toggle-menu-panel align-items-center nav-list-link position-relative "
                            href="https://barnesindustries.com.ar/#"
                          >
                            Abrigos
                            <span className="nav-list-arrow ml-1">
                              <svg className="icon-inline icon-md svg-icon-text">
                                <use xlinkHref="#chevron" />
                              </svg>
                            </span>
                          </a>
                          <ul
                            className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md  list-subitems"
                            style={{ display: "none" }}
                          >
                            <div className="modal-header">
                              <div className="row no-gutters">
                                <div className="col">
                                  <a
                                    className="js-toggle-menu-back"
                                    href="https://barnesindustries.com.ar/#"
                                  >
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
                                <a
                                  className="nav-list-link position-relative font-body py-3 "
                                  href="https://barnesindustries.com.ar/abrigos/"
                                >
                                  Ver todo en Abrigos
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/abrigos/sweaters/"
                                >
                                  Sweaters
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/abrigos/jackets/"
                                >
                                  Jackets
                                </a>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li
                          className=" nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <a
                            className="js-toggle-menu-panel align-items-center nav-list-link position-relative "
                            href="https://barnesindustries.com.ar/#"
                          >
                            Remeras
                            <span className="nav-list-arrow ml-1">
                              <svg className="icon-inline icon-md svg-icon-text">
                                <use xlinkHref="#chevron" />
                              </svg>
                            </span>
                          </a>
                          <ul
                            className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md  list-subitems"
                            style={{ display: "none" }}
                          >
                            <div className="modal-header">
                              <div className="row no-gutters">
                                <div className="col">
                                  <a
                                    className="js-toggle-menu-back"
                                    href="https://barnesindustries.com.ar/#"
                                  >
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
                                <a
                                  className="nav-list-link position-relative font-body py-3 "
                                  href="https://barnesindustries.com.ar/remeras-oversize/"
                                >
                                  Ver todo en Remeras
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/remeras-oversize/boxy/"
                                >
                                  Boxy
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/remeras-oversize/oversize/"
                                >
                                  Oversize
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/remeras-oversize/heavyweight/"
                                >
                                  Heavyweight
                                </a>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/pants/"
                          >
                            Pants
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/shorts/"
                          >
                            Shorts
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/sale/"
                          >
                            SALE
                          </a>
                        </li>
                        <li
                          className=" nav-item item-with-subitems"
                          data-component="menu.item"
                        >
                          <a
                            className="js-toggle-menu-panel align-items-center nav-list-link position-relative "
                            href="https://barnesindustries.com.ar/#"
                          >
                            Accesorios
                            <span className="nav-list-arrow ml-1">
                              <svg className="icon-inline icon-md svg-icon-text">
                                <use xlinkHref="#chevron" />
                              </svg>
                            </span>
                          </a>
                          <ul
                            className="js-menu-panel nav-list-panel nav-list-panel-right nav-list-panel-left-md  list-subitems"
                            style={{ display: "none" }}
                          >
                            <div className="modal-header">
                              <div className="row no-gutters">
                                <div className="col">
                                  <a
                                    className="js-toggle-menu-back"
                                    href="https://barnesindustries.com.ar/#"
                                  >
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
                                <a
                                  className="nav-list-link position-relative font-body py-3 "
                                  href="https://barnesindustries.com.ar/accesorios/"
                                >
                                  Ver todo en Accesorios
                                </a>
                              </li>
                              <li
                                className="js-desktop-nav-item  nav-item"
                                data-component="menu.item"
                              >
                                <a
                                  className="nav-list-link "
                                  href="https://barnesindustries.com.ar/accesorios/beanies/"
                                >
                                  Beanies
                                </a>
                              </li>
                            </div>
                          </ul>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/ver-todo/"
                          >
                            Ver Todo
                          </a>
                        </li>
                        <li
                          className="js-desktop-nav-item  nav-item"
                          data-component="menu.item"
                        >
                          <a
                            className="nav-list-link "
                            href="https://barnesindustries.com.ar/gift-card1/"
                          >
                            Gift Cards
                          </a>
                        </li>
                      </div>
                    </ul>
                  </li>
                  <li
                    className="js-desktop-nav-item  nav-item"
                    data-component="menu.item"
                  >
                    <a
                      className="nav-list-link "
                      href="https://barnesindustries.com.ar/sale/"
                    >
                      SALE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>

          {/* iniciar sesion crear cuenta */}
          <div className="modal-footer text-right  hamburger-footer mb-0 p-0">
            <div className="d-block d-md-none">
              <div className="nav-secondary text-left" data-store="account-links">
                <div className="p-3">
                  <span className="utilities-container text-transform">
                    <a
                      href="https://barnesindustries.com.ar/account/login/"
                      title=""
                    >
                      Iniciar sesión
                    </a>
                    <span className="mx-1">/</span>
                    <a
                      href="https://barnesindustries.com.ar/account/register"
                      title=""
                    >
                      Crear cuenta
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* CARRITO SMART */}
      <CarritoSmart isCarritoVisible={isCarritoVisible} setIsCarritoVisible={setIsCarritoVisible} toggleCarritoVisibility={toggleCarritoVisibility}/>
    </>

    </div>
  )
}

export default Header