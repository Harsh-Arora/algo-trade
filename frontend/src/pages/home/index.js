import React from 'react'
import BasicNav from '../../components/navbar/basicNav'
import Arrow from '../../static/images/icons/arrow.svg'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <BasicNav />
      <div className='wrapper'>
        <div className='wrapper-inner'>
          <div className='super-heading'>The AlgoTrader</div>
          <div className='home-sub-heading'>Your Money Making Machine</div>
          <Link className='btn btn-theme-primary' to='/register-basic'>
            Start for Free
            <img src={Arrow} />
          </Link>

          <div className='btn-desc'>
            It's free and takes less than a minute!{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
