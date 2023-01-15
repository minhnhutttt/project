import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useLocation } from '@reach/router';
const Header = (props) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <header
    className="fixed left-0 right-0 top-0 md:h-[72px] bg-white/[0.1] flex items-center md:justify-between justify-center md:flex-row flex-col lg:px-[100px] px-5 md:py-0 py-3"
    >
      <Link to={"/"} className="md:w-auto w-[200px]">
        <StaticImage src="../images/logo.png" alt="" />
      </Link>
      <div className="flex space-x-5 px-5 md:py-0 py-3">
        <Link to={"/bridge"} className={`text-xl md:text-2xl text-black no-underline ${path === "/bridge/" && 'font-bold'}`}>
          Bridge
        </Link>
        <Link to={"/tokens"} className={`text-xl md:text-2xl text-black no-underline ${path === "/tokens/" && 'font-bold'}`}>
          Tokens
        </Link>
      </div>
      <div className="md:w-[275px]"></div>
    </header>
  )
}

export default Header
