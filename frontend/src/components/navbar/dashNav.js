import React from 'react'
import Arrow from '../../static/images/icons/arrow.svg'
import { Link } from 'react-router-dom'

const DashNav = () => {
  return (
    <nav class='navbar navbar-expand-lg basic-nav'>
      <div class='container-fluid'>
        <Link class='navbar-brand' to='/'>
          AlgoTrader
        </Link>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav ms-auto'>
            <li class='nav-item'>
              <Link
                class='nav-link btn btn-theme-secondary'
                to='/register-basic'
              >
                Sign Up
                <img src={Arrow} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default DashNav
