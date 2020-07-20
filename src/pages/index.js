import React from 'react'
import Helmet from 'react-helmet'
import emailjs from "emailjs-com"

import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb00 from '../assets/images/thumbs/00.jpg'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'
import thumb07 from '../assets/images/thumbs/07.jpg'
import thumb08 from '../assets/images/thumbs/08.jpg'
import thumb09 from '../assets/images/thumbs/09.jpg'
import thumb10 from '../assets/images/thumbs/10.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: thumb00,
    thumbnail: thumb00,
    caption: 'Co-Founder & Developer',
    duration: '6 years - current',
    description:
      'Been freelancing for the last 6 years in my free-time and slowly accumulated a steady client base. I have been fortunate to have clients in different industries but primarily only building web solutions that will help small sized businesses to have an online/ecommerce presence',
  },
  {
    id: '2',
    source: thumb01,
    thumbnail: thumb01,
    caption: 'Team lead at BBD',
    duration: '9+ months - current',
    description:
      'Currently stationed as a consultant at a UK based gambling client with a team in Cape Town. Implementing 3rd party game & wallet integrations whilst modernizing their current infrastructure',
  },
  {
    id: '3',
    source: thumb01,
    thumbnail: thumb01,
    caption: 'Software Engineer at BBD',
    duration: '1.11 years - current',
    description:
      'Was part of a team on a wagering solutions client, creating a product for online & high traffic use. Bookmakers are able to fully customise their client facing software in a safe & secure way. Ultimately, the product will be SANS & GLI approved - working through and with the required regulations makes an interesting challenge',
  },
  {
    id: '4',
    source: thumb02,
    thumbnail: thumb02,
    caption: 'Full Stack Developer & Team lead at Continuon',
    duration: '1.3 years',
    description:
      'Building a personalised marketing & social intelligence platform. Continuon allows brands to find their voice in an increasingly cluttered world. Understand peoples interests and influence based on deep behavioural insights, build personalised campaigns to engage & nurture them, resulting in increased brand advocacy and authentic one-to-one relationships.',
  },
  {
    id: '5',
    source: thumb03,
    thumbnail: thumb03,
    caption: 'Full Stack Software Developer at Dreamstate Interactive',
    duration: '2.9 years',
    description:
      'At the time I was managing a team of 3 developers, doing client management, project management and development as well. Majority of my time was spent on building custom web based solutions. This ranges from Laboratory -, Helpdesk/Ticketing -, Website CMS - and Cloud based Business Management solutions. I enjoyed being able to work as a full stack developer and working for a small software company. This forced me to learn faster and adapt quickly as I often found myself in difficult situations.',
  },
  {
    id: '6',
    source: thumb04,
    thumbnail: thumb04,
    caption: '3D Visualization Artist at Pattichides & Partners',
    duration: '9 months',
    description:
      'Creating photo realistic renders by using 3Ds Max Design, AutoCAD, VRAY and Adobe Photoshop',
  },
]

