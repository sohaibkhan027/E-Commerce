import React from 'react'
import './StyleReg.css'

function Signup() {
  return (
    <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
<div className="wrapper wrapper--w680">
<div className="card card-4">
<div className="card-body">
<h2 className="title">Registration Form</h2>
<form method="POST">
<div className="row row-space">
<div className="col-2">
<div className="input-group">
<label className="label">first name</label>
<input className="input--style-4" type="text" name="first_name"/>
</div>
</div>
<div className="col-2">
<div className="input-group">
<label className="label">last name</label>
<input className="input--style-4" type="text" name="last_name"/>
</div>
</div>
</div>
<div className="row row-space">
<div className="col-2">
<div className="input-group">
<label className="label">Email</label>
<input className="input--style-4" type="email" name="email"/>
</div>
</div>
<div className="col-2">
<div className="input-group">
<label className="label">Phone Number</label>
<input className="input--style-4" type="text" name="phone"/>
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

export default Signup