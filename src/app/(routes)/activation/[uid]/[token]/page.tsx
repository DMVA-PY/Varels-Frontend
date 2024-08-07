'use client'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/activation/[uid]/[token]/activation.css'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { FaCheck } from "react-icons/fa";
import { useActivationMutation } from '@/redux/features/authApiSlice'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import 'ldrs/ring'
import { tailspin } from 'ldrs'
tailspin.register()

interface Props {
  params: {
    uid: string;
    token: string;
  } 
}

 export default function Page({ params }: Props)  {
  const router = useRouter()
  const [activation] = useActivationMutation();

  useEffect(() => {
    const {uid,token} = params;

      activation({ uid, token })
        .unwrap()
        .then(() => {
          toast.success("Account activated")
        })
        .catch(() => {
          toast.error("Failed to activate account ")
        })
        .finally(() => {
          router.push('/account/login')
        });
  }, []);
  
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
        <h1 className='account-sucess-page'>Activating account...</h1>
      </div>

      <div className='account-icon'>

<l-tailspin
  size="40"
  stroke="5"
  speed="0.9" 
  color="black" 
></l-tailspin>
      </div>

    </div>
  )
}
