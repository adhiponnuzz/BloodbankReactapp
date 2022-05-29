import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    const deleteapicall=(id)=>{
        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:4000/api/delete",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }
        })
    }
    var [name,setName]=useState("")
    const [data,setData]=useState([{"address":"","bloodgroup": "","mobileno": "", "username": "",  "password": ""}])

    const subData=()=>{

        const data={"name":name}
        console.log(data)
        axios.post("http://localhost:4000/api/search",data).then((Response)=>{
            console.log(Response.data)
            setData(Response.data)

        })
        


    }
  return (
    <div>
        <Header/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">Name</label>
                            <input placeholder="Enter Name" onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>


                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} className="btn btn-success">SEARCH</button>


                    </div>
                </div>
                {data.map((value,key)=>{
                   return <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Address</label>
                    <input placeholder="Enter Name" value={value.address} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bloodgroup</label>
                    <input placeholder="Enter Name" value={value.bloodgroup} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">MobileNo</label>
                    <input placeholder="Enter Name" value={value.mobileno} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Username</label>
                    <input placeholder="Enter Name" value={value.username} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input placeholder="Enter Name" value={value.password} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={()=>{deleteapicall(value._id)}} className="btn btn-danger">DELETE</button>


                    </div>
                    </div>




                })}


            </div>


        </div>





    </div>
    </div>
  )
}

export default Search