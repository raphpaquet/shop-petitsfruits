import React from 'react'
import Contact from '../components/Contact'

export default function HomeScreen() {
  return (
    <div>
      <div>
        <img src="./images/skate.png" alt="skateboard peint par petitsfruits" className="large" />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  )
}
