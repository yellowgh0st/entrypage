import { Link } from "gatsby"
import React from "react"

import 'bootstrap/dist/css/bootstrap.css'
import '../atoms/css/core.module.css'
import '../atoms/css/theme.module.css'

import Navigation from '../molecules/navigation'

const Header = () => (
  <header>
    <Navigation />
  </header>
)

export default Header
