'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/register/register.css'
import Link from 'next/link'
import { useRegisterMutation } from '@/redux/features/authApiSlice'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Spinner from '/home/vare/project/farm_varels/Varels-Frontend/src/components/common/Spinner'

const page = () => {
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
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    register({first_name, last_name, password, re_password})
      .unwrap()
      .then(()=>{
        toast.success('Please check email to verify account')
        router.push('/auth/login')
      })
      .catch(()=>{
        toast.error('Failed to register account')
      })
  };
  return (
    <div className="login-container">

        <div className="container">
          <section className="page-header py-4 " data-store="page-title">
            <div className="breadcrumbs ">
              <Link href='/' className="crumb" title="Barnes Industries">Inicio</Link>
              <span className="separator">|</span>
              <a className="crumb" href="https://barnesindustries.com.ar/account" title="Mi Cuenta">Mi Cuenta</a>
              <span className="separator">|</span>
              <span className="crumb active">Crear Cuenta</span>
            </div>
          </section>
        </div>

        <div className="smaller-container">
          <div className="container">
            <div className="row-page">
              
              <div className="">

                <h1 className="">Crear cuenta</h1>

                <div className="mb-4">Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</div>

                <form action="" method="post" className="already-account text-sm " data-store="account-register">
                 
                  <div className="form-group ">  
                    <label className="form-label" htmlFor="first_name">Nombre </label>
                    <input onChange={onChange} value={first_name} type="text" id="name" name="first_name"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: María Perez" />
                  </div>

                  <div className="form-group ">
                    <label className="form-label " htmlFor="last_name">Apellido</label>
                    <input onChange={onChange} value={last_name} id='last_name' type="text" name="last_name"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: Perez" />
                  </div>

                  <div className="form-group">
                    <label className="form-label " htmlFor="email">Email</label>
                    <input onChange={onChange} value={email} type="email" id="email" name="email"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: tuemail@email.com" />
                  </div>

                  <div className="form-group ">
                    <label className="form-label " htmlFor="phone_number">Teléfono (opcional)</label>
                    <input onChange={onChange} value={phone_number} type="tel" id="phone_number" name="phone"  autoCorrect="off" autoCapitalize="off" className="js-account-input form-control " placeholder="ej.: 1123445567" />
                  </div>
                  
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

                  <div className="form-group ">
                    <label className="form-label " htmlFor="password_confirmation">Confirmar contraseña</label>
                    
                    <input 
                      onChange={onChange} type="password" 
                      id="password_confirmation" 
                      name="password_confirmation" 
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


                  <button className="js-recaptcha-button btn btn-primary btn-big btn-block mb-3" type="submit" value="Crear cuenta"  disabled>
                    {isLoading ? <Spinner/> : "Crear cuenta"}
                  </button>
                  
                  <div className=" mt-2 mb-2 text-center font-small">
                    ¿Ya tenés una cuenta?
                    <Link href="/account/login/" className="btn-link font-small mb-2 ml-1">Iniciá sesión </Link>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
export default page;