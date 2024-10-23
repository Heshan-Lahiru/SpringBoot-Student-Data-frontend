import React from 'react'
import Profile from './profile'
import Nav from './nav/nav'
export default function home() {


  return (
    <div>
    <div className="row">
      <Nav/>

      <Profile>  </Profile>
    </div>
    </div>
  )
}
