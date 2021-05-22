import React from 'react'
import { Link } from 'gatsby'
import { Tags } from '../post-tag'
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node, selectTag }) => (
  <div className={`thumbnail ${TARGET_CLASS}`} >
    <div key={node.fields.slug}>
      <Link to={node.fields.slug}>
        <h3 className="thumbnail-title">{node.frontmatter.title || node.fields.slug}</h3>
      </Link>
      <div className="thumbnail-date">{node.frontmatter.date}</div>
      <Link to={node.fields.slug}>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </Link>
      <Tags items={node.frontmatter.tags} selectTag={selectTag} />
    </div>
  </div>
)
