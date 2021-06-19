import React from 'react'

import './index.scss'
import { AdsBlock } from '../../components/ads-block'

export const Footer = () => (
  <footer className="footer">
      <AdsBlock
        slot="2590696989"
        style={{ display: 'block', marginTop: '32px' }}
        layout="in-article"
        layoutKey=""
        format="fluid"
        responsive='true'
       />
    <AdsBlock
        slot="6677227755"
        style={{ display: 'block', marginTop: '32px', marginBottom: '32px' }}
        format="auto"
        responsive='true'
    />
    ©<a href="https://github.com/Uijeong97">Uijeong97</a>, Built with{' '}
    <a href="https://github.com/JaeYeopHan/gatsby-starter-bee">
      Gatsby-starter-bee
    </a>
  </footer>
)
