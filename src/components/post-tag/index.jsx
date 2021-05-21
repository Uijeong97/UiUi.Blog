import React from 'react'
import { capitalize } from '../../utils/string'
import { Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import './index.scss'

function cssSafe(str) {
    return encodeURIComponent(str.toLowerCase()).replace(/%[0-9A-F]{2}/gi, '')
}

export const Tags = ({ items, selectTag }) => {
    return (
        <div className={`pills-${items.length}`}>
            {(items || []).map(item => (
                <span
                    className={`pill pill--${cssSafe(item)}`}
                    key={item}
                    style={{ marginRight: 10 }}
                    onClick={() => selectTag(item)}
                >
                    # {capitalize(item)}
                </span>
            ))}
        </div>
    )
}

export default Tags