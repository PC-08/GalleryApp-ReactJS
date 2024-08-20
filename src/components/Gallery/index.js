import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

const imagesList = [
  {
    id: 0,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
    imageAltText: 'nature mountain with pond',
    thumbnailAltText: 'nature mountain with pond thumbnail',
  },
  {
    id: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
    imageAltText: 'nature sunset',
    thumbnailAltText: 'nature sunset thumbnail',
  },
  {
    id: 2,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
    imageAltText: 'nature mountain with ocean',
    thumbnailAltText: 'nature mountain with ocean thumbnail',
  },
  {
    id: 3,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
    imageAltText: 'nature mountain with forest',
    thumbnailAltText: 'nature mountain with forest thumbnail',
  },
  {
    id: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
    imageAltText: 'nature leaves',
    thumbnailAltText: 'nature leaves thumbnail',
  },
  {
    id: 5,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
    imageAltText: 'nature tree',
    thumbnailAltText: 'nature tree thumbnail',
  },
  {
    id: 6,
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
    imageAltText: 'nature waterfall',
    thumbnailAltText: 'nature waterfall thumbnail',
  },
  {
    id: 7,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
    imageAltText: 'nature river',
    thumbnailAltText: 'nature river thumbnail',
  },
]

// Write your code here.

class Gallery extends Component {
  state = {
    activeImgUrl:
      'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
    imgAlt: 'nature mountain with pond',
    activeTabid: imagesList[0].id,
  }

  getActiveimg = (imageUrl, imageAltText) => {
    this.setState({
      activeImgUrl: imageUrl,
      imgAlt: imageAltText,
    })
  }

  setTabalive = value => {
    this.setState({activeTabid: value})
  }

  render() {
    const {activeImgUrl, imgAlt, activeTabid} = this.state

    return (
      <div className="bg">
        <div>
          <img className="aimg" alt={imgAlt} src={activeImgUrl} />
        </div>

        <div className="box">
          <h1 className="head">Nature Photography</h1>
          <p className="para">Nature Photography by Poorna</p>
          <ul className="ul">
            {imagesList.map(each => (
              <ThumbnailItem
                key={each.id}
                imageUrl={each.imageUrl}
                thumbnailUrl={each.thumbnailUrl}
                imageAltText={each.imageAltText}
                thumbnailAltText={each.thumbnailAltText}
                getActiveimg={this.getActiveimg}
                uid={each.id}
                setTabalive={this.setTabalive}
                isActive={each.id === activeTabid}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Gallery
