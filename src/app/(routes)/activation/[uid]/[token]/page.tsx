'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/activation/[uid]/[token]/activation.css'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { FaCheck } from "react-icons/fa";


const page = () => {
  
  return (
    <div className="login_container">

      <div className="container">
        <section className="page-header py-4 " data-store="page-title">
          <div className="breadcrumbs ">
            <Link href='/' className="crumb" title="Barnes Industries">Inicio</Link>
            <span className="separator">|</span>
            <a className="crumb" href="https://barnesindustries.com.ar/account" title="Mi Cuenta">Mi Cuenta</a>
            <span className="separator">|</span>
            <span className="crumb active">Crear cuenta</span>
          </div>
        </section>
      </div>

      <div className='account-page'>
        <h1 className='account-sucess-page'>Account created</h1>
      </div>

      <div className='account-icon'>
        <FaCheck />
      </div>

      <div className='account-icon-page'>
        <h3 className='congratz-font'>Congratulations! Your account has been succesfully created.</h3>
      </div>

      <div className='account-icon-button-page'>
        <button className='green-button'>
          Return to login screen
        </button>
        </div>
      </div>
  )
}
export default page;