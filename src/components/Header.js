import React from 'react'
import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <div className="image avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <h1>
            <strong>Hi! I'm Philip</strong>, a software developer
            <br />
            &nbsp; in Rotterdam - The Netherlands
            <br />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
