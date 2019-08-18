import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/phfilly"
                className="icon fa-twitter"
                target="_blank"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/phfilly/"
                className="icon fa-github"
                target="_blank"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:philip@ootw.co.za"
                className="icon fa-envelope-o"
                target="_blank"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Philip du Toit | Gatsby Strata</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
