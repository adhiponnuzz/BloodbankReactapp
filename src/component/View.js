import React from 'react'
import Header from './Header'

const View = () => {
    var viewlist=[
        {"name": "krishna",
        "address": "kripavilasam",
        "bloodgroup": "o+",
        "mobileno": "9917181313",
        "username": "krishna11",
        "password": "11111"

        },
        {
        "name": "Nivedh",
        "address": "Nivedhvilasam",
        "bloodgroup": "o-",
        "mobileno": "9907180303",
        "username": "Nivedh11",
        "password": "4444"
        }
    ]
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
  <tbody>
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
  </tbody>
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