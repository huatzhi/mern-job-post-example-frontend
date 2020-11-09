import React from 'react'

import './DescriptionItem.styles.css'

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    {title ? (
      <p className="site-description-item-profile-p-label">{title}:</p>
    ) : null}

    {content}
  </div>
)

export default DescriptionItem
