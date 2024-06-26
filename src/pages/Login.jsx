import React from "react";
import Styles from "./Login.module.css";
import Facebook from "../assets/facebook.svg";
import FcGoogle from "../assets/google-color-svgrepo-com.svg";
import Logo from "../assets/Logo.png"

function Login() {
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




      <form>
        {/* slider */}
        <div className="slid    d-none d-lg-block  ">
        <div className={`bannar ${Styles.bannar} d-flex  flex-column justify-content-around mt-4 w-50 `} >
            <div className=" mt-lg-3   d-flex    flex-column justify-content-start align-items-center content w-100  h-75 ">
              <h2 className="mb-4  h2 tex">Welcome Back !</h2>
              <div className="mt-3  d-flex flex-column justify-content-around align-items-center content    w-100 mb-5 ">
                <h3 className="h3 p-5 tex">Sign In to You Account</h3>
                <h5 className=" w-75 px-5 tex text-center">build skills for today , tomorrow , and beyond, education tofuter proof your career.</h5>
              </div>
              {/* form submit button */}
               <button  type="button"   className="  rounded-5  px-5 py-1 mt-5  bgTotex PRtoBG buhover" > sign IN</button>
            </div>
          </div>
        </div>
{/* End Slider  */}
{/* Form Section */}
<div  className=' d-flex flex-column justify-content-around  p-2 p-xl-5 mr-5  form float-lg-end  '>
          <h2 className=" head text-center mb-5">SIGN IN</h2>
          <div className="mb-3  d-flex justify-content-around">
   <button className='btn border border-1 w-50 me-1 me-xl-2  d-flex py-2 justify-content-around'><img src={Facebook} alt="perfect"  className='me-xl-3 SignLogo'  /><p className='  h5 '>Sign In With FacebooK</p></button>
   <button className='btn border border-1 w-50 ms-1 ms-xl-2 d-flex py-2 justify-content-around'><img src={FcGoogle} alt="porto"  className='me-xl-3 SignLogo'  /><p className='   h5 '>Sign In With Google</p></button>
  </div>
          <div className="my-3 d-flex justify-content-center align-items-center">
            <hr className="w-100" />
            <h6 className="mt-1 px-4">Or</h6>
            <hr className="w-100" />{" "}
          </div>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email address
            </label>{" "}
            <input
              type="email"
              className="form-control  py-3"
              id="Email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3"> <label htmlFor="Password" className="form-label"> Password </label> <input   type="password"   className="form-control  py-3"   id="Password"   placeholder="password" />
          </div>
          <div className="mb-3 d-flex flex-column"> 
            <small className="text-center w-100 bgTotex ">   by clicking “sign in,” you agree to our terms of use and our   privacy policy </small>
            <p className=" text-center mt-4 bgTotex">forgot your password ?</p>
            <div className="  my-3 d-flex justify-content-center align-items-center">
              <hr className="w-100" />
              <h6 className="mt-1 px-4">Or</h6>
              <hr className="w-100" />{" "}
            </div>
 <p className=" text-center mt-4 bgTotex">   sign in with your organization. </p>
          </div>
        </div>
      </form>
      {/* End Form section */}
    </>
  );
}

export default Login;
