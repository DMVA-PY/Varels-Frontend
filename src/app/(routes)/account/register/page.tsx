import React, { ChangeEvent, FormEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/register/register.css'
import '/home/vare/project/farm_varels/Varels-Frontend/src/styles/tailwind_only_css.css'

import Link from 'next/link'
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Spinner from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Spinner'
import RegisterForm  from '/home/vare/project/farm_varels/Varels-Frontend/src/components/forms/RegisterForm';
import { useRegister } from '@/hooks'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Varels | Register',
	description: 'Varels register page',
};

const Page = () => {

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

        {/* form section */}
        <section className="account-page mb-4 login_form">
          <div className="container">
            <div className="row-page">

              {/* form && messages */}
              <div className="col-md-5 ">
                <div className='justified-div'>
                  <h2>Crear cuenta</h2>
                </div>
                    <RegisterForm/>
                  <div className="mt-2 mb-2 text-center font-small">
                    ¿Ya tenés una cuenta?
                    <Link href="/account/login/" className="btn-link font-small mb-2 ml-1">Iniciá sesión </Link>
                  </div>                                              
              </div>

            </div>
          </div>
        </section>
        
      </div>
  )
}
export default Page;