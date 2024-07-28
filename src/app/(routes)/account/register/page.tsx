'use client'
import React, { ChangeEvent, useState } from 'react'
import '/home/vare/project/farm_varels/Varels-Frontend/src/app/(routes)/account/register/login.css'

const page = () => {
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

  return (
    <div className="container-register">
        <div className="container">
          <section className="page-header py-4 " data-store="page-title">
            <div className="breadcrumbs ">
              <a className="crumb" href="https://barnesindustries.com.ar/" title="Barnes Industries">Inicio</a>
              <span className="separator">|</span>
              <a className="crumb" href="https://barnesindustries.com.ar/account" title="Mi Cuenta">Mi Cuenta</a>
              <span className="separator">|</span>
              <span className="crumb active">Crear Cuenta</span>
            </div>
            <h1 className="h3-huge h1-huge-md ">Crear cuenta</h1>
          </section>
        </div>

        <div className="account-pagee ">

          <div className="container">

            <div className="roww">
              <div className="col-md-5">
                <div className="mb-4">Comprá más rápido y llevá el control de tus pedidos, ¡en un solo lugar!</div>

                <form id="register-form" action="https://barnesindustries.com.ar/account/register" method="post" className="js-form form " data-store="account-register">
                 
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
                    <input onChange={onChange} type="password" id="password_confirmation" name="password_confirmation" autoCorrect="off" autoCapitalize="off" autoComplete="off" className="js-account-input js-password-input form-control " required placeholder="ej.: tucontraseña" />
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
                    Crear cuenta
                    <span className="js-form-spinner form-spinner icon-inline icon-spin svg-icon-mask ml-2" style={{display: 'none'}} />
                  </button>
                  
                  <div className="mt-2 mb-2 text-center font-small">
                    ¿Ya tenés una cuenta?
                    <a href="https://barnesindustries.com.ar/account/login/" className="btn-link font-small mb-2 ml-1">Iniciá sesión</a>
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