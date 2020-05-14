import React, { useMemo } from 'react'

import { ThumbnailContainer } from '../thumbnail-container'
import { ThumbnailItem } from '../thumbnail-item'
import { CATEGORY_TYPE } from '../../constants'

export const Contents = ({ posts, countOfInitialPost, count, category, tag, selectTag }) => {
  const refinedPosts = useMemo(() =>
    category === tag
      ? (posts
        .filter(
          ({ node }) =>
            (category === CATEGORY_TYPE.ALL ||
              node.frontmatter.category === category)
        )
        .slice(0, count * countOfInitialPost))
      : (posts
        .filter(
          ({ node }) =>
            (category === CATEGORY_TYPE.ALL ||
              node.frontmatter.category === category)
        ).filter(
          ({ node }) =>
            node.frontmatter.tags.indexOf(tag) > -1
        )
        .slice(0, count * countOfInitialPost))
  )

  return (
    <ThumbnailContainer>
      {refinedPosts.map(({ node }, index) => (
        <ThumbnailItem node={node} key={`item_${index}`} selectTag={selectTag} />
      ))}
    </ThumbnailContainer>
  )
}