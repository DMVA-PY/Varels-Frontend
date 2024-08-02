'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/register/register.css'
import '/home/vare/project/farm_varels/Varels-Frontend/src/styles/tailwind_only_css.css'
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link'
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Spinner from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Spinner'

const RegisterForm = () => {
    const router = useRouter();
    const [register, {isLoading}] = useRegisterMutation();
  
    const [formData, setFormData] = useState({    
        first_name:'',
        last_name: '',
        email: '',
        password: '',
        re_password: '',
        phone_number:'',
      }
    )
  
    const { first_name, last_name, email, password, re_password, phone_number } = formData;
  
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      register({first_name, last_name,email, password, re_password})
        .unwrap()
        .then(()=>{
          toast.success('Please check email to verify account')
          router.push('/account/login')
        })
        .catch(()=>{
          toast.error('Failed to register account')
        })
    };
    
  return (
    <div>
      {/* form */}
      <form onSubmit={onSubmit} action="" method="post" className="already-account text-sm " data-store="account-register">
        {/* name */}
        <div className="form-group ">  
          <label className="form-label" htmlFor="first_name">Nombre </label>
          <input onChange={onChange} value={first_name} type="text" id="name" name="first_name"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: María Perez" />
        </div>

        {/* lastname */}
        <div className="form-group ">
          <label className="form-label " htmlFor="last_name">Apellido</label>
          <input onChange={onChange} value={last_name} id='last_name' type="text" name="last_name"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: Perez" />
        </div>

        {/* email */}
        <div className="form-group">
          <label className="form-label " htmlFor="email">Email</label>
          <input onChange={onChange} value={email} type="email" id="email" name="email"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: tuemail@email.com" />
        </div>

        {/*  
        <div className="form-group ">
          <label className="form-label " htmlFor="phone_number">Teléfono (opcional)</label>
          <input onChange={onChange} value={phone_number} type="tel" id="phone_number" name="phone_number"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: 1123445567" />
        </div>
        */}

        {/* password */}
        <div className="form-group ">
          <label className="form-label" htmlFor="password">Contraseña</label>
          <input onChange={onChange} value={password}  type="password" id="password" name="password" autoCorrect="off" autoCapitalize="off" autoComplete="off" className="js-account-input js-password-input form-control " required placeholder="ej.: tucontraseña" />
          <a aria-label="Ver contraseña" className="js-password-toggle password-toggle btn">
            <span className="js-password-visible password-toggle-show" style={{display: 'none'}}>
              Ocultar
            </span>
            <span className="js-password-hidden password-toggle-hide">
              Mostrar
            </span>
          </a>
        </div>

        {/* re password */}
        <div className="form-group ">
          <label className="form-label " htmlFor="password_confirmation">Confirmar contraseña</label>
          
          <input 
            onChange={onChange} type="password" 
            id="re_password" 
            name="re_password" 
            autoCorrect="off" autoCapitalize="off" 
            autoComplete="off" 
            className="js-account-input js-password-input form-control" 
            required placeholder="ej.: tucontraseña" 
          />

          <a aria-label="Ver contraseña" className="js-password-toggle password-toggle btn">
            <span className="js-password-visible password-toggle-show" style={{display: 'none'}}>
              Ocultar
            </span>
            <span className="js-password-hidden password-toggle-hide">
              Mostrar
            </span>
          </a>
        </div>

        <button className="js-recaptcha-button btn btn-primary btn-big btn-block mb-3" type="submit" value="Crear cuenta" >
          {isLoading ? <Spinner sm/> : "Crear cuenta"}
        </button>

      </form>
    </div>
  )
}

export default RegisterForm;