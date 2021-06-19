import React from 'react'
import AdSense from 'react-adsense'
import { StaticQuery, graphql } from 'gatsby'

export const AdsBlock = ({slot, style, layout, layoutKey, format, responsive}) => (
    <StaticQuery
      query={adsQuery}
      render={data => {
        const { adsense } = data.site.siteMetadata
        return (<AdSense.Google
                    client={adsense.client}
                    slot={slot}
                    style={style}
                    layout={layout}
                    layoutKey={layoutKey}
                    format={format}
                    responsive={responsive}
                />)
      }}/>
)

const adsQuery = graphql`
    query AdsQuery {
        site {
            siteMetadata {
            adsense {
                client
            }
            }
        }
    }
`

export default AdsBlock