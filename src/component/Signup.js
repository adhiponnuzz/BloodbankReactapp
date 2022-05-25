import React, { useState } from 'react'

const Signup = () => {
    var [name,setName]=useState("")
    var [address,setAddress]=useState("")
    var [bloodgroup,setBlood]=useState("")
    var [mobileno,SetMobileno]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("") 

    const subData=()=>{
        const data={"Name":name,"Address":address,"Bloodgroup":bloodgroup,"Mobileno":mobileno,"Username":username,"Password":password}
        console.log(data)



    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <textarea onChange={(e)=>{setAddress(e.target.value)}} placeholder="Enter Address" name="" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Blood Group</label>
                    <input onChange={(e)=>{setBlood(e.target.value)}} placeholder="Enter Bloodgroup" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Mobile No</label>
                    <input onChange={(e)=>{SetMobileno(e.target.value)}} placeholder="Enter MobileNo" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}}  placeholder="Enter Username" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-success">SIGNUP</button>
                </div>
            </div>
        </div>
    </div>
</div>






    </div>
  )
}

export default Signup