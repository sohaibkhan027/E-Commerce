import React from 'react'
import './StyleReg.css'


function Login() {
  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
    <div className="wrapper wrapper--w680">
    <div className="card card-4">
    <div className="card-body">
    <h2 className="title">Login</h2>
    <form method="POST">
    <div className="row row-space">
    <div className="col-3">
    <div className="input-group">
    <label className="label">Email</label>
    <input className="input--style-4" type="email" name="email"/>
    </div>
    </div>
    </div>
    <div className="row row-space">
    <div className="col-3">
    <div className="input-group">
    <label className="label">Password</label>
    <input className="input--style-4" type="password" name="password"/>
    </div>
    </div>
    </div>
    <div className="p-t-15">
    <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login