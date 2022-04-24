import React, { useState, useEffect, useDebugValue } from 'react'
import BasicNav from '../../components/navbar/basicNav'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

import Arrow from '../../static/images/icons/arrow.svg'

const RegKotak = () => {
  let [credentials, setCredentials] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    credentials = JSON.parse(localStorage.getItem('regDetails'))
    console.log(credentials)
    if (!credentials) {
      navigate('/register-basic')
    }
  }, [])

  const registerUser = async (e) => {
    e.preventDefault()
    localStorage.clear()
    await Axios.post('http://localhost:3001/auth/register', credentials).then(
      ({ data }) => {
        if (data.message == 'VALID' && data.token != '') {
          localStorage.setItem('token', data.token)
          navigate('/dashboard')
        }
      }
    )
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
                placeholder='Kotak Username'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    kotakUsername: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Kotak Password'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    kotakPassword: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Kotak Access Token'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    kotakAccessToken: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Consumer Key'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    kotakConsumerKey: e.target.value,
                  })
                }}
              />
            </div>

            <div class='mb-3'>
              <input
                type='text'
                class='form-control'
                placeholder='Consumer Secret'
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    kotakConsumerSecret: e.target.value,
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
              onClick={registerUser}
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

export default RegKotak
