import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
  className="h-[72px] bg-white/[0.1]"
  >
    <Link to={"/"} >
        <StaticImage src="../images/logo.png" alt="ZEXAMARKET" />
      </Link>
  </header>
)

export default Header
