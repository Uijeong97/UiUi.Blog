import React from 'react'
import AdSense from 'react-adsense'
import { StaticQuery, graphql } from 'gatsby'

export const AdsBlock = () => (
    <StaticQuery
      query={adsQuery}
      render={data => {
        const { adsense } = data.site.siteMetadata
  
        return (<AdSense.Google
                    client={adsense.client}
                    slot={adsense.slot}
                    style={{ display: 'block' }}
                    format='auto'
                    responsive='true'
                />)
      }}/>
)

const adsQuery = graphql`
    query AdsQuery {
        site {
            siteMetadata {
            adsense {
                client
                slot
            }
            }
        }
    }
`

export default AdsBlock