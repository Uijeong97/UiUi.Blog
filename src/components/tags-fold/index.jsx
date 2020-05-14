import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const Tagsfold = ({ category, selectCategory }) => {
    return (
        <div className="tags-fold">
            <h2 className="custom-h2" onClick={() => selectCategory(category)}>{category}</h2>
            <hr className="custom-hr2" />
        </div>
    )
}
