import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1 style={{backgroundColor: 'blue', textAlign:'center', padding:'10px', margin: '10px 0'}}><Link style={{color: 'white'}} to='/'>Home</Link></h1>
    </div>
  )
}

export default Header