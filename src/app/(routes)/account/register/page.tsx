'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/register/register.css'
import '/home/vare/project/farm_varels/Varels-Frontend/src/styles/tailwind_only_css.css'

import Link from 'next/link'
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Spinner from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Spinner'
import RegisterForm  from '/home/vare/project/farm_varels/Varels-Frontend/src/components/forms/RegisterForm';

const page = () => {
  
  return (
    <div className="login-container">

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

        <div className="smaller-container">
          <div className="container">
            <div className="row-page">
              <div className="">
                  <h1 className="">Crear cuenta</h1>
                  <div className="mb-4">Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</div>
                  <RegisterForm/>
                  <div className=" mt-2 mb-2 text-center font-small">
                    ¿Ya tenés una cuenta?
                    <Link href="/account/login/" className="btn-link font-small mb-2 ml-1">Iniciá sesión </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
  )
}
export default page;