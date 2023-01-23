import React from 'react'
import Helmet from 'react-helmet'
import emailjs from "emailjs-com"

import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

import { DEFAULT_IMAGES } from '../data/images'
import { PORTFOLIO } from '../data/portfolio-items'

class HomeIndex extends React.Component {
  constructor() {
    super()
    this.state = { name: undefined, email: undefined, message: undefined, for: undefined, errorMessage: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name && this.state.message && this.state.email) {
      emailjs
        .sendForm(
          "default_service",
          "template_9uz9Jewh",
          event.target,
          "user_gMbxswxT5ffCUwi4JUVV9"
        )
        .then(
          () => {
            this.setState({ name: undefined, email: undefined, message: undefined, for: undefined, errorMessage: '' })
          },
          () => {
            this.setState({errorMessage: "Error sending mail. Please email me directly at philipdutoit7557@gmail.com."});
          }
        );
    } else {
      this.setState({errorMessage: "Not all fields have been entered"})
    }
  }

  render() {
    const siteTitle = 'Philip du Toit - Software Engineer'
    const siteDescription = 'Software Engineer'
    const injectGA = () => {
      if (typeof window == 'undefined') {
        return;
      }
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-173071405-1');
    };

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>A little something about me</h2>
            </header>
            <p>
              I believe programming should make our lives/daily tasks easier and
              improve efficiency. That said, my job satisfaction largely comes
              from developing purposeful builds and contributing to solutions.
              <br/><br/>
              Recently received my AWS certifications for <a href="https://www.youracclaim.com/badges/d7042630-f56c-42a0-823f-88fa28547f4f?source=linked_in_profile" target="_blank" rel="noreferrer">Solutions Architect</a> and <a href="https://www.youracclaim.com/badges/db8ff50f-63ce-4d22-b831-4bf3899a0c5b/linked_in_profile" target="_blank" rel="noreferrer">Developer associate</a>. 
            </p>
            {/* <ul className="actions">
              <li>
                <a href="#" className="button">
                  Learn More
                </a>
              </li>
            </ul> */}
          </section>

          <section id="two">
            <h2>Companies I've worked with</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ source, thumbnail, caption, description, duration }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
                  duration
                })
              )}
            />
          </section>

          <section id="two">
            <h2>Portfolio pieces</h2>
            <p>
              Please note some of the items below are not publicly accessible or
              changed, but feel free to contact me for more info
            </p>
            <Gallery
              images={PORTFOLIO.map(
                ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  site,
                  tech,
                }) => ({
                  id,
                  source,
                  thumbnail,
                  caption,
                  description,
                  site,
                  tech,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="mailto:philipdutoit7557@gmail.com" className="button">
                  Want more info?
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>What I'm busy with</h2>
            <p>
              Heading up the frontend team in 's-Hertogenbosch to build a world class sport PWA that should support very high traffic use and cater for an international audience
            </p>
          </section>

          <section id="four">
            <h2>Let's chat</h2>
            <p>I would love to hear from you.</p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form onSubmit={this.handleSubmit}>
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="12u">
                      <div>
                        <select value={this.state.for} onBlur={this.handleChange} name="for">
                          <option value="Websites">Websites</option>
                          <option value="hire">Hire</option>
                          <option value="freelance">Freelance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="12u">
                      <textarea
                        id="message"
                        placeholder="Message"
                        rows="4"
                        value={this.state.message}
                        onChange={this.handleChange}
                        name="message"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="errorMessage">{this.state.errorMessage}</div>
                  <ul className="actions">
                    <li>
                      <input type="submit" value="Send Message" />
                    </li>
                  </ul>
                </form>
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  <li>
                    <h3 className="icon fa-home">
                      <span className="label">Address</span>
                    </h3>
                    's-Hertogenbosch
                    <br />
                    The Netherlands
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +31 6 3368 7813
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:philipdutoit7557@gmail.com">philipdutoit7557@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-173071405-1" />
        <script>{injectGA()}</script>
      </Layout>
    )
  }
}

export default HomeIndex
