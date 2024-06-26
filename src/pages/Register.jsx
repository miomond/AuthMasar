import React from 'react'
import Styles from './Register.module.css'
import Logo from '../assets/Logo.png'
import Facebook from '../assets/facebook.svg'
import FcGoogle from '../assets/google-color-svgrepo-com.svg'

function Register() {
  return (
    <>

<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-center w-100" href="#">
      <img
        src={Logo}
        alt="Logo"
        width={45}
        height={36}
        className="d-inline-block align-text-top"
      />
     Masar Academy
    </a>
  </div>
</nav>

{/* Form section */}
<form>
<div  className=' d-flex flex-column justify-content-around  p-2 p-xl-5 mr-5  form  '>
<h2 className=' head text-center my-5 pt-5 '>SIGN UP</h2>
  <div className="mb-3  d-flex justify-content-around">
   <button className='btn border border-1 w-50 me-1 me-xl-2  d-flex py-2 justify-content-around'><img src={Facebook} alt="perfect"  className='me-xl-3 SignLogo'  /><p className='  h5 '>Sign In With FacebooK</p></button>
   <button className='btn border border-1 w-50 ms-1 ms-xl-2 d-flex py-2 justify-content-around'><img src={FcGoogle} alt="porto"  className='me-xl-3 SignLogo'  /><p className='   h5 '>Sign In With Google</p></button>
  </div>


  <div className="  my-3 d-flex justify-content-center align-items-center">
    <hr className='w-100' />     <h6 className='mt-1 px-4'>Or</h6>     <hr className='w-100' />   </div>

  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Email address
    </label>
    <input
    
      type="email"
      className="form-control  py-3"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="mb-3"> <label htmlFor="Password" className="form-label"> Password </label> <input   type="password"   className="form-control  py-3"   id="Password"   placeholder="password" />
          </div>

  <div className="mb-3 d-flex justify-content-center">

<small className='text-center w-100 bgTotex mt-5'>by clicking “sign in,” you agree to our terms of use and our privacy policy</small>

  </div>


</div>

{/* Slider section */}
<div className="slid    d-none d-lg-block  ">

<div  className={`bannar ${Styles.bannar} d-flex  flex-column justify-content-start mt-4 pt-5 w-50`}>

<div  className=' mt-5   d-flex    flex-column justify-content-between align-items-center content    w-100  h-50 '>
    <h2 className='mt-5 mb-4  h2 tex'>Welcome Back !</h2>
    <h3 className=' my-3 h3     tex'>Sign In to You Account</h3>
    <p  className=' w-75 px-5 mx-5    tex    text-center'>build skills for today , tomorrow , and beyond, education to futer proof your career..</p>
    <button type="button" className="  rounded-5 mt-4 px-5 py-1  bgTotex PRtoBG buhover">Sign Up</button>
</div>


</div>

</div>
</form>
</>
  )
}

export default Register