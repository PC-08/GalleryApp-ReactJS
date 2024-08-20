// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
    getActiveimg,
    isActive,
    uid,
    setTabalive,
  } = props

  const simg = isActive ? 'op' : ''

  const onImgClick = () => {
    getActiveimg(imageUrl, imageAltText)
    setTabalive(uid)
  }

  return (
    <li onClick={onImgClick} className={`li ${simg}`}>
      <button className="bt-gal" type="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
