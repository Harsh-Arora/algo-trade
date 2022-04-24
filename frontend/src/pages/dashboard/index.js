import React, { useEffect, useState } from 'react'
import BasicNav from '../../components/navbar/basicNav'

import Axios from 'axios'

const Dashboard = () => {
  const [output, setOutput] = useState([])

  useEffect(async () => {
    await Axios.get('http://localhost:3001/script/runPython')
      .then((data) => {
        setOutput(data['data'])
      })
      .catch((err) => {
        console.log(err)
        setOutput(err)
      })
  }, [])

  return (
    <div className='dashboard'>
      <BasicNav />
      <div className='wrapper'>
        <div className='screen'>
          {output.map((item) => {
            return <li>{item}</li>
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
