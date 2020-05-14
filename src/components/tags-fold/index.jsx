import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Tagsfold = ({ category, selectCategory, tag, selectTag }) => {
    return (
        <div className="tags-fold">
            <h2 className="custom-h2" onClick={() => selectCategory(category)}>{category}</h2>
            {
                (tag != category && tag != "All") &&
                <div className="custom-h2">/
                <h2 className="custom-h2" onClick={() => selectTag(tag)}>{tag}</h2>
                </div>
            }
            <hr className="custom-hr2" />
        </div>
    )
}
