import React from 'react'
import Links from './links/Links'

function NavBar() {
  return (
    <div className='h-24 flex flex-row justify-between items-center'>
      <div className='text-3xl font-bold'>Logo</div>
      <Links/>
    </div>
  )
}

export default NavBar