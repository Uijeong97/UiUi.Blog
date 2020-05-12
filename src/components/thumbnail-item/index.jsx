import React from 'react'
import { Link } from 'gatsby'
import { Tags } from '../post-tag'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => (
  <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
    <div key={node.fields.slug}>
      <h3 className="thumbnail-title">{node.frontmatter.title || node.fields.slug}</h3>
      <Tags items={node.frontmatter.tags} />
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  </Link>
)
