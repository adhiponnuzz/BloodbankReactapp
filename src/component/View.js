import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewlist,setviewlist]=useState([])
    var [loadstatus,setloadstatus]=useState(true)

    axios.get("http://localhost:2000/api/view").then((Response)=>{
      console.log(Response.data)
      setviewlist(Response.data)
      setloadstatus(false)
    })
  return (
    <div>
        <Header/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-primary table-striping">
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">address</th>
      <th scope="col">bloodgroup</th>
      <th scope="col">mobileno</th>
      <th scope="col">username</th>
      <th scope="col">password</th>
    </tr>
  </thead>
  {loadstatus ?<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<tbody>
    {viewlist.map((value,key)=>{
        return <tr>
      
        <td>{value['name']}</td>
        <td>{value.address}</td>
        <td>{value.bloodgroup}</td>
        <td>{value.mobileno}</td>
        <td>{value.username}</td>
        <td>{value.password}</td>
      </tr>
      







    })}
  </tbody>}
</table>



                        </div>



                    </div>


                </div>



            </div>



        </div>



    </div>
  )
}

export default View