const PORTFOLIO = [
  {
    id: '1',
    source: thumb01,
    thumbnail: thumb01,
    caption: 'BBD | Rank Interactive & Shift tech',
    site: '',
    description:
      "I'm part of a team that's implementing 3rd party game providers and modernizing an existing stack",
    tech: [
      'Java',
      'Springboot',
      'Postman',
      'msSQL',
      'Jenkins'
    ],
  },
  {
    id: '2',
    source: thumb01,
    thumbnail: thumb01,
    caption: 'BBD | Turfsport',
    site: 'https://www.turfsport.co.za',
    description:
      "I'm part of a team that's building a wagering software solution which will allow for online betting in sports, numbers and horse racing.",
    tech: [
      'Angular',
      'NoSQL',
      'SASS',
      'python',
      'AWS Services 10+',
      'TFS',
    ],
  },
  {
    id: '3',
    source: thumb02,
    thumbnail: thumb02,
    caption: 'Continuon | Social Intelligence Platform',
    site: 'https://www.continuon.co',
    description:
      'We created an intelligence platform that helped brands understand their social media communities & content, identify nano-influencers, and build data-driven campaigns that increased ROI.',
    tech: [
      'JS',
      'PHP',
      'OrientDB',
      'SQL',
      'docker',
      'python',
      'AWS Services 10+'
    ],
  },
  {
    id: '4',
    source: thumb08,
    thumbnail: thumb08,
    caption: 'DSI | National Lottery',
    site: 'https://www.nationallottery.co.za',
    description:
      'A small team of us at DSI built the ZA national lottery website in 2016-2017, where we also extended it BI dashboards & Payment services for online play',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql', 'wordpress'],
  },
  {
    id: '5',
    source: thumb05,
    thumbnail: thumb05,
    caption: 'DSI | Resmed',
    description:
      'I installed and maintained a Laboratory management system for a blood lab in Lubumbashi, Democratic Republic of the Congo in early 2017',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '6',
    source: thumb05,
    thumbnail: thumb05,
    caption: 'DSI | Dreamstate Interactive',
    description:
      'We created a Cloud based web platform called DreamER which could be white labeled. This system allowed for multiple input channels to receive and collate data into a centralized system',
    site: 'http://www.dsisa.co.za/',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '8',
    source: thumb07,
    thumbnail: thumb07,
    caption: 'DSI | Food Consulting Services',
    description:
      "I maintained and improved FCS's Laboratory system to help with daily capturing of samples and automating reports for clients & internal use",
    site: 'https://foodconsulting.co.za',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '7',
    source: thumb03,
    thumbnail: thumb03,
    caption: 'DSI | Initial Saudi Arabia',
    description:
      'I help build a helpdesk ticketing system for King Abdullah Economic City in Jeddah 2016-2017',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '9',
    source: thumb09,
    thumbnail: thumb09,
    caption: 'DSI | Cherrymoss Accounting',
    description:
      'Built a company website with a PHP CMS system for an accounting client',
    site: 'http://www.cherrymossaccounting.co.za/',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '10',
    source: thumb10,
    thumbnail: thumb10,
    caption: 'DSI | DSI Design',
    description:
      'Built a design website for one of DSIs departments at the time to help promote their services independently of the parent company',
    site: 'http://design.dsisa.co.za/home',
    tech: ['html', 'css', 'jquery', 'javascript', 'php', 'mysql'],
  },
  {
    id: '11',
    source: thumb06,
    thumbnail: thumb06,
    caption: 'Freelance | Craft Loyalty',
    description:
      'Website I did for a small company in Jhb which focuses on loyalty payment rewards in Africa',
    site: 'http://craftloyalty.co.za/',
    tech: [
      'html',
      'css',
      'jquery',
      'javascript',
      'php',
      'mysql',
      'google analytics',
      'wordpress',
    ],
  },
]

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
            this.setState({errorMessage: "Error sending mail. Please email directly philip@ootw.co.za."});
          }
        );
    } else {
      this.setState({errorMessage: "Not all fields have been entered"})
    }
  }

  render() {
    const siteTitle = 'Philip du Toit - Software Developer'
    const siteDescription = 'Software Developer'
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
              Recently got <a href="https://www.youracclaim.com/badges/db8ff50f-63ce-4d22-b831-4bf3899a0c5b/linked_in_profile" target="_blank" rel="noreferrer">certified</a> by AWS. And busy with the next one.
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
                <a href="mailto:philip@ootw.co.za" className="button">
                  Want more info?
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>What I'm busy with</h2>
            <p>
              Currently stationed as a consultant at a wagering solutions
              client, creating a product for online & high traffic use.
              Bookmakers are able to fully customise their client facing
              software in a safe & secure way. Ultimately, the product will be
              SANS & GLI approved - working through and with the required
              regulations makes an interesting challenge.
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
                    Oranjezicht
                    <br />
                    Cape Town
                    <br />
                    South Africa
                  </li>
                  <li>
                    <h3 className="icon fa-mobile">
                      <span className="label">Phone</span>
                    </h3>
                    +27 83 401 6400
                  </li>
                  <li>
                    <h3 className="icon fa-envelope-o">
                      <span className="label">Email</span>
                    </h3>
                    <a href="mailto:philip@ootw.co.za">philip@ootw.co.za</a>
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
