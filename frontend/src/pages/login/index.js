import React, { useState } from 'react'
import BasicNav from '../../components/navbar/basicNav'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Arrow from '../../static/images/icons/arrow.svg'

const Login = () => {
  const [credentials, setCredentials] = useState({})
  const navigate = useNavigate()

  const loginUser = async (e) => {
    e.preventDefault()
    localStorage.clear()
    await Axios.post('http://localhost:3001/auth/login', credentials).then(
      ({ data }) => {
        if (data.message == 'VALID' && data.token != '') {
          localStorage.setItem('token', data.token)
          navigate('/dashboard')
        }
      }
    )
  }

  return (
    <div className='login'>
      <BasicNav />
      <div className='wrapper'>
        <div className='wrapper-container col-md-4 offset-md-4'>
          <div className='heading'>Sign In</div>
          <hr />
          <form className='form'>
            <div class='mb-3'>
              <input
                type='email'
                class='form-control'
                placeholder='Email '
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
            <div id='emailHelp' class='form-text'>
              We'll never share your email with anyone else.
            </div>
            <button
              type='submit'
              class='btn btn-theme-secondary'
              onClick={loginUser}
            >
              Sign In
              <img src={Arrow} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
