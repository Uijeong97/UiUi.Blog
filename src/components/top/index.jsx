import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = false
  return (
    <div className="top">
      {!isRoot && (
        <Link to={`/`} className="link">
          {title}
        </Link>
      )}
      <div className="right">
        <div className="post">
          <Link to={`/`} className="post">
            post
          </Link>
        </div>
        <div className="about">
          <Link to={`/about`} className="about">
            about
          </Link>
        </div>
        <GitHubIcon />
      </div>
    </div>
  )
}
