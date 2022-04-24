import React, { useState } from 'react'
import BasicNav from '../../components/navbar/basicNav'

import { useNavigate } from 'react-router-dom'

import Arrow from '../../static/images/icons/arrow.svg'

const RegBasic = () => {
  const [credentials, setCredentials] = useState({})
  const navigate = useNavigate()

  const toStepTwo = (e) => {
    e.preventDefault()
    console.log(`going to next page`)
    localStorage.setItem('regDetails', JSON.stringify(credentials))
    navigate('/register-kotak')
  }

  return (
    <div className='register'>
      <BasicNav />
      <div className='wrapper'>
        <div className='wrapper-container col-md-4 offset-md-4'>
          <div className='heading'>Register</div>
          <hr />
          <form className='form'>
            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Full Name'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    name: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='email'
                class='form-control'
                placeholder='Email'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='password'
                class='form-control'
                placeholder='Password'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='password'
                class='form-control'
                placeholder='Retype Password'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    repassword: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='number'
                class='form-control'
                placeholder='Aadhar Number'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    aadharNumber: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='number'
                class='form-control'
                placeholder='Mobile Number'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    mobileNumber: e.target.value,
                  })
                }}
              />
            </div>

            <div id='emailHelp' class='form-text'>
              We'll never share your email with anyone else.
            </div>

            <button
              type='submit'
              class='btn btn-theme-secondary'
              onClick={toStepTwo}
            >
              Continue
              <img src={Arrow} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegBasic
