import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

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

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    source: thumb01,
    thumbnail: thumb01,
    caption: 'Full Stack Software Developer at BBD',
    description:
      'Currently stationed as a consultant at a wagering solutions client, creating a product for online & high traffic use. Bookmakers are able to fully customise their client facing software in a safe & secure way. Ultimately, the product will be SANS & GLI approved - working through and with the required regulations makes an interesting challenge',
  },
  {
    id: '2',
    source: thumb02,
    thumbnail: thumb02,
    caption: 'Full Stack Software Developer & Team lead at Continuon',
    description:
      'Building a personalised marketing & social intelligence platform. Continuon allows brands to find their voice in an increasingly cluttered world. Understand peoples interests and influence based on deep behavioural insights, build personalised campaigns to engage & nurture them, resulting in increased brand advocacy and authentic one-to-one relationships.',
  },
  {
    id: '3',
    source: thumb03,
    thumbnail: thumb03,
    caption: 'Full Stack Software Developer at Dreamstate Interactive',
    description:
      'At the time I was managing a team of 3 developers, doing client management, project management and development as well. Majority of my time was spent on building custom web based solutions. This ranges from Laboratory -, Helpdesk/Ticketing -, Website CMS - and Cloud based Business Management solutions. I enjoyed being able to work as a full stack developer and working for a small software company. This forced me to learned faster and adapt quickly as I often found myself in difficult situations. Being challenged is great.',
  },
  {
    id: '4',
    source: thumb04,
    thumbnail: thumb04,
    caption: '3D Visualization Artist at Pattichides & Partners',
    description:
      'Creating photo realistic renders by using 3Ds Max Design, AutoCAD, VRAY and Adobe Photoshop',
  },
]

const PORTFOLIO = [
  {
    id: '1',
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
      'html',
      'css',
    ],
  },
  {
    id: '2',
    source: thumb02,
    thumbnail: thumb02,
    caption: 'Continuon | Social Intelligence Platform',
    site: 'https://www.continuon.co',
    description:
      'We created an intelligence platform that helped brands understand their social media communities & content, identify nano-influencers, and build data-driven campaigns that increased ROI.',
    tech: [
      'vuejs',
      'Laravel',
      'OrientDB(graph db)',
      'mysql',
      'posgreSQL',
      'SASS',
      'docker',
      'python',
      'AWS Services 10+',
      'html',
      'css',
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
    source: thumb08,
    thumbnail: thumb08,
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
      'I was part of a small team that created white label solutions to solve problems within a company or industry. To do this, we created a Cloud based web platform called DreamER. This system allowed for multiple input channels to receive and collate data into a centralized system',
    site: 'http://www.dsisa.co.za/',
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
  render() {
    const siteTitle = 'Philip du Toit - Software Developer'
    const siteDescription = 'Software Developer'

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
              increase efficiency. That said, my job satisfaction largely comes
              from developing purposeful builds and contributing to solutions.
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
                ({ id, source, thumbnail, caption, description }) => ({
                  source,
                  thumbnail,
                  caption,
                  description,
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
                  Contact me, should you want more examples
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
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                    <div className="6u 12u$(xsmall)">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="12u">
                      <div>
                        <select>
                          <option value="Websites">Websites</option>
                          <option value="hire">Hire</option>
                          <option value="freelance">Freelance</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="12u">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                      />
                    </div>
                  </div>
                </form>
                <ul className="actions">
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
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
      </Layout>
    )
  }
}

export default HomeIndex
