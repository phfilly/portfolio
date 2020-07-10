import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'

class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      selectedIndex: 0,
    }

    this.toggleLightbox = this.toggleLightbox.bind(this)
  }
  toggleLightbox(selectedIndex) {
    this.setState(state => ({
      lightboxIsOpen: !state.lightboxIsOpen,
      selectedIndex,
    }))
  }
  renderGallery(images) {
    if (!images) return

    const gallery = images.map((obj, i) => {
      const techStack =
        obj.tech &&
        obj.tech.map((item, j) => {
          return (
            <div className="tech-item" key={(item, j)}>
              {item}
            </div>
          )
        })

      let site = ''
      if (obj.site) {
        site = (
          <a href={obj.site} className="view-site">
            view site
          </a>
        )
      }

      let duration = ''
      if (obj.duration) {
        duration = (
          <small className="duration">{obj.duration}</small>
        )
      }

      return (
        <div className="work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.source}
            onClick={e => {
              e.preventDefault()
              this.toggleLightbox(i)
            }}
          >
            <img src={obj.thumbnail} alt={obj.thumbnail} />
            {site}
          </a>

          <h3>
            {obj.caption} {duration}
          </h3>
          <p>{obj.description}</p>
          <div className="stack-container">{techStack}</div>
        </div>
      )
    })

    return <div class="article-container">{gallery}</div>
  }
  render() {
    const { images } = this.props
    const { selectedIndex, lightboxIsOpen } = this.state

    return (
      <div>
        {this.renderGallery(images)}
        <ModalGateway>
          {lightboxIsOpen && (
            <Modal onClose={this.toggleLightbox}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    )
  }
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
