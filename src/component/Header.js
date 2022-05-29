import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
      <Link to="/" class="navbar-brand">HOME</Link>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <Link to="/" class="nav-link active">Signup</Link>
        
        </li>
        <li class="nav-item">
            <Link to="/sign" class="nav-link">Signin</Link>
          
        </li>
        <li class="nav-item">
            <Link to="/view" class="nav-link">View</Link>
          
        </li>
        <li class="nav-item">
            <Link to="/search" class="nav-link">Search</Link>
          
        </li>

      </ul>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Header